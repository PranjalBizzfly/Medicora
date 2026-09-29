import React from 'react';
import Link from 'next/link';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import StatsStrip from '../components/StatsStrip';
import ConsultationProcess from '../components/ConsultationProcess';
import CTABanner from '../components/CTABanner';
import BrandMark from '../components/BrandMark';
import {
  HeartHandshake,
  Sparkles,
  ArrowRight,
  Compass
} from 'lucide-react';
import '../styles/about.css';

const pillars = [
  {
    icon: HeartHandshake,
    tag: 'Pillar 01',
    title: 'Care That Starts with Understanding',
    text: 'I take time to understand your concerns, daily experiences, and routine before discussing your care plan. Every consultation provides space to speak openly without feeling rushed.'
  },
  {
    icon: Compass,
    tag: 'Pillar 02',
    title: 'Understand the Whole Picture',
    text: 'I consider physical symptoms alongside emotional patterns, stress triggers, sleep quality, and lifestyle circumstances to understand what you may be truly experiencing.'
  },
  {
    icon: Sparkles,
    tag: 'Pillar 03',
    title: 'Personalise Your Care',
    text: 'I combine my clinical experience in classical homeopathy with psychological counselling and supportive mind-body practices (such as Bach flower remedies and breathing exercises) suited to your needs.'
  }
];

const steps = [
  {
    title: 'Listening Without Hurrying:',
    text: 'Giving you the time and psychological safety to articulate symptoms and emotional background clearly.'
  },
  {
    title: 'Looking Beyond Isolated Symptoms:',
    text: 'Connecting bodily symptoms with daily stress, emotional patterns, digestion, and sleep routines.'
  },
  {
    title: 'Developing a Personalised Care Roadmap:',
    text: 'Crafting a tailored plan combining homeopathic constitutional remedies, counselling guidance, and practical habits.'
  },
  {
    title: 'Ongoing Patient Communication:',
    text: 'Regular check-ins and responsive follow-ups to adapt remedies as your health and lifestyle evolve.'
  }
];

const links = [
  { href: '/my-approach/why-homeopathy', label: 'Why Homeopathy?' },
  { href: '/my-approach/integrated-healing', label: 'Integrated Healing Explained' },
  { href: '/my-approach/consultation-process', label: 'Step-by-Step Consultation Flow' }
];

export default function MyApproachPage() {
  return (
    <div className="my-approach-page">
      <Hero
        badge="Care Philosophy"
        title="Every Patient Is Different. So Should Their Care Be."
        subtitle="I take time to understand your concerns, experiences, and everyday life before discussing your care. Good healthcare begins with genuine listening and personal understanding."
        breadcrumbs={[
          { label: "About", path: "/about-me" },
          { label: "My Approach" }
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Consultation Process"
        secondaryCtaLink="/my-approach/consultation-process"
      />

      {/* 3 Core Approach Pillars */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeader
            badge="Three Pillars of Care"
            title="A Thoughtful Approach to Your Health & Wellbeing"
            subtitle="Health is rarely isolated to one symptom. We look at the physical, emotional, and lifestyle context together."
            centered={true}
          />

          <div className="grid-3">
            {pillars.map(({ icon: Icon, tag, title, text }) => (
              <div key={title} className="card ab-card">
                <span className="icon-tile"><Icon size={24} /></span>
                <span className="badge badge-mint ab-card-tag">{tag}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Strip */}
      <StatsStrip
        title="Care Shaped by Experience and Listening"
        subtitle="My approach has evolved through 14+ years of clinical practice and more than 12,000 patient consultations across India, the UAE, and the USA."
      />

      {/* Detailed Approach Components */}
      <section className="section section-lg bg-surface">
        <div className="container">
          <div className="split-section ab-split">
            <div>
              <span className="badge ab-eyebrow">Patient-First Methodology</span>
              <h2 className="ab-title">What Happens When You Consult With Dr. Mohini</h2>
              <ol className="ab-steps">
                {steps.map((step, idx) => (
                  <li key={step.title}>
                    <span className="ab-step-num" aria-hidden="true">0{idx + 1}</span>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="ab-panel ab-panel-mint">
              <BrandMark className="ab-panel-mark" />
              <h3 className="ab-panel-title">Medical Responsibility Statement</h3>
              <p className="ab-resp-text">
                We believe in ethical, evidence-conscious, and responsible healthcare. We do not make unsupported claims that homeopathy treats all conditions or replaces necessary conventional medicine.
              </p>
              <div className="medical-disclaimer-box ab-resp-box">
                <p>
                  "Good healthcare begins with honesty, clear communication, and respecting the patient's comprehensive health context."
                </p>
              </div>

              <div className="ab-link-list">
                {links.map((l) => (
                  <Link key={l.href} href={l.href} className="btn btn-white btn-sm">
                    <span>{l.label}</span>
                    <ArrowRight size={14} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <ConsultationProcess />

      {/* CTA */}
      <CTABanner
        badge="Start Your Journey"
        title="Start Your Journey Towards Better Wellbeing"
        subtitle="Share what you're experiencing and take the first step with Dr. Mohini through an online or in-person consultation."
      />
    </div>
  );
}
