'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, Send } from 'lucide-react';
import { siteConfig } from '../data/websiteContent';
import { formatPhone, validateEmail, validateName, validatePhone, validateText } from '../lib/validation';
import { Field, FieldError, Honeypot, PhoneField, fieldAria, useFormState } from './form/FormFields';
import { submitForm } from '../lib/handoff';

const MESSAGE_MAX = 2000;
const ORDER = ['name', 'email', 'city', 'phone', 'message', 'consent'];

/** "Message me" form (AUD-09). Sends through WhatsApp/email (front end only). */
export default function ContactForm() {
  const initial = useRef({ name: '', email: '', city: '', country: 'IN', phone: '', message: '', consent: false, website: '' }).current;

  const rules = {
    name: (v) => validateName(v),
    email: (v) => validateEmail(v),
    city: (v) => validateText(v, { label: 'your city', max: 100 }),
    phone: (v, all) => (v ? validatePhone(v, all.country) : ''),
    message: (v) => validateText(v, { label: 'your message', min: 10, max: MESSAGE_MAX }),
    consent: (v) => (v ? '' : 'Please confirm you have read the Privacy Policy.'),
  };

  const form = useFormState(initial, rules);
  const { values: f, errors, setValue: set, blur } = form;
  const [status, setStatus] = useState('idle'); // idle | handoff
  const [handoff, setHandoff] = useState(null);
  const doneRef = useRef(null);

  useEffect(() => {
    if (status === 'handoff') doneRef.current?.focus();
  }, [status]);

  // Front-end delivery (src/lib/handoff.js): no redirect; shows "Submitted".
  const submit = async (e) => {
    e.preventDefault();
    if (handoff === 'sending') return;
    if (form.validateAll()) {
      document.getElementById(`ct-${ORDER.find((k) => rules[k](f[k], f))}`)?.focus();
      return;
    }
    if (f.website) { setHandoff(true); setStatus('handoff'); return; } // honeypot
    setHandoff('sending');
    const ok = await submitForm(`Message from ${f.name.trim()}`, [
      ['Name', f.name.trim()], ['Email', f.email.trim()], ['City', f.city.trim()],
      ['Phone', f.phone ? formatPhone(f.phone, f.country) : ''], ['Message', f.message.trim()],
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
      <form className="bk-form" onSubmit={submit} noValidate aria-label="Message Dr. Mohini" aria-busy={isSending}>
        <p className="bk-hint">Fields marked <span aria-hidden="true">*</span><span className="bk-sr">with an asterisk</span> are required.</p>

        <fieldset className="bk-section" disabled={isSending}>
          <legend className="bk-kicker">Your details</legend>
          <div className="bk-grid">
            <Field id="ct-name" label="Your name" required error={errors.name}>
              <input className="bk-input" type="text" autoComplete="name" placeholder="e.g. Priya Sharma"
                value={f.name} onChange={(e) => set('name', e.target.value)} onBlur={() => blur('name')}
                {...fieldAria('ct-name', { error: errors.name, required: true })} />
            </Field>
            <Field id="ct-email" label="Email" required error={errors.email}>
              <input className="bk-input" type="email" inputMode="email" autoComplete="email" placeholder="name@example.com"
                value={f.email} onChange={(e) => set('email', e.target.value)} onBlur={() => blur('email')}
                {...fieldAria('ct-email', { error: errors.email, required: true })} />
            </Field>
            <Field id="ct-city" label="City" required error={errors.city}>
              <input className="bk-input" type="text" autoComplete="address-level2" placeholder="e.g. Navi Mumbai"
                value={f.city} onChange={(e) => set('city', e.target.value)} onBlur={() => blur('city')}
                {...fieldAria('ct-city', { error: errors.city, required: true })} />
            </Field>
            <PhoneField id="ct-phone" label="Phone / WhatsApp" required={false} country={f.country} onCountry={(c) => set('country', c)}
              value={f.phone} onChange={(v) => set('phone', v)} onBlur={() => blur('phone')} error={errors.phone} />
            <Field id="ct-message" label="Your message" required error={errors.message} className="bk-field--full"
              hint="Please do not include detailed medical history here. This form is not for emergencies.">
              <textarea className="bk-input" rows={5} maxLength={MESSAGE_MAX}
                placeholder="Share what you'd like to ask or discuss."
                value={f.message} onChange={(e) => set('message', e.target.value)} onBlur={() => blur('message')}
                {...fieldAria('ct-message', { error: errors.message, hint: true, required: true })} />
              <p className="bk-counter" aria-hidden="true">{f.message.length} / {MESSAGE_MAX}</p>
            </Field>
          </div>
          <Honeypot value={f.website} onChange={(v) => set('website', v)} />
        </fieldset>

        <div className="bk-field">
          <label className="ct-consent" htmlFor="ct-consent">
            <input id="ct-consent" type="checkbox" checked={f.consent}
              onChange={(e) => { set('consent', e.target.checked); blur('consent'); }}
              {...fieldAria('ct-consent', { error: errors.consent, required: true })} />
            <span>I have read the <Link href="/privacy-policy">Privacy Policy</Link> and agree to be contacted about my message. <span aria-hidden="true">*</span></span>
          </label>
          <FieldError id="ct-consent" error={errors.consent} />
        </div>

        {handoff === 'failed' && (
          <p className="bk-alert" role="alert">
            Your message wasn&apos;t sent. Please try again, or email{' '}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        )}
        <button type="submit" className="btn btn-primary btn-lg bk-submit" disabled={isSending} aria-disabled={isSending}>
          <Send size={16} aria-hidden="true" /> <span>{isSending ? 'Submitting…' : 'Send Message'}</span>
        </button>
      </form>
    </div>
  );
}
