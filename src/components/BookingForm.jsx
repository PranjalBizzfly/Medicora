'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Loader2, Video, Building2, AlertTriangle } from 'lucide-react';
import { siteConfig } from '../data/websiteContent';
import { SLOTS, CLOSED_WEEKDAYS, BOOKING_WINDOW_DAYS } from '../data/booking';
import { formatPhone, validateEmail, validateName, validatePhone, validateText } from '../lib/validation';
import { Field, FieldError, Honeypot, PhoneField, fieldAria, postJSON, useFormState } from './form/FormFields';

const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const pad = (n) => String(n).padStart(2, '0');
const toISO = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const fromISO = (iso) => { const [y, m, d] = iso.split('-').map(Number); return new Date(y, m - 1, d); };
const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const formatSlot = (t) => {
  const [h, m] = t.split(':').map(Number);
  return `${((h + 11) % 12) + 1}:${pad(m)} ${h < 12 ? 'AM' : 'PM'}`;
};
const formatLongDate = (iso) => fromISO(iso).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

const INITIAL = { name: '', email: '', city: '', country: 'IN', phone: '', mode: 'online', date: '', time: '', website: '' };

const RULES = {
  name: (v) => validateName(v),
  email: (v) => validateEmail(v),
  city: (v) => validateText(v, { label: 'your city', max: 100 }),
  phone: (v, all) => validatePhone(v, all.country),
  date: (v) => (v ? '' : 'Please select a date for your consultation.'),
  time: (v, all) => (!all.date || v ? '' : 'Please select a time.'),
};
const ORDER = ['name', 'email', 'city', 'phone', 'date', 'time'];

/**
 * Month grid following the ARIA date-picker pattern: one tab stop, arrow keys move
 * by day/week, PageUp/PageDown by month, Home/End to week edges, Enter/Space selects.
 */
