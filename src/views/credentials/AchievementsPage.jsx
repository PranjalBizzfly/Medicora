import React from 'react';
import Link from 'next/link';
import '../../styles/credentials.css';
import Hero from '../../components/Hero';
import SectionHeader from '../../components/SectionHeader';
import StatsStrip from '../../components/StatsStrip';
import CTABanner from '../../components/CTABanner';
import BrandMark from '../../components/BrandMark';
import { Building2, HeartHandshake, CheckCircle2, ArrowRight, Globe } from 'lucide-react';

const milestones = [
  {
    icon: HeartHandshake,
    tag: 'Since 2012',
    title: '12,000+ Consultations',
    text: 'More than 12,000 patient consultations across acute and chronic health concerns, conducting thorough individualised case-taking with patient-first listening.',
  },
  {
    icon: Building2,
    tag: '2018 – Present',
    title: 'Consultant with ONGC',
    text: 'Serving for approximately 8 years as Consultant Homoeopathic Physician with ONGC, bringing structured healthcare discipline to patient care.',
  },
  {
    icon: Globe,
    tag: 'Cross-Border',
    title: 'Consultations Across 3 Countries',
    text: 'Expanded care digitally via Trivana Wellness, providing video and audio consultations to individuals and families across India, the UAE, and the USA.',
  },
];

const highlights = [
  { label: 'Clinical Journey:', text: 'Practising homeopathy and caring for patients since 2012.' },
  { label: 'Professional Contribution:', text: 'Bringing clinical expertise to institutional healthcare through ONGC.' },
  { label: 'Community Outreach:', text: 'Conducting and participating in free medical camps focused on community health and emotional wellbeing.' },
];

export default function AchievementsPage() {
  return (
    <div className="achievements-page">
      <Hero
        badge="Credentials · Achievements"
        title="Achievements & Milestones"
        subtitle="Meaningful milestones built through dedicated clinical practice, institutional responsibility, and community healthcare initiatives."
        breadcrumbs={[
          { label: "Credentials", path: "/credentials/professional-experience" },
          { label: "Achievements" }
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Professional Experience"
        secondaryCtaLink="/credentials/professional-experience"
      />

      <StatsStrip
        title="More Than Numbers: Meaningful Milestones"
        subtitle="Each milestone reflects years of learning, patient conversations and commitment to thoughtful healthcare."
      />

      <section className="section bg-surface">
        <div className="container">
          <SectionHeader
            badge="Milestones"
            title="Key Milestones of Practice and Dedication"
            subtitle="Authentic professional contributions without exaggerated or fabricated rankings."
            centered={true}
          />

          <div className="grid-3">
            {milestones.map(({ icon: Icon, tag, title, text }) => (
              <div className="card cr-card" key={title}>
                <span className="icon-tile"><Icon size={24} /></span>
                <span className="badge badge-mint cr-tag">{tag}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mint">
        <div className="container">
          <div className="split-section cr-split">
            <div className="cr-copy">
              <span className="badge">Social Contribution</span>
              <h2>Community Health Camps &amp; Emotional Wellbeing Awareness</h2>
              <p className="cr-lead">
                Dr. Mohini has conducted and participated in free homeopathic medical camps as part of social and community initiatives in the Navi Mumbai area.
              </p>
              <p className="cr-body">
                A particular emphasis of these community drives has been fostering awareness of emotional health—encouraging people to openly recognize stress, anxiety, and the value of early holistic support.
              </p>
              <div className="cr-actions">
                <Link href="/resources/invite-me-to-speak" className="btn btn-secondary">
                  <span>Invite Dr. Mohini to Speak</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="cr-panel">
              <BrandMark className="cr-panel-mark" />
              <h3>Professional Scope Highlights</h3>
              <ul className="check-list cr-highlights">
                {highlights.map((h) => (
                  <li key={h.label}>
                    <CheckCircle2 size={18} />
                    <span><strong>{h.label}</strong> {h.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        badge="A Journey That Continues to Grow"
        title="A Journey That Continues to Grow"
        subtitle="Every patient, experience and opportunity to learn has contributed to the doctor I am today."
      />
    </div>
  );
}
