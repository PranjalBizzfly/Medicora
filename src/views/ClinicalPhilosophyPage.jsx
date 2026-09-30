import React, { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import StatsStrip from '../components/StatsStrip';
import CTABanner from '../components/CTABanner';
import {
  Brain,
  Sparkles,
  Activity,
  HeartPulse,
  Leaf,
  User,
  ArrowRight
} from 'lucide-react';
import '../styles/about.css';

// Sitemap brief p.17–18 (Page 5 – Clinical Philosophy)
const equation = [
  { icon: HeartPulse, label: 'Physical health' },
  { icon: Brain, label: 'Emotional wellbeing' },
  { icon: Leaf, label: 'Lifestyle' },
  { icon: User, label: 'Individual context' }
];

// Source: Website Content PDF, "Page 5 – Clinical Philosophy", Section 3
const principles = [
  {
    title: 'Individualisation over generalisation',
    text: 'No two people experience anxiety in exactly the same way. Care is therefore shaped around the individual: their symptoms, experiences, history and needs.'
  },
  {
    title: 'Understanding beyond the symptoms',
    text: 'Rather than looking at anxiety as an isolated concern, the approach explores the wider patterns surrounding it and how they may be affecting everyday wellbeing.'
  },
  {
    title: 'Mind and body as one system',
    text: 'Anxiety can influence more than emotional health. Sleep, digestion, energy, tension and daily routines may also be affected. Understanding these connections helps create a more complete picture of your wellbeing.'
  }
];

// Section 4
const supports = [
  {
    icon: Brain,
    title: 'Psychological Counselling',
    text: 'Support to understand emotional concerns, thought patterns and coping mechanisms.'
  },
  {
    icon: Sparkles,
    title: 'Yoga & Breathing Practices',
    text: 'Simple mind-body practices that can complement anxiety management and everyday stress relief.'
  },
  {
    icon: Activity,
    title: 'Lifestyle Guidance',
    text: 'Practical support around sleep, daily routines and habits that influence emotional wellbeing.'
  }
];

// Section 5
const philosophyStats = [
  { number: '14+ Years', label: 'Clinical experience' },
  { number: '12,000+', label: 'Patients consulted' },
  { number: '3 Countries', label: 'India · UAE · USA' }
];

export default function ClinicalPhilosophyPage() {
  return (
    <div className="clinical-philosophy-page">
      {/* Section 1 – Hero */}
      <Hero
        badge="Clinical Philosophy"
        title="Good care begins with understanding the person behind the symptoms."
        subtitle="Dr. Mohini Mutha considers your experiences, emotional wellbeing, lifestyle and individual patterns to develop a more personalised approach to care."
        breadcrumbs={[
          { label: "About" },
          { label: "Clinical Philosophy" }
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        sideCard={
          <ul className="ab-milestones ab-tagline-list">
            <li><strong>Understanding</strong></li>
            <li><strong>Individualised</strong></li>
            <li><strong>Whole Person</strong></li>
          </ul>
        }
      />

      {/* Section 2 – Why philosophy matters + brief equation */}
      <section className="section section-lg bg-surface">
        <div className="container">
          <div className="split-section ab-split">
            <div>
              <span className="badge ab-eyebrow">Why philosophy matters</span>
              <h2 className="ab-title">Why philosophy matters more than a prescription</h2>
              <p className="ab-lead">
                Anxiety does not look the same in every person. That is why care should not begin with a standard checklist.
              </p>
              <p className="ab-body">
                As a homeopathic physician for anxiety, Dr. Mohini Mutha takes time to understand what may be influencing your symptoms, from personal history and emotional experiences to everyday stress, lifestyle and overall wellbeing.
              </p>
              <p className="ab-body">
                This forms the foundation of integrated anxiety care, bringing together homeopathy, counselling and practical lifestyle support where appropriate.
              </p>
            </div>

            <div className="ab-panel">
              <div style={{ marginBottom: '1.5rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                <Image
                  src="/images/about/philosophy-whole-person.webp"
                  alt="A woman meditating peacefully in an armchair by a sunny window"
                  width={800}
                  height={600}
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </div>
              <h3 className="ab-panel-title">Health is more than a set of symptoms</h3>
              <div className="ab-equation">
                {equation.map(({ icon: Icon, label }, idx) => (
                  <Fragment key={label}>
                    {idx > 0 && <div className="ab-eq-op" aria-hidden="true">+</div>}
                    <div className="ab-eq-item">
                      <span className="icon-tile"><Icon size={20} aria-hidden="true" /></span>
                      <span>{label}</span>
                    </div>
                  </Fragment>
                ))}
                <div className="ab-eq-op" aria-hidden="true">↓</div>
                <div className="ab-eq-result">A more complete understanding of the patient</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 – Three core principles */}
      <section className="section photo-band" style={{ '--band-img': "url('/images/photos/dr-mohini-garden-wide.webp')" }}>
        <div className="container">
          <SectionHeader
            badge="Three core principles"
            badgeType="dark"
            title="The three principles behind every care plan"
            centered={true}
          />

          <div className="grid-3">
            {principles.map((p, idx) => (
              <div key={p.title} className="card ab-card">
                <span className="ab-num">0{idx + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 – Integrated approach */}
      <section className="section bg-sand">
        <div className="container">
          <SectionHeader
            badge="The integrated approach"
            title="Where classical homeopathy meets modern support"
            subtitle="Classical homeopathy can form one part of a broader approach to individualised care. Depending on your needs, your care may also include:"
            centered={true}
          />

          <div className="grid-3">
            {supports.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card ab-card">
                <span className="icon-tile"><Icon size={22} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>

          <p className="ab-closing">
            The aim is not to follow a fixed formula, but to bring the right elements together around the individual.
          </p>
          <div className="ab-center-link">
            <Link href="/my-approach/integrated-healing" className="link-arrow">
              <span>Integrated Healing</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5 – Experience */}
      <StatsStrip
        eyebrow="Experience"
        title="A philosophy shaped by real clinical experience"
        subtitle="This approach has developed through more than a decade of clinical practice and conversations with thousands of patients. Every consultation, every case and every individual experience has reinforced the importance of listening carefully, looking beyond the obvious and keeping care personal."
        items={philosophyStats}
      />

      {/* Section 6 – Final CTA */}
      <CTABanner
        badge="Start with care that understands you"
        title="Your experience deserves more than a checklist."
        subtitle="Whether you are seeking support for anxiety, stress, sleep concerns or emotional wellbeing, begin with a conversation and explore an approach shaped around you."
      />
    </div>
  );
}
