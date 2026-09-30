import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../styles/credentials.css';
import Hero from '../../components/Hero';
import SectionHeader from '../../components/SectionHeader';
import ActionTilesCTA from '../resources/ActionTilesCTA';
import { Building2, GraduationCap, Briefcase, Quote, ArrowRight } from 'lucide-react';

// Source: Website Content PDF, Page 20 – Professional Experience (pp.143–144)
const areas = [
  {
    icon: Briefcase,
    title: 'Clinical practice',
    text: 'Since 2012, I have worked with patients across a broad range of health and wellbeing concerns.',
    href: '/my-journey',
  },
  {
    icon: Building2,
    title: 'Institutional experience',
    text: 'Since 2018, I have served as a Consultant Homoeopathic Physician with ONGC, alongside my clinical practice.',
    href: '/credentials/achievements',
  },
  {
    icon: GraduationCap,
    title: 'Continued learning',
    text: 'My BHMS, MD in Homeopathy and PGDPC continue to shape how I understand patient care.',
    href: '/credentials/education-qualifications',
  },
];

// Sitemap brief (Section 04): "clear, factual timeline"
const timeline = [
  { label: '2012', title: 'Clinical practice', text: 'Clinical practice since 2012.' },
  { label: '2018', title: 'ONGC', text: 'Consultant Homoeopathic Physician with ONGC since 2018.' },
  { label: 'Now', title: 'Independent practice', text: "Dr. Mutha's Homeopathic Clinic, Kopar Khairne, Navi Mumbai, and Trivana Wellness (digital practice)." },
];

const stats = [
  { value: '14+ years', text: 'Years of clinical experience since beginning practice in 2012.' },
  { value: '12,000+ patients', text: 'Patient consultations across different health concerns and individual needs.' },
  { value: '8 years with ONGC', text: 'Professional experience as a Consultant Homoeopathic Physician.' },
];

const reflections = [
  'I appreciated the time taken to understand my concerns and health history.',
  'The consultation felt thoughtful, personal and focused on my individual needs.',
  'I felt comfortable discussing my concerns and asking questions throughout.',
];

export default function ProfessionalExperiencePage() {
  return (
    <div className="professional-experience-page">
      <Hero
        badge="Credentials"
        title="Professional Experience"
        subtitle="A clinical journey shaped by years of patient care"
        breadcrumbs={[
          { label: 'Credentials', path: '/credentials/professional-experience' },
          { label: 'Professional Experience' },
        ]}
        primaryCtaText="Book a consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Education & Qualifications"
        secondaryCtaLink="/credentials/education-qualifications"
      />

      <section className="section bg-surface">
        <div className="container">
          <div className="grid-3">
            {areas.map(({ icon: Icon, title, text, href }, i) => (
              <div className="card cr-card" key={title}>
                <div className="cr-card-top">
                  <span className="icon-tile"><Icon size={22} aria-hidden="true" /></span>
                  <span className="cr-card-num" aria-hidden="true">0{i + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link href={href} className="link-arrow cr-card-footer">
                  <span>Discover more</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section photo-band" style={{ '--band-img': "url('/images/photos/consultation-desk.jpg')" }}>
        <div className="container">
          <SectionHeader
            badge="Experience"
            title="Experience that continues to shape my care"
            subtitle="More than 14 years of practice have taught me that every patient brings a different story, experience and perspective."
            centered={true}
          />
          <div className="grid-3">
            {stats.map((s) => (
              <div className="card cr-card" key={s.value}>
                <h3>{s.value}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>

          <div className="grid-3 rs-section-gap">
            {reflections.map((q) => (
              <figure className="card cr-quote" key={q}>
                <Quote size={26} className="cr-quote-icon" aria-hidden="true" />
                <blockquote><p>&ldquo;{q}&rdquo;</p></blockquote>
                <figcaption className="cr-quote-label">Patient experience</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <div className="split-section" style={{ alignItems: 'center' }}>
            <div className="cr-panel">
              <h3>Professional timeline</h3>
              <ol className="cr-timeline cr-timeline-years">
                {timeline.map((t) => (
                  <li key={t.title}>
                    <span className="cr-timeline-num">{t.label}</span>
                    <div>
                      <h4>{t.title}</h4>
                      <p>{t.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <figure style={{ margin: 0 }}>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                <Image
                  src="/images/camp/medical-camp-2.webp"
                  alt="Dr. Mohini Mutha consulting a patient at a community health camp"
                  width={640}
                  height={1280}
                  sizes="(max-width: 900px) 100vw, 450px"
                  style={{ width: '100%', maxHeight: '480px', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                />
              </div>
              <figcaption style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                Dr. Mohini consulting patients at a community health camp in Navi Mumbai
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <ActionTilesCTA
        title="Experience you can bring to your consultation"
        subtitle="Whether you're seeking support for a specific concern or your overall wellbeing, begin with a conversation."
      />
    </div>
  );
}
