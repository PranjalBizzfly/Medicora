'use client';

import React, { useState } from 'react';
import '../styles/credentials.css';
import { CheckCircle2, Video, Building2, ArrowLeft, ArrowRight } from 'lucide-react';

const STEPS = [
  { num: 1, label: 'Choose Consultation' },
  { num: 2, label: 'Select Date/Time' },
  { num: 3, label: 'Share Details' },
  { num: 4, label: 'Confirm' },
];

const TIME_SLOTS = [
  'Morning (10:00 AM - 1:00 PM)',
  'Afternoon (2:00 PM - 5:00 PM)',
  'Evening (5:30 PM - 8:30 PM)',
  'Flexible / Any Convenient Slot',
];

const HEALTH_AREAS = [
  'Mental, Emotional & Anxiety Wellness',
  'Sleep & Lifestyle Concerns',
  'Headache & Migraine Care',
  'Digestive & Gut Health',
  "Women's Wellness / Hormonal Care",
  'Skin, Hair & Allergies',
  'Child & Adolescent Wellness',
  'Joint, Muscle & Pain Management',
  'General Health & Preventive Wellness',
  'Other / Multiple Concerns',
];

const FORMATS = [
  {
    value: 'online',
    icon: Video,
    title: 'Online Consultation',
    text: 'Private video/audio consultation from the comfort of home. Open to patients across India, UAE, and USA.',
  },
  {
    value: 'in-person',
    icon: Building2,
    title: 'In-Person Consultation',
    text: "In-clinic consultation at Dr. Mutha's Homeopathic Clinic located in Kopar Khairne, Navi Mumbai.",
  },
];

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [consultationType, setConsultationType] = useState('online');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'India',
    concernCategory: HEALTH_AREAS[0],
    preferredDate: '',
    preferredTime: TIME_SLOTS[0],
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="cr-form-card cr-success" role="status">
        <div className="cr-success-icon">
          <CheckCircle2 size={36} />
        </div>
        <h3>Appointment Request Received</h3>
        <p className="cr-success-lead">
          Thank you, <strong>{formData.name}</strong>. We have noted your request for a <strong>{consultationType === 'online' ? 'Personalised Online Consultation' : 'Clinic Consultation in Navi Mumbai'}</strong>.
        </p>

        <div className="cr-success-details">
          <p><strong>Preferred Window:</strong> {formData.preferredDate || 'Earliest Available'} ({formData.preferredTime})</p>
          <p><strong>Health Area:</strong> {formData.concernCategory}</p>
          <p><strong>Contact:</strong> {formData.phone} · {formData.email}</p>
        </div>

        <p className="cr-success-note">
          Our clinic coordinator will contact you shortly via WhatsApp/call to confirm the final slot and share preparation guidelines.
        </p>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => { setIsSubmitted(false); setStep(1); }}
        >
          Book Another Consultation
        </button>
      </div>
    );
  }

  return (
    <div className="cr-form-card">
      <ol className="cr-stepper" aria-label="Booking steps">
        {STEPS.map((s) => {
          const state = step === s.num ? 'is-active' : step > s.num ? 'is-done' : '';
          return (
            <li
              key={s.num}
              className={`cr-step ${state}`}
              aria-current={step === s.num ? 'step' : undefined}
            >
              <span className="cr-step-dot">{step > s.num ? <CheckCircle2 size={16} /> : s.num}</span>
              <span className="cr-step-label">{s.label}</span>
            </li>
          );
        })}
      </ol>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Format */}
        {step === 1 && (
          <div>
            <div className="cr-step-head">
              <span className="cr-step-kicker">Step 01</span>
              <h3>Select Consultation Format</h3>
              <p>Choose whether you would like to connect virtually or visit the clinic in person.</p>
            </div>

            <div className="cr-options" role="radiogroup" aria-label="Consultation format">
              {FORMATS.map(({ value, icon: Icon, title, text }) => (
                <button
                  key={value}
                  type="button"
                  role="radio"
                  aria-checked={consultationType === value}
                  className={`cr-option ${consultationType === value ? 'is-selected' : ''}`}
                  onClick={() => setConsultationType(value)}
                >
                  <span className="cr-option-head">
                    <Icon size={24} />
                    <span className="cr-option-title">{title}</span>
                  </span>
                  <span className="cr-option-text">{text}</span>
                </button>
              ))}
            </div>

            <div className="cr-nav cr-nav-end">
              <button type="button" className="btn btn-primary" onClick={() => setStep(2)}>
                Next: Select Date &amp; Time <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Date & Time */}
        {step === 2 && (
          <div>
            <div className="cr-step-head">
              <span className="cr-step-kicker">Step 02</span>
              <h3>Select Preferred Window</h3>
              <p>Pick a date and convenient timeframe that fits your daily routine.</p>
            </div>

            <div className="cr-fields">
              <div className="cr-field">
                <label htmlFor="bf-date">Preferred Date</label>
                <input
                  id="bf-date"
                  type="date"
                  name="preferredDate"
                  className="cr-input"
                  value={formData.preferredDate}
                  onChange={handleChange}
                />
              </div>

              <div className="cr-field">
                <label htmlFor="bf-time">Preferred Time Slot</label>
                <select
                  id="bf-time"
                  name="preferredTime"
                  className="cr-input"
                  value={formData.preferredTime}
                  onChange={handleChange}
                >
                  {TIME_SLOTS.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
            </div>

            <div className="cr-nav">
              <button type="button" className="btn btn-secondary" onClick={() => setStep(1)}>
                <ArrowLeft size={16} /> Back
              </button>
              <button type="button" className="btn btn-primary" onClick={() => setStep(3)}>
                Next: Share Details <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Patient Information */}
        {step === 3 && (
          <div>
            <div className="cr-step-head">
              <span className="cr-step-kicker">Step 03</span>
              <h3>Patient Information</h3>
              <p>Please provide basic contact info so our clinic coordinator can coordinate your session.</p>
            </div>

            <div className="cr-fields">
              <div className="cr-field">
                <label htmlFor="bf-name">Full Name *</label>
                <input
                  id="bf-name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  className="cr-input"
                  placeholder="e.g. Ananya Sharma"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="cr-field">
                <label htmlFor="bf-phone">Contact Phone / WhatsApp *</label>
                <input
                  id="bf-phone"
                  type="tel"
                  name="phone"
                  required
                  autoComplete="tel"
                  className="cr-input"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="cr-field">
                <label htmlFor="bf-email">Email Address *</label>
                <input
                  id="bf-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="cr-input"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="cr-field">
                <label htmlFor="bf-country">Country / City</label>
                <input
                  id="bf-country"
                  type="text"
                  name="country"
                  className="cr-input"
                  placeholder="e.g. Mumbai, India / Dubai, UAE"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>

              <div className="cr-field cr-field-full">
                <label htmlFor="bf-area">Primary Health Area</label>
                <select
                  id="bf-area"
                  name="concernCategory"
                  className="cr-input"
                  value={formData.concernCategory}
                  onChange={handleChange}
                >
                  {HEALTH_AREAS.map((a) => <option key={a}>{a}</option>)}
                </select>
              </div>

              <div className="cr-field cr-field-full">
                <label htmlFor="bf-notes">Brief Notes / Questions (Optional)</label>
                <textarea
                  id="bf-notes"
                  name="notes"
                  rows={3}
                  className="cr-input"
                  placeholder="Share a brief overview of what you would like to discuss..."
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="cr-nav">
              <button type="button" className="btn btn-secondary" onClick={() => setStep(2)}>
                <ArrowLeft size={16} /> Back
              </button>
              <button
                type="button"
                className="btn btn-primary"
                disabled={!formData.name || !formData.phone || !formData.email}
                onClick={() => setStep(4)}
              >
                Review &amp; Confirm <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Summary & Submit */}
        {step === 4 && (
          <div>
            <div className="cr-step-head">
              <span className="cr-step-kicker">Step 04</span>
              <h3>Confirm Consultation Details</h3>
              <p>Please review your consultation request before confirming.</p>
            </div>

            <div className="cr-summary">
              <div>
                <span>Format</span>
                <strong>{consultationType === 'online' ? 'Online Consultation' : 'In-Person (Navi Mumbai)'}</strong>
              </div>
              <div>
                <span>Area of Care</span>
                <strong>{formData.concernCategory}</strong>
              </div>
              <div>
                <span>Patient Name</span>
                <strong>{formData.name}</strong>
              </div>
              <div>
                <span>Location</span>
                <strong>{formData.country}</strong>
              </div>
              <div>
                <span>Contact Phone</span>
                <strong>{formData.phone}</strong>
              </div>
              <div>
                <span>Email</span>
                <strong>{formData.email}</strong>
              </div>
            </div>

            <div className="medical-disclaimer-box cr-notice">
              <p>
                <strong>Important Notice:</strong> Online consultations are provided based on the information shared by you during your session. A consultation does not guarantee a particular health outcome. If you are experiencing a medical emergency, please visit your nearest hospital emergency department immediately.
              </p>
            </div>

            <div className="cr-nav">
              <button type="button" className="btn btn-secondary" onClick={() => setStep(3)}>
                <ArrowLeft size={16} /> Back
              </button>
              <button type="submit" className="btn btn-primary btn-lg">
                Confirm Appointment Request
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
