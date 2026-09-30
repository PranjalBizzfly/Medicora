import { deliver } from '../../../lib/deliver';
import { validateEmail, validateFormattedPhone, validateName, validateText } from '../../../lib/validation';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export async function POST(request) {
  let b;
  try {
    b = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  if (b.website) return Response.json({ ok: true });

  const fields = [];
  if (validateName(b.name)) fields.push('name');
  if (validateText(b.organization, { label: 'your organisation', max: 150 })) fields.push('organization');
  if (validateEmail(b.email)) fields.push('email');
  if (validateFormattedPhone(b.phone)) fields.push('phone');
  if (validateText(b.eventType, { label: 'an event type', max: 100 })) fields.push('eventType');
  if (b.eventDate && (!DATE_RE.test(b.eventDate) || new Date(b.eventDate) < new Date(new Date().toDateString()))) fields.push('eventDate');
  if (validateText(b.message, { label: 'event details', min: 10, max: 2000 })) fields.push('message');
  if (fields.length) return Response.json({ error: 'Please check the highlighted fields.', fields }, { status: 422 });

  const clean = {
    name: b.name.trim(),
    organization: b.organization.trim(),
    email: b.email.trim(),
    phone: b.phone,
    eventType: b.eventType,
    eventDate: b.eventDate || '',
    message: b.message.trim(),
  };

  const { ok, record } = await deliver('speaking-invitations', clean, {
    subject: `Speaking invitation: ${clean.organization}`,
    replyTo: clean.email,
    rows: [
      ['Name', clean.name], ['Organisation', clean.organization], ['Email', clean.email], ['Phone', clean.phone],
      ['Event type', clean.eventType], ['Tentative date', clean.eventDate], ['Details', clean.message],
    ],
  });

  if (!ok) return Response.json({ error: "We couldn't send your invitation right now." }, { status: 503 });
  return Response.json({ ok: true, id: record.id });
}
