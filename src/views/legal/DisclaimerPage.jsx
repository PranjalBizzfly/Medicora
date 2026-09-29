import React from 'react';
import { CalendarDays, Mail, Phone, MapPin, Stethoscope } from 'lucide-react';
import Hero from '../../components/Hero';
import { siteConfig } from '../../data/websiteContent';
import '../../styles/legal.css';

const sections = [
  {
    id: 'general-educational-purposes',
    title: 'General Educational Purposes',
    body: (
      <p>
        The information provided on the Dr. Mohini Mutha website is intended strictly for general educational and informational purposes. It is not intended to replace professional medical advice, clinical diagnosis, or emergency medical care.
      </p>
    )
  },
  {
    id: 'information-on-website',
    title: 'Information on This Website',
    body: (
      <p>
        This website includes information about classical homeopathy, mind-body health, emotional wellbeing, lifestyle factors, anxiety, headaches, digestive health, and other areas of clinical care. This information is intended to help you understand these health topics and prepare for informed discussions with a qualified healthcare professional. Individual health experiences vary, and information on this website should not be considered a self-diagnosis or a standardised treatment recommendation.
      </p>
    )
  },
  {
    id: 'online-consultations',
    title: 'Online Consultations',
    body: (
      <p>
        An online consultation allows you to discuss your health concerns with Dr. Mohini Mutha and understand the care options that may be appropriate for you. The suitability of an online consultation depends on your individual circumstances and the nature of your concern. An in-person medical evaluation or referral to another medical specialist may be recommended when clinically indicated.
      </p>
    )
  },
  {
    id: 'no-guaranteed-outcomes',
    title: 'No Guaranteed Health Outcomes',
    body: (
      <p>
        Individual responses to healthcare approaches vary significantly depending on constitutional factors, duration of symptoms, and adherence to care. Information on this website should not be interpreted as a guarantee of a particular result, 100% cure, permanent cure, or uniform outcome from homeopathy, psychological counselling, lifestyle guidance, or mind-body routines.
      </p>
    )
  },
  {
    id: 'emergency-situations',
    title: 'Emergency Situations',
    body: (
      <div className="medical-disclaimer-box">
        <p>
          <strong>Emergency Warning:</strong> Dr. Mohini Mutha does not provide emergency medical services through this website. If you are experiencing a medical emergency, severe acute symptoms, chest pressure, shortness of breath, acute hemorrhage, suicidal thoughts, or an immediate mental health crisis, please contact your local emergency medical service or visit the nearest hospital emergency department immediately.
        </p>
      </div>
    )
  },
  {
    id: 'homeopathy-complementary-care',
    title: 'Homeopathy & Complementary Care',
    body: (
      <p>
        Homeopathy is a system of complementary medicine. Information presented on this website is not intended to suggest that homeopathy should replace medically necessary conventional care. Do not stop, change, or delay prescribed conventional medications or treatments based solely on information found on this website. Always discuss significant changes with an appropriately qualified primary physician.
      </p>
    )
  },
  {
    id: 'testimonials-patient-stories',
    title: 'Testimonials & Patient Stories',
    body: (
      <p>
        Patient testimonials and stories, where published, represent authentic individual experiences. They should not be understood as typical results or as a promise that another individual will experience the exact same outcome.
      </p>
    )
  },
  {
    id: 'medical-clarifications-contact',
    title: 'Contact for Medical Clarifications',
    body: (
      <>
        <p>
          If you have questions about the information on this website or about an online consultation, please contact Dr. Mohini Mutha before making a decision about your care:
        </p>
        <div className="lg-contact">
          <span className="lg-contact-icon"><Stethoscope size={22} /></span>
          <div className="lg-contact-body">
            <p className="lg-contact-name">Dr. Mohini Mutha · Homeopathic Physician</p>
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

export default function DisclaimerPage() {
  return (
    <div className="disclaimer-page">
      <Hero
        badge="Legal & Medical Responsibility"
        title="Medical & Website Disclaimer"
        subtitle="Important information about the educational content, consultations, complementary nature of homeopathy, and medical responsibilities on this website."
        breadcrumbs={[
          { label: "Legal", path: "/disclaimer" },
          { label: "Disclaimer" }
        ]}
        primaryCtaText={null}
        secondaryCtaText="Book a Consultation"
        secondaryCtaLink="/book-a-consultation"
      />

      <section className="section lg-section">
        <div className="container">
          <div className="lg-layout">
            <aside className="lg-toc" aria-label="Disclaimer contents">
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
                Questions before deciding on care?
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
