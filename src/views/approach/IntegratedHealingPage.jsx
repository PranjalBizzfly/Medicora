import React from 'react';
import '../../styles/approach.css';
import Hero from '../../components/Hero';
import SectionHeader from '../../components/SectionHeader';
import CTABanner from '../../components/CTABanner';
import BrandMark from '../../components/BrandMark';
import {
  Brain,
  Sparkles,
  Activity
} from 'lucide-react';

const pillars = [
  {
    icon: Sparkles,
    title: 'Homeopathic Care',
    text: 'Personalised homeopathic medicine formulated according to your individual constitutional portrait, physical symptoms, and health history.'
  },
  {
    icon: Brain,
    title: 'Psychological Counselling',
    text: 'A supportive, confidential space to unpack emotions, identify chronic stress triggers, and explore thought patterns affecting your physical wellbeing.'
  },
  {
    icon: Activity,
    title: 'Mind-Body Practices',
    text: 'Gentle breathing exercises, Bach flower emotional remedies, and restorative routines that support nervous system balance and everyday relaxation.'
  }
];

const steps = [
  {
    title: 'Understand:',
    text: 'Look at your concerns in the complete context of your health, experiences, and everyday life.'
  },
  {
    title: 'Connect:',
    text: 'Consider the relationship between physical symptoms, emotional states, sleep patterns, and lifestyle factors.'
  },
  {
    title: 'Personalise:',
    text: 'Bring the right combination of approaches together around your individual needs and ongoing feedback.'
  }
];

const quotes = [
  'I appreciated having space to discuss both my physical and emotional concerns.',
  'The approach felt personal and considered the different aspects of my wellbeing.',
  'I valued the combination of thoughtful consultation and practical guidance.'
];

export default function IntegratedHealingPage() {
  return (
    <div className="integrated-healing-page">
      <Hero
        badge="My Approach · Integration"
        title="Integrated Healing"
        subtitle="Looking at the person, not just the symptom. Bringing classical homeopathy, psychological counselling, and supportive mind-body practices into one thoughtful approach."
        breadcrumbs={[
          { label: "My Approach", path: "/my-approach" },
          { label: "Integrated Healing" }
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Consultation Process"
        secondaryCtaLink="/my-approach/consultation-process"
      />

      {/* 3 Pillars of Integrated Care */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeader
            badge="Care Modalities"
            title="Three Connected Elements of Integrated Care"
            subtitle="The focus is on integrated patient care, not claiming that one modality replaces another."
            centered={true}
          />

          <div className="grid-3">
            {pillars.map(({ icon: Icon, title, text }, i) => (
              <div className="card ap-card" key={title}>
                <div className="ap-card-top">
                  <span className="icon-tile"><Icon size={24} /></span>
                  <span className="ap-card-num">0{i + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connected Approach */}
      <section className="section bg-mint">
        <div className="container">
          <div className="split-section ap-split">
            <div className="ap-split-content">
              <span className="badge">Connected Care</span>
              <h2>A More Connected Approach to Wellbeing</h2>
              <p className="ap-lead">
                Different aspects of wellbeing constantly influence one another. Physical distress triggers emotional strain, and chronic mental worry manifests as physical tension, digestive unrest, or poor sleep. Integrated care brings these elements together.
              </p>

              <ol className="ap-points">
                {steps.map(({ title, text }, i) => (
                  <li className="ap-point" key={title}>
                    <span className="ap-point-icon ap-point-num">{i + 1}</span>
                    <div>
                      <strong>{title}</strong>
                      <p>{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="ap-panel">
              <BrandMark className="ap-panel-mark" />
              <div className="ap-panel-head">
                <span className="ap-panel-avatar"><BrandMark className="ap-panel-avatar-mark" /></span>
                <h3>Patient Perspectives</h3>
              </div>
              <div className="ap-quotes">
                {quotes.map((quote) => (
                  <div className="ap-quote" key={quote}>
                    <p>"{quote}"</p>
                    <span className="ap-quote-label">Patient experience</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        badge="Care That Brings Everything Together"
        title="Care That Brings Everything Together"
        subtitle="Consider an approach that brings together relevant aspects of your health, based on your individual needs."
      />
    </div>
  );
}
