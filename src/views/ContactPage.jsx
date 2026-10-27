import React from 'react';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, MessageCircle, Building2, AlertTriangle } from 'lucide-react';
import { siteConfig } from '../data/websiteContent';
import '../styles/resources.css';
import '../styles/booking.css';

const WHATSAPP_URL = 'https://wa.me/919423972150';

/*
 * Contact page (audit AUD-18) with the "Message me" form (AUD-09).
 * Every detail is from siteConfig (Content PDF footer) or existing approved copy.
 * The full street address of the clinic is not in the source documents, so only
 * the approved location is shown until the client provides it.
 */
const details = [
  { icon: Phone, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, '')}` },
  { icon: MessageCircle, label: 'WhatsApp', value: siteConfig.phone, href: WHATSAPP_URL, external: true },
  { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}`, email: true },
  { icon: MapPin, label: 'Location', value: siteConfig.clinicLocation },
  { icon: Building2, label: 'Clinic', value: `${siteConfig.clinicName}, Kopar Khairne, Navi Mumbai` },
];

export default function ContactPage() {
  return (
    <div className="contact-page">
      <Hero
        badge="Contact"
        title="Contact Dr. Mohini Mutha"
        subtitle="Have a health or wellbeing concern you'd like to discuss? Start a conversation with Dr. Mohini Mutha and explore personalised care based on your individual needs."
        breadcrumbs={[{ label: 'Contact' }]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
      />

      <section className="section bg-surface">
        <div className="container ct-layout">
          <div className="ct-details">
            <SectionHeader badge="Get in touch" title="Contact details" />
            <ul className="ct-list">
              {details.map(({ icon: Icon, label, value, href, external, email }) => (
                <li key={label}>
                  <span className="ct-icon"><Icon size={20} aria-hidden="true" /></span>
                  <span className="ct-text">
                    <strong>{label}</strong>
                    {href ? (
                      <a href={href} className={email ? 'email-text' : undefined}
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{value}</a>
                    ) : (
                      <span>{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <div className="ct-note" role="note">
              <AlertTriangle size={18} aria-hidden="true" />
              <p>
                Dr. Mohini Mutha does not provide emergency medical services through this website. If you are experiencing a medical emergency, severe symptoms or a situation requiring immediate attention, contact your local emergency medical service or visit the nearest emergency department.
              </p>
            </div>
          </div>

          <div id="message" className="ct-form">
            <SectionHeader badge="Message me" title="Send a message" />
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
