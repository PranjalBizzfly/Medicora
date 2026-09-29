import React from 'react';
import '../../styles/approach.css';
import Hero from '../../components/Hero';
import SectionHeader from '../../components/SectionHeader';
import CTABanner from '../../components/CTABanner';
import BrandMark from '../../components/BrandMark';
import { CheckCircle } from 'lucide-react';

const stages = [
  {
    num: '01',
    title: 'Understand Your Needs',
    text: 'Your symptoms, health history, lifestyle rhythms, and lived experiences help create a comprehensive and accurate picture of your concerns.'
  },
  {
    num: '02',
    title: 'Create Your Approach',
    text: 'Your care is shaped around your individual priorities—combining constitutional homeopathy, counselling insights, and practical lifestyle habits.'
  },
  {
    num: '03',
    title: 'Review as You Progress',
    text: 'Your personal experience and physiological response to care help guide ongoing dialogue, follow-ups, and adaptive changes to remedies.'
  }
];

const principles = [
  { title: 'Listen:', text: 'Understand your concerns and unique story before discussing the way forward.' },
  { title: 'Consider:', text: 'Look at your physical health, lifestyle habits, and emotional circumstances together.' },
  { title: 'Adapt:', text: 'Keep your care responsive to your evolving needs and experiences over time.' }
];

const quotes = [
  'I appreciated how carefully my individual concerns were understood during the consultation.',
  'The approach felt personal and focused on what I was actually experiencing.',
  'I felt listened to rather than being given a one-size-fits-all approach.'
];

export default function PersonalisedTreatmentPage() {
  return (
    <div className="personalised-treatment-page">
      <Hero
        badge="My Approach · Personalised Care"
        title="Your Health Story Is Unique. Your Care Should Be Too."
        subtitle="An individualised approach that considers your health history, presenting symptoms, lifestyle, and personal needs to shape your care."
        breadcrumbs={[
          { label: "My Approach", path: "/my-approach" },
          { label: "Personalised Treatment" }
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Integrated Healing"
        secondaryCtaLink="/my-approach/integrated-healing"
      />

      {/* 3 Core Stages */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeader
            badge="Three Stages of Personalisation"
            title="How Your Individual Care Plan Is Formulated"
            subtitle="Care that is responsive, respectful of your routine, and tailored to you."
            centered={true}
          />

          <div className="grid-3">
            {stages.map(({ num, title, text }) => (
              <div className="card ap-card" key={title}>
                <div className="ap-card-top">
                  <span className="badge badge-mint">Stage {num}</span>
                  <span className="ap-card-num">{num}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Listen, Consider, Adapt */}
      <section className="section bg-sand">
        <div className="container">
          <div className="split-section ap-split">
            <div className="ap-split-content">
              <span className="badge">Patient-Centred Focus</span>
              <h2>Care That Is Truly Personal to You</h2>
              <p className="ap-lead">
                No two people experience health in exactly the same way. Understanding your symptoms, health history, lifestyle, and individual needs provides a broader context for your care.
              </p>

              <ul className="ap-points">
                {principles.map(({ title, text }) => (
                  <li className="ap-point" key={title}>
                    <span className="ap-point-icon"><CheckCircle size={18} /></span>
                    <div>
                      <strong>{title}</strong>
                      <p>{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ap-panel">
              <BrandMark className="ap-panel-mark" />
              <div className="ap-panel-head">
                <span className="ap-panel-avatar"><BrandMark className="ap-panel-avatar-mark" /></span>
                <h3>What Patients Appreciate</h3>
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
        badge="Your Care Should Feel Personal"
        title="Your Care Should Feel Personal"
        subtitle="Understanding your health is the first step. Explore your care options and choose the approach that feels right for your needs."
      />
    </div>
  );
}
