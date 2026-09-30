import React from 'react';
import Link from 'next/link';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import StatsStrip from '../components/StatsStrip';
import ConsultationProcess from '../components/ConsultationProcess';
import BrandMark from '../components/BrandMark';
import { siteConfig } from '../data/websiteContent';
import {
  HeartHandshake,
  Sparkles,
  ArrowRight,
  Compass,
  Mail,
  Calendar,
  CheckCircle2,
  Layers
} from 'lucide-react';
import '../styles/about.css';

// Source: Website Content PDF, "Page 4 – My Approach", Section 1
const overview = [
  {
    icon: HeartHandshake,
    title: 'Care that starts with understanding',
    text: 'I take time to understand your concerns, experiences and everyday life before discussing your care.',
    href: '/my-approach/consultation-process'
  },
  {
    icon: Compass,
    title: 'Understand the whole picture',
    text: 'I consider your physical, emotional and lifestyle concerns to understand what you may be experiencing.',
    href: '/clinical-philosophy'
  },
  {
    icon: Sparkles,
    title: 'Personalise your care',
    text: 'I combine my clinical experience with homeopathy, counselling and mind-body practices suited to your needs.',
    href: '/my-approach/personalised-treatment'
  }
];

// Sitemap brief p.17 – "Explain:" list
const approachPoints = [
  'Listening',
  "Understanding the individual's concerns",
  'Looking beyond isolated symptoms',
  'Considering emotional and lifestyle factors',
  'Developing a personalised approach',
  'Ongoing patient communication'
];

// Section 2 – statistics
const approachStats = [
  { number: '14+ years', label: 'Clinical experience shaped by diverse patient needs.' },
  { number: '12,000+ patients', label: 'Thousands of conversations that continue to shape my practice.' },
  { number: '3 countries', label: 'Online consultations with patients across India, UAE and USA.' }
];

const relatedLinks = [
  { href: '/my-approach/why-homeopathy', label: 'Why Homeopathy' },
  { href: '/my-approach/integrated-healing', label: 'Integrated Healing' },
  { href: '/my-approach/consultation-process', label: 'Consultation Process' },
  { href: '/my-approach/personalised-treatment', label: 'Personalised Treatment' }
];

// Section 3 – contact tiles
const tiles = [
  { icon: Mail, title: 'Message me', text: 'Share your concerns with me.', href: `mailto:${siteConfig.email}`, external: true },
  { icon: Calendar, title: 'Book a Consultation', text: 'Choose a convenient consultation time.', href: '/book-a-consultation' },
  { icon: Layers, title: 'Explore your options', text: 'Understand the care available to you.', href: '/my-approach/integrated-healing' }
];

export default function MyApproachPage() {
  return (
    <div className="my-approach-page">
      <Hero
        badge="My Approach"
        title="Every patient is different. So should their care be."
        subtitle="Care that starts with understanding"
        breadcrumbs={[
          { label: "About" },
          { label: "My Approach" }
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Consultation Process"
        secondaryCtaLink="/my-approach/consultation-process"
      />

      {/* Section 1 – overview cards */}
      <section className="section photo-band" style={{ '--band-img': "url('/images/photos/calm-woman-nature.webp')" }}>
        <div className="container">
          <div className="grid-3">
            {overview.map(({ icon: Icon, title, text, href }) => (
              <Link key={title} href={href} className="card card-link ab-card">
                <span className="icon-tile"><Icon size={24} aria-hidden="true" /></span>
                <h2 className="ab-card-title">{title}</h2>
                <p>{text}</p>
                <span className="link-arrow">
                  <span>Discover more</span>
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sitemap brief – what the approach includes */}
      <section className="section bg-sand">
        <div className="container">
          <div className="split-section ab-split">
            <div>
              <span className="badge ab-eyebrow">My Approach</span>
              <h2 className="ab-title">Listen. Understand. Personalise.</h2>
              <ul className="ab-check-list">
                {approachPoints.map((point) => (
                  <li key={point}>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ab-panel ab-panel-mint">
              <BrandMark className="ab-panel-mark" />
              <h3 className="ab-panel-title">Emergency situations</h3>
              <p className="ab-resp-text">
                Dr. Mohini Mutha does not provide emergency medical services through this website. If you are experiencing a medical emergency, severe symptoms or a situation requiring immediate attention, contact your local emergency medical service or visit the nearest emergency department.
              </p>
              <div className="ab-link-list">
                {relatedLinks.map((l) => (
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

      {/* Section 2 – experience / statistics */}
      <StatsStrip
        title="Care shaped by experience and listening"
        subtitle="My approach has evolved through 14+ years of practice and 12,000+ patient consultations."
        items={approachStats}
      />

      {/* 5-step process (locked, sitemap brief) */}
      <ConsultationProcess />

      {/* Section 3 – contact tiles */}
      <section className="section photo-band" style={{ '--band-img': "url('/images/photos/consultation-desk.webp')" }}>
        <div className="container">
          <SectionHeader
            badge="Get started"
            title="Start your journey towards better wellbeing."
            subtitle="Share what you're experiencing and take the first step with Dr. Mohini."
            centered={true}
          />

          <div className="grid-3 ab-tiles">
            {tiles.map(({ icon: Icon, title, text, href, external }) => {
              const content = (
                <>
                  <span className="icon-tile"><Icon size={22} aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="link-arrow">
                    <span>{title}</span>
                    <ArrowRight size={14} />
                  </span>
                </>
              );
              return external ? (
                <a key={title} href={href} className="card card-link ab-card">{content}</a>
              ) : (
                <Link key={title} href={href} className="card card-link ab-card">{content}</Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
