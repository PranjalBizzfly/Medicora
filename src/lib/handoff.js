/*
 * Front-end-only form delivery (no server of our own, no WhatsApp redirect).
 *
 * When NEXT_PUBLIC_WEB3FORMS_KEY is set (free key from web3forms.com, created
 * with the clinic inbox), the browser emails each submission to that inbox via
 * Web3Forms. Until the key is set, submissions are NOT delivered anywhere —
 * the forms still show "Submitted" (client decision, 27 Oct 2026).
 */
const KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export const deliveryConfigured = Boolean(KEY);

/** "Label: value" lines, skipping empty values. */
export const toLines = (title, rows) =>
  [title, '', ...rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`)].join('\n');

/**
 * @param {string} subject email subject
 * @param {[string, string][]} rows label/value pairs
 * @param {string} [replyTo] visitor's email
 * @returns {Promise<boolean>} false only when a configured delivery failed
 */
export async function submitForm(subject, rows, replyTo) {
  if (!KEY) return true;
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: KEY,
        subject,
        from_name: 'drmohinimutha.com',
        ...(replyTo ? { replyto: replyTo } : {}),
        message: toLines(subject, rows),
      }),
    });
    const json = await res.json().catch(() => ({}));
    return res.ok && json.success !== false;
  } catch {
    return false;
  }
}
