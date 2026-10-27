'use client';

import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, ChevronDown, Mic } from 'lucide-react';
import { siteConfig } from '../data/websiteContent';
import { formatPhone, validateEmail, validateName, validatePhone, validateText } from '../lib/validation';
import { Field, Honeypot, PhoneField, fieldAria, useFormState } from './form/FormFields';
import { submitForm } from '../lib/handoff';

const MESSAGE_MAX = 2000;

const pad = (n) => String(n).padStart(2, '0');
const todayISO = () => { const d = new Date(); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; };

const ORDER = ['name', 'organization', 'email', 'phone', 'eventType', 'eventDate', 'message'];

/** "Invite Dr. Mohini to Speak" enquiry. Sends through WhatsApp/email (front end only). */
export default function SpeakingForm({ eventTypes }) {
  const initial = useRef({
    name: '', organization: '', email: '', country: 'IN', phone: '',
    eventType: '', eventDate: '', message: '', website: '',
  }).current;

  const rules = {
    name: (v) => validateName(v),
    organization: (v) => validateText(v, { label: 'your organisation', max: 150 }),
    email: (v) => validateEmail(v),
    phone: (v, all) => validatePhone(v, all.country),
    eventType: (v) => (v ? '' : 'Please choose the type of event.'),
    eventDate: (v) => (v && v < todayISO() ? 'Please choose a date in the future.' : ''),
    message: (v) => validateText(v, { label: 'a few details about your event', min: 10, max: MESSAGE_MAX }),
  };

  const form = useFormState(initial, rules);
  const { values: f, errors, setValue: set, blur } = form;
  const [status, setStatus] = useState('idle'); // idle | handoff
  const [handoff, setHandoff] = useState(null);
  const doneRef = useRef(null);
  const [minDate, setMinDate] = useState('');
  useEffect(() => setMinDate(todayISO()), []);

  useEffect(() => {
    if (status === 'handoff') doneRef.current?.focus();
  }, [status]);

  // Front-end delivery (src/lib/handoff.js): no redirect; shows "Submitted".
  const submit = async (e) => {
    e.preventDefault();
    if (handoff === 'sending') return;
    if (form.validateAll()) {
      document.getElementById(`sp-${ORDER.find((k) => rules[k](f[k], f))}`)?.focus();
      return;
    }
    if (f.website) { setHandoff(true); setStatus('handoff'); return; } // honeypot
    setHandoff('sending');
    const ok = await submitForm(`Speaking invitation: ${f.organization.trim()}`, [
      ['Name', f.name.trim()], ['Organisation', f.organization.trim()], ['Email', f.email.trim()],
      ['Phone', formatPhone(f.phone, f.country)], ['Event type', f.eventType], ['Tentative date', f.eventDate],
      ['Details', f.message.trim()],
    ], f.email.trim());
    if (!ok) { setHandoff('failed'); return; }
    setHandoff(true);
    form.reset();
    setStatus('handoff');
  };

  if (status === 'handoff' && handoff === true) {
    return (
      <div className="card rs-form-card">
        <div className="bk-done" role="status" aria-live="polite">
          <span className="bk-done-icon"><CheckCircle2 size={40} aria-hidden="true" /></span>
          <h3 ref={doneRef} tabIndex={-1}>Submitted</h3>
        </div>
      </div>
    );
  }

  const isSending = handoff === 'sending';

  return (
    <div className="card rs-form-card">
      <form className="bk-form" onSubmit={submit} noValidate aria-label="Invite Dr. Mohini to speak" aria-busy={isSending}>
        <p className="bk-hint">Fields marked <span aria-hidden="true">*</span><span className="bk-sr">with an asterisk</span> are required.</p>

        <fieldset className="bk-section" disabled={isSending}>
          <legend className="bk-kicker">About you</legend>
          <div className="bk-grid">
            <Field id="sp-name" label="Your name" required error={errors.name}>
              <input className="bk-input" type="text" autoComplete="name" placeholder="e.g. Priya Sharma"
                value={f.name} onChange={(e) => set('name', e.target.value)} onBlur={() => blur('name')}
                {...fieldAria('sp-name', { error: errors.name, required: true })} />
            </Field>
            <Field id="sp-organization" label="Organisation" required error={errors.organization}>
              <input className="bk-input" type="text" autoComplete="organization" placeholder="Company, school or community group"
                value={f.organization} onChange={(e) => set('organization', e.target.value)} onBlur={() => blur('organization')}
                {...fieldAria('sp-organization', { error: errors.organization, required: true })} />
            </Field>
            <Field id="sp-email" label="Email" required error={errors.email}>
              <input className="bk-input" type="email" inputMode="email" autoComplete="email" placeholder="name@example.com"
                value={f.email} onChange={(e) => set('email', e.target.value)} onBlur={() => blur('email')}
                {...fieldAria('sp-email', { error: errors.email, required: true })} />
            </Field>
            <PhoneField id="sp-phone" label="Phone / WhatsApp" country={f.country} onCountry={(c) => set('country', c)}
              value={f.phone} onChange={(v) => set('phone', v)} onBlur={() => blur('phone')} error={errors.phone} />
          </div>
          <Honeypot value={f.website} onChange={(v) => set('website', v)} />
        </fieldset>

        <fieldset className="bk-section" disabled={isSending}>
          <legend className="bk-kicker">Your event</legend>
          <div className="bk-grid">
            <Field id="sp-eventType" label="Event type" required error={errors.eventType}>
              <div className="bk-select-wrap">
                <select className="bk-input" value={f.eventType}
                  onChange={(e) => { set('eventType', e.target.value); blur('eventType'); }} onBlur={() => blur('eventType')}
                  {...fieldAria('sp-eventType', { error: errors.eventType, required: true })}>
                  <option value="" disabled>Choose an event type</option>
                  {eventTypes.map((a) => <option key={a} value={a}>{a}</option>)}
                  <option value="Other">Other</option>
                </select>
                <ChevronDown size={14} aria-hidden="true" />
              </div>
            </Field>
            <Field id="sp-eventDate" label="Tentative date" error={errors.eventDate} hint="Leave blank if you're still deciding.">
              <input className="bk-input" type="date" min={minDate || undefined}
                value={f.eventDate} onChange={(e) => set('eventDate', e.target.value)} onBlur={() => blur('eventDate')}
                {...fieldAria('sp-eventDate', { error: errors.eventDate, hint: true })} />
            </Field>
            <Field id="sp-message" label="Share your event details" required error={errors.message} className="bk-field--full"
              hint="Audience, expected size, format (in-person or online) and the topic you have in mind.">
              <textarea className="bk-input" rows={5} maxLength={MESSAGE_MAX}
                placeholder="e.g. A 45-minute talk on managing workplace stress for about 80 employees, in person in Pune."
                value={f.message} onChange={(e) => set('message', e.target.value)} onBlur={() => blur('message')}
                {...fieldAria('sp-message', { error: errors.message, hint: true, required: true })} />
              <p className="bk-counter" aria-hidden="true">{f.message.length} / {MESSAGE_MAX}</p>
            </Field>
          </div>
        </fieldset>

        {handoff === 'failed' && (
          <p className="bk-alert" role="alert">
            Your invitation wasn&apos;t sent. Please try again, or email{' '}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        )}
        <button type="submit" className="btn btn-primary btn-lg bk-submit" disabled={isSending} aria-disabled={isSending}>
          <Mic size={16} aria-hidden="true" /> <span>{isSending ? 'Submitting…' : 'Invite Dr. Mohini to Speak'}</span>
        </button>
      </form>
    </div>
  );
}
