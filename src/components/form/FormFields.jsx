'use client';

import React, { useCallback, useRef, useState } from 'react';
import { AlertCircle, ChevronDown } from 'lucide-react';
import { COUNTRIES, findCountry } from '../../lib/validation';
import '../../styles/booking.css';

/**
 * Form state with inline validation.
 * - A field is validated when it loses focus, then live as the user types.
 * - validateAll() checks everything, marks all fields touched and returns the first invalid key.
 * `rules` maps field → (value, allValues) => error string ('' when valid).
 */
export function useFormState(initial, rules) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const touched = useRef({});
  const valuesRef = useRef(values);
  const rulesRef = useRef(rules);
  rulesRef.current = rules;

  const check = useCallback((key, all) => (rulesRef.current[key] ? rulesRef.current[key](all[key], all) : ''), []);

  const setValue = useCallback((key, value) => {
    const next = { ...valuesRef.current, [key]: value };
    valuesRef.current = next;
    setValues(next);
    // Re-check this field, plus any touched field whose rule depends on it (e.g. phone ↔ country).
    const updates = {};
    for (const k of Object.keys(rulesRef.current)) {
      if (touched.current[k] && (k === key || rulesRef.current[k].length > 1)) updates[k] = check(k, next);
    }
    if (Object.keys(updates).length) setErrors((e) => ({ ...e, ...updates }));
  }, [check]);

  const blur = useCallback((key) => {
    touched.current[key] = true;
    setErrors((e) => ({ ...e, [key]: check(key, valuesRef.current) }));
  }, [check]);

  const setError = useCallback((key, msg) => {
    touched.current[key] = true;
    setErrors((e) => ({ ...e, [key]: msg }));
  }, []);

  const validateAll = useCallback(() => {
    const next = {};
    for (const key of Object.keys(rulesRef.current)) {
      touched.current[key] = true;
      next[key] = check(key, valuesRef.current);
    }
    setErrors(next);
    return Object.keys(rulesRef.current).find((k) => next[k]) || null;
  }, [check]);

  const reset = useCallback(() => {
    touched.current = {};
    valuesRef.current = initial;
    setErrors({});
    setValues(initial);
  }, [initial]);

  return { values, errors, setValue, blur, setError, validateAll, reset };
}

/** Props that wire an input to its label, hint and error for screen readers. */
export function fieldAria(id, { error, hint, required } = {}) {
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(' ') || undefined;
  return {
    id,
    'aria-invalid': error ? true : undefined,
    'aria-required': required ? true : undefined,
    'aria-describedby': describedBy,
  };
}

export function FieldError({ id, error }) {
  // Always rendered so the live region exists before the message appears.
  return (
    <p id={`${id}-error`} className="bk-error" aria-live="polite">
      {error ? <><AlertCircle size={14} aria-hidden="true" /> {error}</> : null}
    </p>
  );
}

export function Field({ id, label, required, hint, error, className = '', children, as = 'label' }) {
  const Label = as;
  return (
    <div className={`bk-field ${className}`}>
      <Label {...(as === 'label' ? { htmlFor: id } : { id: `${id}-label` })} className="bk-label">
        {label} {required ? <span aria-hidden="true">*</span> : <span className="bk-optional">(optional)</span>}
      </Label>
      {children}
      {hint && <p id={`${id}-hint`} className="bk-hint">{hint}</p>}
      <FieldError id={id} error={error} />
    </div>
  );
}

export function PhoneField({ id, label = 'Mobile Number', country, onCountry, value, onChange, onBlur, error, required = true }) {
  const c = findCountry(country);
  const [min, max] = c.digits;
  return (
    <Field id={id} label={label} required={required} error={error} hint={`${c.name}: ${min === max ? min : `${min}–${max}`} digits, without the country code.`}>
      <div className="bk-phone">
        <div className="bk-select-wrap">
          <select
            aria-label="Country code"
            className="bk-input bk-cc"
            value={country}
            onChange={(e) => onCountry(e.target.value)}
          >
            {COUNTRIES.map((x) => <option key={x.code} value={x.code}>{x.code} {x.dial}</option>)}
          </select>
          <ChevronDown size={14} aria-hidden="true" />
        </div>
        <input
          type="tel"
          inputMode="numeric"
          className="bk-input"
          autoComplete="tel-national"
          placeholder={c.code === 'IN' ? '98765 43210' : `${max}-digit number`}
          maxLength={max + 4}
          value={value}
          onChange={(e) => onChange(e.target.value.replace(/[^\d\s-]/g, ''))}
          onBlur={onBlur}
          {...fieldAria(id, { error, hint: true, required })}
        />
      </div>
    </Field>
  );
}

/** Hidden spam trap. People never see or reach it; bots tend to fill it. */
export function Honeypot({ value, onChange }) {
  return (
    <div className="bk-hp" aria-hidden="true">
      <label>Website<input tabIndex={-1} autoComplete="off" value={value} onChange={(e) => onChange(e.target.value)} /></label>
    </div>
  );
}

/** POST JSON, normalising network failures and API errors into one shape. */
export async function postJSON(url, body) {
  try {
    const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    const json = await res.json().catch(() => ({}));
    return { ok: res.ok, status: res.status, json };
  } catch {
    return { ok: false, status: 0, json: { error: 'You appear to be offline.' } };
  }
}