function Calendar({ id, value, onChange, error }) {
  const today = useMemo(() => startOfDay(new Date()), []);
  const lastDay = useMemo(() => addDays(today, BOOKING_WINDOW_DAYS), [today]);
  const isDisabled = (d) => d < today || d > lastDay || CLOSED_WEEKDAYS.includes(d.getDay());
  const firstOpen = useMemo(() => { let d = today; while (isDisabled(d)) d = addDays(d, 1); return d; }, [today]); // eslint-disable-line react-hooks/exhaustive-deps

  const [focusDate, setFocusDate] = useState(() => (value ? fromISO(value) : firstOpen));
  const [view, setView] = useState(() => new Date(focusDate.getFullYear(), focusDate.getMonth(), 1));
  const gridRef = useRef(null);
  const moved = useRef(false);

  useEffect(() => {
    if (!moved.current) return;
    moved.current = false;
    gridRef.current?.querySelector(`[data-date="${toISO(focusDate)}"]`)?.focus();
  }, [focusDate, view]);

  const canPrev = view > new Date(today.getFullYear(), today.getMonth(), 1);
  const canNext = new Date(view.getFullYear(), view.getMonth() + 1, 1) <= lastDay;

  const moveTo = (d) => {
    const clamped = d < today ? today : d > lastDay ? lastDay : d;
    moved.current = true;
    setFocusDate(clamped);
    if (clamped.getMonth() !== view.getMonth() || clamped.getFullYear() !== view.getFullYear()) {
      setView(new Date(clamped.getFullYear(), clamped.getMonth(), 1));
    }
  };

  const onKeyDown = (e) => {
    const d = focusDate;
    const map = {
      ArrowLeft: () => addDays(d, -1),
      ArrowRight: () => addDays(d, 1),
      ArrowUp: () => addDays(d, -7),
      ArrowDown: () => addDays(d, 7),
      Home: () => addDays(d, -((d.getDay() + 6) % 7)),
      End: () => addDays(d, 6 - ((d.getDay() + 6) % 7)),
      PageUp: () => new Date(d.getFullYear(), d.getMonth() - 1, d.getDate()),
      PageDown: () => new Date(d.getFullYear(), d.getMonth() + 1, d.getDate()),
    };
    if (map[e.key]) {
      e.preventDefault();
      moveTo(map[e.key]());
    }
  };

  const changeMonth = (delta) => {
    const next = new Date(view.getFullYear(), view.getMonth() + delta, 1);
    setView(next);
    let f = next < today ? today : next;
    while (isDisabled(f) && f <= lastDay) f = addDays(f, 1);
    setFocusDate(f);
  };

  const cells = [];
  const lead = (view.getDay() + 6) % 7;
  const daysInMonth = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  for (let i = 0; i < lead; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(view.getFullYear(), view.getMonth(), d));
  const rows = [];
  for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7));
  const focusISO = toISO(focusDate);
  const monthLabel = view.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });

  return (
    <div className={`bk-cal${error ? ' is-invalid' : ''}`}>
      <div className="bk-cal-head">
        <button type="button" className="bk-cal-nav" disabled={!canPrev} aria-label="Previous month" onClick={() => changeMonth(-1)}>
          <ChevronLeft size={16} aria-hidden="true" />
        </button>
        <strong id={`${id}-month`} aria-live="polite">{monthLabel}</strong>
        <button type="button" className="bk-cal-nav" disabled={!canNext} aria-label="Next month" onClick={() => changeMonth(1)}>
          <ChevronRight size={16} aria-hidden="true" />
        </button>
      </div>
      <table
        ref={gridRef}
        id={id}
        className="bk-cal-grid"
        role="grid"
        aria-labelledby={`${id}-label ${id}-month`}
        aria-describedby={[`${id}-help`, error && `${id}-error`].filter(Boolean).join(' ')}
        aria-invalid={error ? true : undefined}
        onKeyDown={onKeyDown}
      >
        <thead>
          <tr>{WEEKDAYS.map((w) => <th key={w} scope="col" className="bk-cal-wd"><abbr title={w}>{w}</abbr></th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((d, ci) => {
                if (!d) return <td key={`e${ci}`} />;
                const iso = toISO(d);
                const disabled = isDisabled(d);
                const selected = value === iso;
                return (
                  <td key={iso} role="gridcell" aria-selected={selected}>
                    <button
                      type="button"
                      data-date={iso}
                      tabIndex={iso === focusISO ? 0 : -1}
                      className={`bk-cal-day${selected ? ' is-selected' : ''}${iso === toISO(today) ? ' is-today' : ''}`}
                      aria-disabled={disabled || undefined}
                      aria-label={`${d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}${disabled ? ', unavailable' : ''}${selected ? ', selected' : ''}`}
                      onClick={() => { if (!disabled) { setFocusDate(d); onChange(iso); } }}
                    >
                      {d.getDate()}
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <p id={`${id}-help`} className="bk-sr">Use arrow keys to move between days, Page Up and Page Down to change month, and Enter to select.</p>
    </div>
  );
}

/**
 * Booking form: details, then date and time. Posts to /api/book.
 * `variant="modal"` is the popup layout; `onClose` adds a Close button to the success view.
 */
export default function BookingForm({ variant = 'page', onClose }) {
  const form = useFormState(INITIAL, RULES);
  const { values: data, errors, setValue: set, blur } = form;
  const [taken, setTaken] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const [serverMsg, setServerMsg] = useState('');
  const [submitted, setSubmitted] = useState(null);
  const sending = useRef(false);
  const doneRef = useRef(null);
  const alertRef = useRef(null);

  useEffect(() => {
    if (!data.date) return undefined;
    let cancelled = false;
    setLoadingSlots(true);
    fetch(`/api/book?date=${data.date}`)
      .then((r) => (r.ok ? r.json() : { taken: [] }))
      .then((j) => { if (!cancelled) setTaken(j.taken || []); })
      .catch(() => { if (!cancelled) setTaken([]); })
      .finally(() => { if (!cancelled) setLoadingSlots(false); });
    return () => { cancelled = true; };
  }, [data.date]);

  const slotsForDate = useMemo(() => {
    if (!data.date) return [];
    const now = new Date();
    const isToday = data.date === toISO(now);
    return SLOTS.map((t) => {
      const [h, m] = t.split(':').map(Number);
      const past = isToday && h * 60 + m <= now.getHours() * 60 + now.getMinutes() + 60;
      return { t, unavailable: past || taken.includes(t) };
    });
  }, [data.date, taken]);

  useEffect(() => {
    if (status === 'done') doneRef.current?.focus();
    if (status === 'error') alertRef.current?.focus();
  }, [status]);

  const focusField = (key) => {
    const el = key === 'date'
      ? document.querySelector('#bk-date [tabindex="0"]')
      : key === 'time'
        ? document.querySelector('#bk-time button:not([disabled])') || document.getElementById('bk-time')
        : document.getElementById(`bk-${key}`);
    el?.focus();
  };

  const submit = async (ev) => {
    ev.preventDefault();
    if (sending.current) return; // blocks double clicks / repeated Enter
    if (form.validateAll()) {
      focusField(ORDER.find((k) => RULES[k](data[k], data)));
      return;
    }
    sending.current = true;
    setStatus('sending');
    setServerMsg('');
    const payload = {
      ...data,
      name: data.name.trim(),
      email: data.email.trim(),
      city: data.city.trim(),
      phone: formatPhone(data.phone, data.country),
    };
    const { ok, status: code, json } = await postJSON('/api/book', payload);
    sending.current = false;

    if (ok) {
      setSubmitted(payload);
      form.reset();
      setTaken([]);
      setStatus('done');
      return;
    }
    if (code === 409) {
      setTaken((t) => [...t, data.time]);
      set('time', '');
      form.setError('time', 'That slot was just booked by someone else. Please pick another time.');
      setStatus('idle');
      focusField('time');
      return;
    }
    if (code === 422 && Array.isArray(json.fields)) {
      json.fields.forEach((f) => RULES[f] && form.setError(f, RULES[f](data[f], data) || 'Please check this field.'));
      setStatus('idle');
      focusField(ORDER.find((k) => json.fields.includes(k)));
      return;
    }
    setServerMsg(json.error || 'Something went wrong while sending your booking.');
    setStatus('error');
  };

  if (status === 'done' && submitted) {
    return (
      <div className={`bk-form bk-form--${variant}`}>
        <div className="bk-done" role="status" aria-live="polite">
          <span className="bk-done-icon"><CheckCircle2 size={40} aria-hidden="true" /></span>
          <h2 ref={doneRef} tabIndex={-1} id="bk-title">Appointment requested</h2>
          <p>Thank you, <strong>{submitted.name}</strong>. Your request has been received.</p>
          <dl className="bk-done-list">
            <div><dt>Date</dt><dd>{formatLongDate(submitted.date)}</dd></div>
            <div><dt>Time</dt><dd>{formatSlot(submitted.time)} (IST)</dd></div>
            <div><dt>Mode</dt><dd>{submitted.mode === 'online' ? 'Online consultation' : 'In-person, Kopar Khairne'}</dd></div>
            <div><dt>Mobile</dt><dd>{submitted.phone}</dd></div>
            <div><dt>Email</dt><dd>{submitted.email}</dd></div>
          </dl>
          <p className="bk-done-note">We'll confirm your slot on WhatsApp or email shortly.</p>
          <div className="bk-done-actions">
            <button type="button" className="btn btn-primary" onClick={() => { setSubmitted(null); setStatus('idle'); }}>
              Book another appointment
            </button>
            {onClose && <button type="button" className="btn btn-outline" onClick={onClose}>Close</button>}
          </div>
        </div>
      </div>
    );
  }

  const isSending = status === 'sending';

  return (
    <form className={`bk-form bk-form--${variant}`} onSubmit={submit} noValidate aria-labelledby="bk-title" aria-busy={isSending}>
      <div className="bk-head">
        <h2 id="bk-title">Book a Consultation</h2>
        <p>Schedule a consultation with Dr. Mohini Mutha. Fields marked <span aria-hidden="true">*</span><span className="bk-sr">with an asterisk</span> are required.</p>
      </div>

      <fieldset className="bk-section" disabled={isSending}>
        <legend className="bk-kicker">Your details</legend>
        <div className="bk-grid">
          <Field id="bk-name" label="Full Name" required error={errors.name}>
            <input
              className="bk-input" type="text" autoComplete="name" placeholder="e.g. Priya Sharma"
              value={data.name} onChange={(e) => set('name', e.target.value)} onBlur={() => blur('name')}
              {...fieldAria('bk-name', { error: errors.name, required: true })}
            />
          </Field>
          <Field id="bk-email" label="Email Address" required error={errors.email}>
            <input
              className="bk-input" type="email" inputMode="email" autoComplete="email" placeholder="name@example.com"
              value={data.email} onChange={(e) => set('email', e.target.value)} onBlur={() => blur('email')}
              {...fieldAria('bk-email', { error: errors.email, required: true })}
            />
          </Field>
          <Field id="bk-city" label="City" required error={errors.city}>
            <input
              className="bk-input" type="text" autoComplete="address-level2" placeholder="e.g. Navi Mumbai"
              value={data.city} onChange={(e) => set('city', e.target.value)} onBlur={() => blur('city')}
              {...fieldAria('bk-city', { error: errors.city, required: true })}
            />
          </Field>
          <PhoneField
            id="bk-phone"
            country={data.country}
            onCountry={(c) => set('country', c)}
            value={data.phone}
            onChange={(v) => set('phone', v)}
            onBlur={() => blur('phone')}
            error={errors.phone}
          />
        </div>
        <Honeypot value={data.website} onChange={(v) => set('website', v)} />
      </fieldset>

      <fieldset className="bk-section" disabled={isSending}>
        <legend className="bk-kicker">Appointment</legend>

        <div className="bk-field">
          <span className="bk-label" id="bk-mode-label">Consultation Mode <span aria-hidden="true">*</span></span>
          <div className="bk-modes" role="radiogroup" aria-labelledby="bk-mode-label" aria-required="true">
            {[
              { v: 'online', icon: Video, t: 'Online', s: 'Video call' },
              { v: 'in-person', icon: Building2, t: 'In-person', s: 'Kopar Khairne, Navi Mumbai' },
            ].map(({ v, icon: Icon, t, s }, i, arr) => (
              <button
                key={v}
                type="button"
                role="radio"
                aria-checked={data.mode === v}
                tabIndex={data.mode === v ? 0 : -1}
                className={`bk-mode${data.mode === v ? ' is-selected' : ''}`}
                onClick={() => set('mode', v)}
                onKeyDown={(e) => {
                  if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) return;
                  e.preventDefault();
                  const next = arr[(i + (e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 1) + arr.length) % arr.length];
                  set('mode', next.v);
                  e.currentTarget.parentElement.querySelectorAll('[role="radio"]')[arr.indexOf(next)]?.focus();
                }}
              >
                <Icon size={18} aria-hidden="true" />
                <span><strong>{t}</strong><small>{s}</small></span>
              </button>
            ))}
          </div>
        </div>

        <div className="bk-field">
          <span className="bk-label" id="bk-date-label">Select Date <span aria-hidden="true">*</span></span>
          <Calendar
            id="bk-date"
            value={data.date}
            error={errors.date}
            onChange={(iso) => { set('date', iso); set('time', ''); blur('date'); }}
          />
          <FieldError id="bk-date" error={errors.date} />
        </div>

        <div className="bk-field">
          <span className="bk-label" id="bk-time-label">Select Time <span aria-hidden="true">*</span></span>
          {!data.date && <p className="bk-hint">Choose a date to see available times.</p>}
          {data.date && (
            <>
              <p className="bk-hint" id="bk-time-hint">{formatLongDate(data.date)} · India Standard Time</p>
              <div
                id="bk-time"
                tabIndex={-1}
                className={`bk-slots${loadingSlots ? ' is-loading' : ''}`}
                role="group"
                aria-labelledby="bk-time-label"
                aria-describedby={['bk-time-hint', errors.time && 'bk-time-error'].filter(Boolean).join(' ')}
                aria-busy={loadingSlots}
              >
                {slotsForDate.map(({ t, unavailable }) => (
                  <button
                    key={t}
                    type="button"
                    aria-pressed={data.time === t}
                    disabled={unavailable}
                    aria-label={`${formatSlot(t)}${unavailable ? ', unavailable' : ''}`}
                    className={`bk-slot${data.time === t ? ' is-selected' : ''}`}
                    onClick={() => { set('time', t); blur('time'); }}
                  >
                    {formatSlot(t)}
                  </button>
                ))}
              </div>
              {!loadingSlots && slotsForDate.every((s) => s.unavailable) && (
                <p className="bk-hint" role="status">No times left on this day. Please choose another date.</p>
              )}
            </>
          )}
          <FieldError id="bk-time" error={errors.time} />
        </div>
      </fieldset>

      {status === 'error' && (
        <div ref={alertRef} tabIndex={-1} className="bk-alert" role="alert">
          <AlertTriangle size={18} aria-hidden="true" />
          <div>
            <strong>Your booking wasn't sent.</strong>
            <p>
              {serverMsg} Your details are still here. Please try again, or call{' '}
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>{siteConfig.phone}</a>.
            </p>
          </div>
        </div>
      )}

      <button type="submit" className="btn btn-primary btn-lg bk-submit" disabled={isSending} aria-disabled={isSending}>
        {isSending
          ? <><Loader2 size={18} className="bk-spin" aria-hidden="true" /> <span>Booking…</span></>
          : <><span>{status === 'error' ? 'Try again' : 'Confirm Appointment'}</span> <ArrowRight size={18} aria-hidden="true" /></>}
      </button>
      <p className="bk-sr" aria-live="polite">{isSending ? 'Sending your booking, please wait.' : ''}</p>
      <p className="bk-fine">We never share your details. Not for emergencies: please call your local emergency service.</p>
    </form>
  );
}
