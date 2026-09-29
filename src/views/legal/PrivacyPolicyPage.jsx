import React from 'react';
import { CalendarDays, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import Hero from '../../components/Hero';
import { siteConfig } from '../../data/websiteContent';
import '../../styles/legal.css';

const sections = [
  {
    id: 'privacy-matters',
    title: 'Your Privacy Matters to Us',
    body: (
      <p>
        Dr. Mohini Mutha is committed to respecting your privacy and protecting the personal information you provide. This Privacy Policy explains what information may be collected through this website, how it may be used, and the measures taken to handle it responsibly and confidentially.
      </p>
    )
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    body: (
      <>
        <p>Depending on how you interact with our website, we may collect information such as:</p>
        <ul className="lg-list">
          <li>Name and contact details</li>
          <li>Email address and telephone / WhatsApp phone number</li>
          <li>Consultation or appointment scheduling details</li>
          <li>Information you choose to share when contacting us or filling forms</li>
          <li>Website usage, device parameters, and technical log information</li>
        </ul>
        <p className="lg-note">
          Please note: Avoid sharing sensitive, detailed medical records through general website contact forms unless specifically requested through a secure consultation channel.
        </p>
      </>
    )
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use Your Information',
    body: (
      <>
        <p>We may use the information you provide to:</p>
        <ul className="lg-list">
          <li>Respond to your health enquiries and questions</li>
          <li>Arrange, schedule, and manage online and in-person consultations</li>
          <li>Communicate updates or reminders regarding your appointments</li>
          <li>Provide requested healthcare and wellness services</li>
          <li>Improve our website architecture and patient user experience</li>
          <li>Maintain website security and meet applicable legal or regulatory requirements</li>
        </ul>
      </>
    )
  },
  {
    id: 'health-information-confidentiality',
    title: 'Health Information Confidentiality',
    body: (
      <p>
        Information relating to your health is classified as sensitive personal information. If you choose to share health or wellbeing information with us during consultations, it is kept strictly confidential and used only for purposes directly connected with your medical care and communication, in compliance with applicable medical ethics and privacy laws.
      </p>
    )
  },
  {
    id: 'cookies-analytics',
    title: 'Cookies & Analytics',
    body: (
      <p>
        Our website may use cookies and similar technologies to ensure core functionality, remember user preferences, and measure aggregated website performance. You can control or disable cookies through your browser settings.
      </p>
    )
  },
  {
    id: 'third-party-services',
    title: 'Third-Party Services',
    body: (
      <p>
        We may utilize trusted third-party providers for secure hosting, appointment scheduling systems, email delivery, or analytics. These providers process information on our behalf under confidentiality and data security obligations.
      </p>
    )
  },
  {
    id: 'data-security-retention',
    title: 'Data Security & Retention',
    body: (
      <p>
        We take reasonable administrative, technical, and physical measures to protect personal information against unauthorized access, loss, or disclosure. We retain personal information only for as long as necessary to fulfill healthcare purposes, maintain appropriate medical records, or satisfy legal obligations.
      </p>
    )
  },
  {
    id: 'privacy-rights',
    title: 'Your Privacy Rights',
    body: (
      <p>
        Under applicable data protection laws (including the Indian Digital Personal Data Protection Act / DPDP), you may have the right to request access to, correction of, or deletion of your personal data, or to withdraw consent for non-essential communications.
      </p>
    )
  },
  {
    id: 'international-visitors',
    title: 'International Visitors',
    body: (
      <p>
        Trivana Wellness provides digital care to international patients, including in the UAE and USA. When accessing our services from outside India, your information may be processed in locations where we or our secure service providers operate.
      </p>
    )
  },
  {
    id: 'contact-privacy',
    title: 'Contact Us About Privacy',
    body: (
      <>
        <p>
          If you have any questions or privacy-related requests regarding this policy, please contact:
        </p>
        <div className="lg-contact">
          <span className="lg-contact-icon"><ShieldCheck size={22} /></span>
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

export default function PrivacyPolicyPage() {
  return (
    <div className="privacy-policy-page">
      <Hero
        badge="Legal & Privacy"
        title="Privacy Policy"
        subtitle="Your privacy matters to us. Learn how we collect, handle, and protect your personal and health information responsibly."
        breadcrumbs={[
          { label: "Legal", path: "/privacy-policy" },
          { label: "Privacy Policy" }
        ]}
        primaryCtaText={null}
        secondaryCtaText="Terms & Conditions"
        secondaryCtaLink="/terms-and-conditions"
      />

      <section className="section lg-section">
        <div className="container">
          <div className="lg-layout">
            <aside className="lg-toc" aria-label="Privacy Policy contents">
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
                Privacy questions?
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
