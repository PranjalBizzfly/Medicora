// Shared form rules: used by the forms in the browser and re-checked by the API routes.

export const COUNTRIES = [
  { code: 'IN', dial: '+91', name: 'India', digits: [10, 10] },
  { code: 'AE', dial: '+971', name: 'United Arab Emirates', digits: [8, 9] },
  { code: 'US', dial: '+1', name: 'United States', digits: [10, 10] },
  { code: 'CA', dial: '+1', name: 'Canada', digits: [10, 10] },
  { code: 'GB', dial: '+44', name: 'United Kingdom', digits: [10, 10] },
  { code: 'AU', dial: '+61', name: 'Australia', digits: [9, 9] },
  { code: 'SG', dial: '+65', name: 'Singapore', digits: [8, 8] },
  { code: 'SA', dial: '+966', name: 'Saudi Arabia', digits: [9, 9] },
  { code: 'QA', dial: '+974', name: 'Qatar', digits: [8, 8] },
  { code: 'OM', dial: '+968', name: 'Oman', digits: [8, 8] },
  { code: 'KW', dial: '+965', name: 'Kuwait', digits: [8, 8] },
  { code: 'BH', dial: '+973', name: 'Bahrain', digits: [8, 8] },
  { code: 'NZ', dial: '+64', name: 'New Zealand', digits: [8, 10] },
  { code: 'DE', dial: '+49', name: 'Germany', digits: [10, 11] },
];

export const findCountry = (code) => COUNTRIES.find((c) => c.code === code) || COUNTRIES[0];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const onlyDigits = (s) => String(s || '').replace(/\D/g, '');

export function validateName(v, label = 'your full name') {
  const s = String(v || '').trim();
  if (!s) return `Please enter ${label}.`;
  if (s.length < 2) return 'This looks too short.';
  if (s.length > 100) return 'Please keep this under 100 characters.';
  return '';
}

export function validateEmail(v) {
  const s = String(v || '').trim();
  if (!s) return 'Please enter your email address.';
  if (!EMAIL_RE.test(s) || s.length > 200) return 'Please enter a valid email address, like name@example.com.';
  return '';
}

export function validatePhone(v, countryCode = 'IN') {
  const digits = onlyDigits(v);
  const c = findCountry(countryCode);
  if (!digits) return 'Please enter your mobile number.';
  const [min, max] = c.digits;
  if (digits.length < min || digits.length > max) {
    return min === max ? `Enter a ${min}-digit mobile number for ${c.name}.` : `Enter a ${min} to ${max} digit mobile number for ${c.name}.`;
  }
  if (c.code === 'IN' && !/^[6-9]/.test(digits)) return 'Indian mobile numbers start with 6, 7, 8 or 9.';
  return '';
}

export function validateText(v, { label, min = 2, max = 200, required = true } = {}) {
  const s = String(v || '').trim();
  if (!s) return required ? `Please enter ${label}.` : '';
  if (s.length < min) return 'This looks too short.';
  if (s.length > max) return `Please keep this under ${max} characters.`;
  return '';
}

/** "+91 9876543210" — the format the API routes expect. */
export const formatPhone = (v, countryCode) => `${findCountry(countryCode).dial} ${onlyDigits(v)}`;

/** Server-side check of a phone already formatted with formatPhone. */
export function validateFormattedPhone(v) {
  const m = /^(\+\d{1,4}) (\d{6,14})$/.exec(String(v || ''));
  if (!m) return 'phone';
  const matches = COUNTRIES.filter((c) => c.dial === m[1]);
  if (!matches.length) return 'phone';
  return matches.some((c) => !validatePhone(m[2], c.code)) ? '' : 'phone';
}
