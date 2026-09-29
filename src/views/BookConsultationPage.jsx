import React from 'react';
import '../styles/credentials.css';
import Hero from '../components/Hero';
import BookingForm from '../components/BookingForm';
import BrandMark from '../components/BrandMark';
import { siteConfig } from '../data/websiteContent';
import { Phone, CheckCircle2, Video, Building2 } from 'lucide-react';

const prepTips = [
  'Keep any previous medical investigations, lab blood tests, scans, or specialist prescriptions readily available.',
  'Think about the timeline of your concerns: when symptoms began, what makes them better or worse, and how they relate to stress or daily habits.',
  'Ensure you are in a quiet, private space where you can speak openly without interruptions during your scheduled time.',
];

export default function BookConsultationPage() {
  return (
    <div className="book-consultation-page">
      <Hero
        badge="Connect · Appointments"
        title="Ready to Take the Next Step?"
        subtitle="Start with a conversation about your wellbeing. Personalised online and in-person consultations with Dr. Mohini Mutha."
        breadcrumbs={[
          { label: "Connect", path: "/book-a-consultation" },
          { label: "Book a Consultation" }
        ]}
        primaryCtaText={null}
        secondaryCtaText="Consultation Process"
        secondaryCtaLink="/my-approach/consultation-process"
      />

      <section className="section bg-surface">
        <div className="container">
          <div className="cr-book-layout">
            <aside className="cr-book-aside">
              <div className="cr-book-intro">
                <span className="badge">Simple 4-Step Booking</span>
                <h2>Book Your Consultation</h2>
                <p>Select your preferred mode, time, and tell us briefly about your health concerns.</p>
              </div>

              <div className="cr-info-card">
                <span className="icon-tile"><Building2 size={20} /></span>
                <div>
                  <h3>{siteConfig.clinicName}</h3>
                  <p>Practices at {siteConfig.clinicName} located in Kopar Khairne, Navi Mumbai.</p>
                  <span className="cr-info-meta">In-Person by Appointment</span>
                </div>
              </div>

              <div className="cr-info-card">
                <span className="icon-tile"><Video size={20} /></span>
                <div>
                  <h3>{siteConfig.digitalPractice} (Online)</h3>
                  <p>Private video &amp; audio consultations for patients across India, the UAE, and the USA.</p>
                  <span className="cr-info-meta">Flexible International Slots</span>
                </div>
              </div>

              <div className="cr-info-card">
                <span className="icon-tile"><Phone size={20} /></span>
                <div>
                  <h3>Direct Inquiries</h3>
                  <p>
                    Phone / WhatsApp: <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>{siteConfig.phone}</a>
                  </p>
                  <p>
                    Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                  </p>
                </div>
              </div>

              <div className="cr-dark-panel">
                <BrandMark className="cr-dark-panel-mark" />
                <p>Our clinic coordinator will contact you to confirm the final slot after you submit your request.</p>
              </div>
            </aside>

            <BookingForm />
          </div>
        </div>
      </section>

      <section className="section-sm bg-sand">
        <div className="container-narrow">
          <div className="cr-prep">
            <h3>Preparing for Your Consultation</h3>
            <ul className="check-list">
              {prepTips.map((tip) => (
                <li key={tip}>
                  <CheckCircle2 size={18} />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
