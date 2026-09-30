import { SLOTS, CLOSED_WEEKDAYS, BOOKING_WINDOW_DAYS } from '../../../data/booking';
import { deliver, readStore } from '../../../lib/deliver';
import { validateEmail, validateFormattedPhone, validateName, validateText } from '../../../lib/validation';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const STORE = 'bookings';
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

const takenFor = (list, date) => list.filter((b) => b.date === date && b.status !== 'cancelled').map((b) => b.time);

// Today in IST, since the clinic's calendar is Indian time regardless of the server's zone.
const todayIST = () => {
  const d = new Date(Date.now() + 5.5 * 3600 * 1000);
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
};

function validate(b) {
  const fields = [];
  if (validateName(b.name)) fields.push('name');
  if (validateEmail(b.email)) fields.push('email');
  if (validateText(b.city, { label: 'your city', max: 100 })) fields.push('city');
  if (validateFormattedPhone(b.phone)) fields.push('phone');
  if (!['online', 'in-person'].includes(b.mode)) fields.push('mode');
  if (!SLOTS.includes(b.time)) fields.push('time');
  if (!DATE_RE.test(b.date || '')) {
    fields.push('date');
  } else {
    const [y, m, d] = b.date.split('-').map(Number);
    const day = new Date(Date.UTC(y, m - 1, d));
    const today = todayIST();
    const last = new Date(today.getTime() + BOOKING_WINDOW_DAYS * 86400000);
    if (day < today || day > last || CLOSED_WEEKDAYS.includes(day.getUTCDay())) fields.push('date');
  }
  const clean = {
    name: String(b.name || '').trim(),
    email: String(b.email || '').trim(),
    city: String(b.city || '').trim(),
    phone: b.phone,
    mode: b.mode,
    date: b.date,
    time: b.time,
  };
  return { fields, clean };
}

export async function GET(request) {
  const date = new URL(request.url).searchParams.get('date') || '';
  if (!DATE_RE.test(date)) return Response.json({ taken: [] });
  return Response.json({ taken: takenFor(await readStore(STORE), date) });
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot filled: pretend success so bots learn nothing.
  if (body.website) return Response.json({ ok: true });

  const { fields, clean } = validate(body);
  if (fields.length) return Response.json({ error: 'Please check the highlighted fields.', fields }, { status: 422 });

  if (takenFor(await readStore(STORE), clean.date).includes(clean.time)) {
    return Response.json({ error: 'That slot has just been booked.' }, { status: 409 });
  }

  const { ok, record } = await deliver(STORE, { ...clean, status: 'requested' }, {
    subject: `New consultation request: ${clean.name}, ${clean.date} ${clean.time}`,
    replyTo: clean.email,
    rows: [
      ['Name', clean.name], ['Email', clean.email], ['Mobile', clean.phone], ['City', clean.city],
      ['Mode', clean.mode === 'online' ? 'Online' : 'In-person'], ['Date', clean.date], ['Time (IST)', clean.time],
    ],
  });

  if (!ok) return Response.json({ error: "We couldn't save your booking right now." }, { status: 503 });
  return Response.json({ ok: true, id: record.id });
}
