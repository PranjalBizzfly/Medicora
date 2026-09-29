import React from 'react';
import '../../styles/credentials.css';
import Hero from '../../components/Hero';
import SectionHeader from '../../components/SectionHeader';
import StatsStrip from '../../components/StatsStrip';
import CTABanner from '../../components/CTABanner';
import { Building2, GraduationCap, Briefcase, Quote } from 'lucide-react';

const areas = [
  {
    icon: Briefcase,
    title: 'Clinical Practice (Since 2012)',
    text: "Since 2012, Dr. Mohini has worked with patients across general wellness, respiratory, migraines, digestive health, allergies, women's wellness, child health, and psychosomatic concerns.",
  },
  {
    icon: Building2,
    title: 'Institutional Experience (ONGC)',
    text: 'Serving as a Consultant Homoeopathic Physician with ONGC since 2018 (~8 years), contributing healthcare expertise within a structured corporate medical environment.',
  },
  {
    icon: GraduationCap,
    title: 'Continued Learning',
    text: 'Her BHMS, MD in Homeopathy, and PGDPC in Psychological Counselling continually inform her empathetic, whole-person approach to understanding illness.',
  },
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
        badge="Credentials · Experience"
        title="Professional Experience"
        subtitle="A clinical journey shaped by 14+ years of patient care across independent practice and institutional healthcare."
        breadcrumbs={[
          { label: "Credentials", path: "/credentials/professional-experience" },
          { label: "Professional Experience" }
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Education & Qualifications"
        secondaryCtaLink="/credentials/education-qualifications"
      />

      <StatsStrip
        title="Experience Built Through Patients, Practice and Perspective"
        subtitle="Since beginning clinical practice in 2012, Dr. Mohini has worked with patients across a wide range of acute and chronic health concerns."
      />

      <section className="section bg-surface">
        <div className="container">
          <SectionHeader
            badge="Clinical Foundation"
            title="Three Key Areas of Professional Experience"
            subtitle="Diverse healthcare environments strengthening clinical insight."
            centered={true}
          />

          <div className="grid-3">
            {areas.map(({ icon: Icon, title, text }, i) => (
              <div className="card cr-card" key={title}>
                <div className="cr-card-top">
                  <span className="icon-tile"><Icon size={22} /></span>
                  <span className="cr-card-num" aria-hidden="true">0{i + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <SectionHeader
            badge="Patient Trust"
            title="Experience That Continues to Shape My Care"
            subtitle="More than 14 years of practice have taught me that every patient brings a different story, experience and perspective."
            centered={true}
          />

          <div className="grid-3">
            {reflections.map((q) => (
              <div className="card cr-quote" key={q}>
                <Quote size={26} className="cr-quote-icon" aria-hidden="true" />
                <p>&ldquo;{q}&rdquo;</p>
                <span className="cr-quote-label">Patient experience</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        badge="Experience You Can Trust"
        title="Experience You Can Bring to Your Consultation"
        subtitle="Whether you're seeking support for a specific concern or your overall wellbeing, begin with a conversation."
      />
    </div>
  );
}
