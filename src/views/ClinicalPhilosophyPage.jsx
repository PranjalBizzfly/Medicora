import React, { Fragment } from 'react';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import StatsStrip from '../components/StatsStrip';
import CTABanner from '../components/CTABanner';
import BrandMark from '../components/BrandMark';
import {
  Brain,
  Sparkles,
  Activity,
  HeartPulse,
  Leaf
} from 'lucide-react';
import '../styles/about.css';

const equation = [
  { icon: HeartPulse, label: 'Physical Health & Symptom Presentation' },
  { icon: Brain, label: 'Emotional Wellbeing & Psychological Landscape' },
  { icon: Leaf, label: 'Lifestyle Routines & Environmental Factors' }
];

const principles = [
  {
    tag: 'Principle 01',
    title: 'Individualisation Over Generalisation',
    text: 'No two people experience anxiety, digestive problems, or chronic pain in exactly the same way. Care is therefore shaped around the unique individual—their symptoms, experiences, medical history, and emotional response.'
  },
  {
    tag: 'Principle 02',
    title: 'Understanding Beyond the Symptoms',
    text: 'Rather than looking at symptoms in isolation, we explore the wider patterns surrounding them—how daily pressures, relationship stress, and unresolved worry may show up in the body.'
  },
  {
    tag: 'Principle 03',
    title: 'Mind and Body as One Connected System',
    text: 'Anxiety and emotional strain can influence sleep, digestion, energy, muscular tension, and daily resilience. Understanding these connections helps shape more thoughtful, individualised care.'
  }
];

const supports = [
  {
    icon: Brain,
    title: 'Psychological Counselling',
    text: 'Structured support to explore emotional concerns, understand thought patterns, and develop healthy coping mechanisms in a safe, non-judgmental space.'
  },
  {
    icon: Sparkles,
    title: 'Yoga & Breathing Practices',
    text: 'Simple mind-body and breathwork practices that can complement homeopathic care and may help ease everyday stress.'
  },
  {
    icon: Activity,
    title: 'Lifestyle & Sleep Guidance',
    text: 'Practical, sustainable modifications around sleep hygiene, daily hydration, and nutrition habits that support everyday emotional and physical wellbeing.'
  }
];

export default function ClinicalPhilosophyPage() {
  return (
    <div className="clinical-philosophy-page">
      <Hero
        badge="Thought Leadership & Philosophy"
        title="Health Is More Than a Set of Symptoms"
        subtitle="Good care begins with understanding the person behind the symptoms. Considering experiences, emotional wellbeing, lifestyle, and individual patterns to develop thoughtful care."
        breadcrumbs={[
          { label: "About", path: "/about-me" },
          { label: "Clinical Philosophy" }
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Read About Integrated Healing"
        secondaryCtaLink="/my-approach/integrated-healing"
      />

      {/* Why Philosophy Matters */}
      <section className="section section-lg bg-surface">
        <div className="container">
          <div className="split-section ab-split">
            <div>
              <span className="badge ab-eyebrow">Foundational Thinking</span>
              <h2 className="ab-title">Why Philosophy Matters More Than a Prescription</h2>
              <p className="ab-lead">
                Health concerns—especially anxiety, chronic headaches, digestive issues, and sleep difficulties—do not look the same in every person. That is why care should never begin with a standard, rigid checklist.
              </p>
              <p className="ab-body">
                As a homeopathic physician with formal training in psychological counselling, Dr. Mohini takes time to understand what may be influencing your symptoms—from personal history and emotional experiences to everyday stress, work pressures, and overall lifestyle.
              </p>
              <p className="ab-body">
                This forms the foundation of integrated care: bringing together classical homeopathy, counselling dialogue, and practical lifestyle support where appropriate.
              </p>
            </div>

            <div className="ab-panel">
              <BrandMark className="ab-panel-mark" />
              <h3 className="ab-panel-title">The Whole-Person Equation</h3>
              <div className="ab-equation">
                {equation.map(({ icon: Icon, label }, idx) => (
                  <Fragment key={label}>
                    {idx > 0 && <div className="ab-eq-op" aria-hidden="true">+</div>}
                    <div className="ab-eq-item">
                      <span className="icon-tile"><Icon size={20} /></span>
                      <span>{label}</span>
                    </div>
                  </Fragment>
                ))}
                <div className="ab-eq-op" aria-hidden="true">↓</div>
                <div className="ab-eq-result">A More Complete Understanding of the Patient</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Core Principles */}
      <section className="section bg-dark">
        <div className="container">
          <SectionHeader
            badge="Three Core Principles"
            title="The Three Principles Behind Every Care Plan"
            subtitle="The clinical framework that guides every consultation and treatment plan."
            centered={true}
          />

          <div className="grid-3">
            {principles.map((p, idx) => (
              <div key={p.title} className="card ab-card">
                <span className="ab-num">0{idx + 1}</span>
                <span className="badge badge-mint ab-card-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where Classical Homeopathy Meets Modern Support */}
      <section className="section bg-sand">
        <div className="container">
          <SectionHeader
            badge="The Integrated Method"
            title="Where Classical Homeopathy Meets Modern Support"
            subtitle="Classical homeopathy can form one part of a broader approach to individualised care. Depending on your needs, your care may also include:"
            centered={true}
          />

          <div className="grid-3">
            {supports.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card ab-card">
                <span className="icon-tile"><Icon size={22} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <StatsStrip
        title="A Philosophy Shaped by Real Clinical Experience"
        subtitle="This approach has developed through more than a decade of clinical practice and conversations with thousands of patients."
      />

      {/* CTA */}
      <CTABanner
        badge="Start with Care That Understands You"
        title="Start With Care That Understands You"
        subtitle="Your experience deserves more than a checklist. Begin with a conversation and explore an approach shaped around your individual needs."
      />
    </div>
  );
}
