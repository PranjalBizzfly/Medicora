import React from 'react';
import Link from 'next/link';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import StatsStrip from '../components/StatsStrip';
import CTABanner from '../components/CTABanner';
import BrandMark from '../components/BrandMark';
import {
  HeartHandshake,
  Building2,
  ArrowRight,
  Sparkles,
  Users,
  Compass,
  MapPin,
  Globe
} from 'lucide-react';
import '../styles/about.css';

const values = [
  {
    icon: HeartHandshake,
    title: 'Patient First',
    text: 'Every consultation begins with listening and understanding the individual. Giving patients enough space to explain what they feel.'
  },
  {
    icon: Compass,
    title: 'Thoughtful Clinical Perspective',
    text: 'Dr. Mohini considers relevant patterns, contributing stressors, and constitutional factors before discussing the way forward.'
  },
  {
    icon: Sparkles,
    title: 'Continuous Learning',
    text: 'Clinical experience is strengthened by staying curious, learning, and expanding perspectives across homeopathy and psychology.'
  }
];

const community = [
  {
    icon: Users,
    title: 'Free Medical Camps',
    text: 'Conducted and participated in free medical camps offering homeopathic consultations and health guidance to the community.'
  },
  {
    icon: Building2,
    title: 'Health Awareness Drives',
    text: 'Educational sessions focusing on understanding emotional wellbeing, recognizing stress early, and holistic lifestyle routines.'
  },
  {
    icon: HeartHandshake,
    title: 'Ongoing Commitment',
    text: 'A continued effort to make quality healthcare, emotional awareness, and compassionate medical care accessible to all.'
  }
];

export default function AboutMePage() {
  return (
    <div className="about-me-page">
      <Hero
        badge="About Dr. Mohini"
        title="Meet Dr. Mohini Mutha"
        subtitle="With 14+ years of clinical experience and 12,000+ patients consulted, Dr. Mohini Mutha combines homeopathy, counselling and a personalised understanding of every patient."
        breadcrumbs={[
          { label: "About", path: "/about-me" },
          { label: "About Me" }
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Her Professional Journey"
        secondaryCtaLink="/my-journey"
        sideCard={
          <div>
            <div className="ab-profile-head">
              <span className="ab-avatar" aria-hidden="true">
                <BrandMark className="ab-avatar-mark" />
              </span>
              <div>
                <h3 className="ab-profile-name">Dr. Mohini Mutha</h3>
                <span className="ab-profile-cred">MD (Homeopathy) · PGDPC</span>
              </div>
            </div>
            <p className="ab-profile-text">
              Consultant Homoeopathic Physician with ONGC (since 2018) & Founder of Trivana Wellness digital practice.
            </p>
            <ul className="ab-profile-meta">
              <li><MapPin size={15} /><span>Kopar Khairne, Navi Mumbai</span></li>
              <li><Globe size={15} /><span>Online: India · UAE · USA</span></li>
            </ul>
          </div>
        }
      />

      {/* Stats Strip */}
      <StatsStrip
        title="Experience You Can Count On"
        subtitle="Since beginning her clinical practice in 2012, Dr. Mohini has worked with patients across a wide range of health concerns, building her practice around careful listening, individualised care and continuous learning."
      />

      {/* Story & Who I Am */}
      <section className="section section-lg bg-surface">
        <div className="container">
          <div className="split-section ab-split">
            <div>
              <span className="badge ab-eyebrow">Her Story</span>
              <h2 className="ab-title">A Doctor Who Believes Every Patient Deserves to Be Heard</h2>
              <p className="ab-lead">
                Dr. Mohini is a Homeopathic Physician with more than a decade of clinical experience. She completed her BHMS and MD in Homeopathy, specialising in Homeopathic Materia Medica, and has been actively practising since 2012.
              </p>
              <p className="ab-body">
                Her professional journey has taken her through clinical practice, reputed healthcare settings and institutional healthcare. Since 2018, she has also served as a Consultant Homoeopathic Physician with ONGC, adding around eight years of experience within a structured healthcare environment.
              </p>
              <p className="ab-body">
                Recognising how often physical complaints trace back to unspoken stress, emotional overload, or life pressure, Dr. Mohini pursued a Post Graduate Diploma in Psychological Counselling (PGDPC). This dual training enables her to consider both the physical symptoms and emotional landscape of each individual.
              </p>

              <div className="ab-actions">
                <Link href="/clinical-philosophy" className="btn btn-secondary">
                  <span>Read Clinical Philosophy</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="ab-panel">
              <BrandMark className="ab-panel-mark" />
              <h3 className="ab-panel-title">Core Values & Approach</h3>
              <ul className="ab-value-list">
                {values.map(({ icon: Icon, title, text }) => (
                  <li key={title}>
                    <span className="icon-tile"><Icon size={22} /></span>
                    <div>
                      <h4>{title}</h4>
                      <p>{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Work */}
      <section className="section bg-sand">
        <div className="container">
          <SectionHeader
            badge="Community & Social Contribution"
            title="Care That Reaches Beyond the Consultation Room"
            subtitle="Participating in free homeopathic medical camps and health awareness initiatives."
            centered={true}
          />

          <div className="grid-3">
            {community.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card ab-card">
                <span className="icon-tile"><Icon size={22} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        badge="Start with Care That Understands You"
        title="Your Health Deserves More Than a Rushed Conversation"
        subtitle="Whether you're looking for support with anxiety and emotional well-being or another health concern, the first step can simply be a conversation."
      />
    </div>
  );
}
