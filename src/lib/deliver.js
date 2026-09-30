import { promises as fs } from 'fs';
import path from 'path';

/*
 * Server-side delivery for form submissions. Every configured channel is tried;
 * the submission counts as received if at least one accepted it.
 *   BOOKING_WEBHOOK_URL   POST JSON to any webhook (Google Sheets script, Zapier, Make, Slack…)
 *   RESEND_API_KEY + BOOKING_EMAIL_FROM   email via Resend (https://resend.com)
 *   BOOKING_EMAIL_TO      recipient (defaults to the clinic address)
 * Records are also appended to data/<store>.json when the filesystem is writable.
 */

const storePath = (store) => path.join(process.cwd(), 'data', `${store}.json`);

export async function readStore(store) {
  try {
    return JSON.parse(await fs.readFile(storePath(store), 'utf8'));
  } catch {
    return [];
  }
}

const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/**
 * @param {string} store   file name under data/
 * @param {object} record  saved as-is (an id and timestamp are added)
 * @param {{subject: string, rows: [string, string][], replyTo?: string}} email
 * @returns {Promise<{ok: boolean, record: object}>}
 */
export async function deliver(store, record, email) {
  const full = { id: crypto.randomUUID(), ...record, createdAt: new Date().toISOString() };
  const delivered = [];

  try {
    const list = await readStore(store);
    await fs.mkdir(path.dirname(storePath(store)), { recursive: true });
    await fs.writeFile(storePath(store), JSON.stringify([...list, full], null, 2));
    delivered.push('file');
  } catch (e) {
    console.warn(`[${store}] could not write store:`, e.message);
  }

  if (process.env.BOOKING_WEBHOOK_URL) {
    try {
      const r = await fetch(process.env.BOOKING_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: store, ...full }),
      });
      if (r.ok) delivered.push('webhook');
      else console.warn(`[${store}] webhook responded`, r.status);
    } catch (e) {
      console.warn(`[${store}] webhook failed:`, e.message);
    }
  }

  if (process.env.RESEND_API_KEY && process.env.BOOKING_EMAIL_FROM) {
    const rows = email.rows
      .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666;vertical-align:top">${k}</td><td><strong>${escapeHtml(v || '-')}</strong></td></tr>`)
      .join('');
    try {
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: process.env.BOOKING_EMAIL_FROM,
          to: [process.env.BOOKING_EMAIL_TO || 'drmohini@drmohinimutha.com'],
          reply_to: email.replyTo,
          subject: email.subject,
          html: `<h2 style="color:#641703">${escapeHtml(email.subject)}</h2><table>${rows}</table>`,
        }),
      });
      if (r.ok) delivered.push('email');
      else console.warn(`[${store}] resend responded`, r.status);
    } catch (e) {
      console.warn(`[${store}] email failed:`, e.message);
    }
  }

  return { ok: delivered.length > 0, record: full };
}
