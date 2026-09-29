import React from 'react';
import { CalendarDays, Mail, Phone, MapPin, FileText } from 'lucide-react';
import Hero from '../../components/Hero';
import { siteConfig } from '../../data/websiteContent';
import '../../styles/legal.css';

const sections = [
  {
    id: 'our-services',
    title: 'Our Services',
    body: (
      <>
        <p>
          <strong>Website Use:</strong> Trivana Wellness provides information about Dr. Mohini Mutha, online consultations, classical homeopathy, psychological counselling, and related wellness approaches.
        </p>
        <p>
          <strong>Consultations:</strong> Online and in-person consultations are provided based on the health history, symptoms, and context shared by you during your session. A consultation does not guarantee a specific health outcome or permanent cure.
        </p>
        <p>
          <strong>Educational Information:</strong> Website content is provided for general educational purposes and should not be treated as a substitute for emergency medical care or an urgent in-person physical assessment where required.
        </p>
      </>
    )
  },
  {
    id: 'patient-responsibilities',
    title: 'Patient Responsibilities',
    body: (
      <>
        <p>
          <strong>Accurate Information:</strong> You are responsible for providing complete, truthful, and accurate information about your symptoms, medical history, concurrent medications, and previous treatments.
        </p>
        <p>
          <strong>Appointments:</strong> Please attend your scheduled consultation at the agreed time and ensure you have a quiet, suitable private environment for the session.
        </p>
        <p>
          <strong>Medical Emergencies:</strong> Trivana Wellness is not an emergency medical service. If you experience a medical emergency, severe chest pain, shortness of breath, acute hemorrhage, or crisis, seek immediate local emergency hospital care.
        </p>
      </>
    )
  },
  {
    id: 'prohibited-activities',
    title: 'Prohibited Activities',
    body: (
      <>
        <p>
          <strong>Misuse:</strong> You may not use this website to submit fraudulent information, impersonate another individual, or interfere with website security or service delivery.
        </p>
        <p>
          <strong>Unauthorised Use:</strong> You may not copy, reproduce, scrape, republish, or commercially exploit website content, clinical materials, logos, or text without express prior written consent.
        </p>
      </>
    )
  },
  {
    id: 'services-management',
    title: 'Services Management',
    body: (
      <>
        <p>
          <strong>Appointments & Fees:</strong> Consultation availability, professional fees, and scheduling arrangements may be updated from time to time.
        </p>
        <p>
          <strong>Cancellation & Rescheduling:</strong> If you need to reschedule your appointment, please contact Trivana Wellness as early as possible so that the slot may be offered to other patients.
        </p>
        <p>
          <strong>Changes to Terms:</strong> Trivana Wellness may update these Terms and Conditions when necessary. The latest version published on this page applies to your continued use of the website and services.
        </p>
      </>
    )
  },
  {
    id: 'terms-contact',
    title: 'Contact Information',
    body: (
      <>
        <p>
          If you have any questions about these Terms and Conditions, please contact us before using our services:
        </p>
        <div className="lg-contact">
          <span className="lg-contact-icon"><FileText size={22} /></span>
          <div className="lg-contact-body">
            <p className="lg-contact-name">Dr. Mohini Mutha · Trivana Wellness</p>
            <ul className="lg-contact-list">
              <li><Mail size={15} /><span>Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></span></li>
              <li><Phone size={15} /><span>Phone: <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phone}</a></span></li>
              <li><MapPin size={15} /><span>Clinic: {siteConfig.clinicName}, {siteConfig.clinicLocation}</span></li>
            </ul>
          </div>
        </div>
      </>
    )
  }
];

export default function TermsConditionsPage() {
  return (
    <div className="terms-conditions-page">
      <Hero
        badge="Legal & Usage"
        title="Terms & Conditions"
        subtitle="These terms explain the use of the Trivana Wellness website, online consultations, and related professional healthcare services."
        breadcrumbs={[
          { label: "Legal", path: "/terms-and-conditions" },
          { label: "Terms & Conditions" }
        ]}
        primaryCtaText={null}
        secondaryCtaText="Privacy Policy"
        secondaryCtaLink="/privacy-policy"
      />

      <section className="section lg-section">
        <div className="container">
          <div className="lg-layout">
            <aside className="lg-toc" aria-label="Terms and Conditions contents">
              <p className="lg-toc-title">On this page</p>
              <ol className="lg-toc-list">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a className="lg-toc-link" href={`#${s.id}`}>
                      <span className="lg-toc-num">{i + 1}.</span>
                      <span>{s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
              <div className="lg-toc-cta">
                Questions about these terms?
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
            </aside>

            <article className="lg-doc">
              <div className="lg-doc-meta">
                <CalendarDays size={16} />
                <span>Last updated: September 2026</span>
              </div>
              <div className="lg-prose">
                {sections.map((s, i) => (
                  <section key={s.id} id={s.id} className="lg-doc-section">
                    <h2 className="lg-doc-heading">
                      <span className="lg-doc-num">{i + 1}</span>
                      <span>{s.title}</span>
                    </h2>
                    {s.body}
                  </section>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
