import React from 'react';
import { Stethoscope, MessagesSquare, Route, ArrowRight } from 'lucide-react';
import Hero from '../../components/Hero';
import SectionHeader from '../../components/SectionHeader';
import TestimonialCard from '../../components/TestimonialCard';
import ActionTilesCTA from './ActionTilesCTA';
import { patientTestimonials, caseStudyStructure } from '../../data/websiteContent';
import '../../styles/resources.css';

// Source: Website Content PDF, Page 24 – Case Studies (pp.149–150);
// structure from Sitemap brief Section 05. No approved case details exist,
// so no clinical case content is published.
const stages = [
  { Icon: Stethoscope, title: 'The concern', text: 'Every case begins with understanding the symptoms, history and concerns shared by the patient.' },
  { Icon: MessagesSquare, title: 'The consultation', text: 'A detailed consultation helps create a complete picture of your health concerns and individual needs.' },
  { Icon: Route, title: 'The care journey', text: "Care is considered around the patient's needs, circumstances and ongoing experience." },
];

const pendingTestimonials = [
  { label: 'Testimonial 02', title: "A patient's experience of care", text: 'A personal account of their consultation experience, communication and support received during their care.' },
  { label: 'Testimonial 03', title: 'Real experiences. Real perspectives.', text: 'Hear directly from patients about their experience with Dr. Mohini and the care they received.' },
];

const perspective = [
  { title: 'Individual concerns', text: 'Understanding what brought the patient to consultation.' },
  { title: 'Clinical perspective', text: 'Looking at the information shared during the consultation.' },
  { title: 'Ongoing journey', text: "Following the patient's experience through personalised care." },
];

export default function CaseStudiesPage() {
  const testimonial = patientTestimonials[0];
  return (
    <div className="case-studies-page">
      <Hero
        badge="Resources"
        title="Case Studies"
        subtitle="Understanding the person behind the concern"
        breadcrumbs={[
          { label: 'Resources' },
          { label: 'Case Studies' },
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Patient Stories"
        secondaryCtaLink="/resources/patient-stories"
      />

      <section className="section photo-band" style={{ '--band-img': "url('/images/photos/anxiety-consultation.webp')" }}>
        <div className="container">
          <div className="grid-3">
            {stages.map(({ Icon, title, text }) => (
              <div key={title} className="card rs-card">
                <span className="icon-tile"><Icon size={22} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#case-structure" className="link-arrow">
                  <span>View case</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="real-cases" className="section bg-sand">
        <div className="container">
          <SectionHeader
            badge="Real cases & clinical perspective"
            title="Real cases, thoughtfully presented"
            subtitle="These case studies will share selected patient journeys while respecting privacy and confidentiality."
            centered={true}
          />

          <div className="rs-featured-quote">
            <span className="rs-pending-tag">Testimonial 01</span>
            <TestimonialCard quote={testimonial.quote} author={testimonial.author} />
          </div>

          <div className="grid-2">
            {pendingTestimonials.map((t) => (
              <div key={t.label} className="rs-pending">
                <span className="rs-pending-tag">{t.label}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
                <p><em>To be shared with the patient&rsquo;s consent.</em></p>
              </div>
            ))}
          </div>

          <div className="grid-3 rs-section-gap">
            {perspective.map((p) => (
              <div key={p.title} className="card rs-card">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="case-structure" className="section photo-band" style={{ '--band-img': "url('/images/photos/hd/doctor-case-notes-hd.webp')" }}>
        <div className="container">
          <SectionHeader
            badge="How each case is presented"
            title="Case study structure"
            subtitle="Case studies are fully anonymised unless explicit consent exists."
            centered={true}
          />
          <ol className="rs-structure">
            {caseStudyStructure.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ActionTilesCTA
        title="Every case tells a different story"
        subtitle="Patient experiences are individual. Case studies are shared to help you understand the approach, not to promise a particular outcome."
      />
    </div>
  );
}
