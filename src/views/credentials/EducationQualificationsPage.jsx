import React from 'react';
import '../../styles/credentials.css';
import Hero from '../../components/Hero';
import SectionHeader from '../../components/SectionHeader';
import CTABanner from '../../components/CTABanner';
import BrandMark from '../../components/BrandMark';
import { GraduationCap, Brain, Award } from 'lucide-react';

const qualifications = [
  {
    icon: GraduationCap,
    tag: 'Completed 2012',
    title: 'BHMS',
    sub: 'Bachelor of Homeopathic Medicine and Surgery',
    text: 'Provided comprehensive clinical foundation in human anatomy, pathology, medicine, and homeopathic therapeutics, establishing independent clinical practice in 2012.',
  },
  {
    icon: Award,
    tag: 'Completed 2016',
    title: 'MD in Homeopathy',
    sub: 'Specialisation in Homeopathic Materia Medica',
    text: 'Rigorous postgraduate medical training strengthening deep understanding of homeopathic medicinal profiles, constitutional case analysis, and chronic disease therapeutics.',
  },
  {
    icon: Brain,
    tag: 'Postgraduate Diploma',
    title: 'PGDPC',
    sub: 'Post Graduate Diploma in Psychological Counselling',
    text: 'Postgraduate training focusing on psychological assessment, empathetic listening, cognitive coping frameworks, and psychosomatic health dynamics.',
  },
];

const pillars = [
  {
    title: 'Clinical Foundation',
    text: 'BHMS provided the thorough grounding for evidence-conscious homeopathic medical practice.',
  },
  {
    title: 'Specialised Knowledge',
    text: 'MD in Homeopathy deepened understanding of Materia Medica and individualised constitutional treatment.',
  },
  {
    title: 'Broader Human Perspective',
    text: 'PGDPC added psychological counselling methodologies to evaluate stress, emotional trauma, and psychosomatic links.',
  },
];

export default function EducationQualificationsPage() {
  return (
    <div className="education-qualifications-page">
      <Hero
        badge="Credentials · Academics"
        title="Education & Qualifications"
        subtitle="Qualifications that support thoughtful, evidence-conscious patient care."
        breadcrumbs={[
          { label: "Credentials", path: "/credentials/professional-experience" },
          { label: "Education & Qualifications" }
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="View Achievements"
        secondaryCtaLink="/credentials/achievements"
      />

      <section className="section bg-surface">
        <div className="container">
          <SectionHeader
            badge="Credentials"
            title="Academic Qualifications"
            subtitle="Presenting medical foundation and psychological training without inflated claims."
            centered={true}
          />

          <div className="grid-3">
            {qualifications.map(({ icon: Icon, tag, title, sub, text }) => (
              <div className="card cr-card cr-card-accent" key={title}>
                <span className="icon-tile"><Icon size={24} /></span>
                <span className="badge badge-mint cr-tag">{tag}</span>
                <h3>{title}</h3>
                <h4 className="cr-card-sub">{sub}</h4>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <div className="split-section cr-split">
            <div className="cr-copy">
              <span className="badge">Philosophy of Learning</span>
              <h2>Learning That Continues Beyond Qualification</h2>
              <p className="cr-lead">
                My education has given me different perspectives to understand health, symptoms, and the individual behind them. But a degree is merely the starting line.
              </p>
              <p className="cr-body">
                Over 14+ years of clinical practice, interacting with more than 12,000 patients has provided invaluable real-world clinical education—teaching that symptoms are never just textbook cases, but living human narratives.
              </p>
            </div>

            <div className="cr-panel">
              <BrandMark className="cr-panel-mark" />
              <h3>Three Educational Pillars</h3>
              <ol className="cr-timeline">
                {pillars.map((p, i) => (
                  <li key={p.title}>
                    <span className="cr-timeline-num">{i + 1}</span>
                    <div>
                      <h4>{p.title}</h4>
                      <p>{p.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        badge="Knowledge with a Human Perspective"
        title="Knowledge with a Human Perspective"
        subtitle="Qualifications provide the foundation. Listening, experience and understanding shape how that knowledge is used in practice."
      />
    </div>
  );
}
