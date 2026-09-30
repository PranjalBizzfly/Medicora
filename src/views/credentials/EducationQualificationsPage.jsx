import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../styles/credentials.css';
import Hero from '../../components/Hero';
import SectionHeader from '../../components/SectionHeader';
import ActionTilesCTA from '../resources/ActionTilesCTA';
import { defaultTiles } from '../resources/actionTiles';
import { GraduationCap, BookOpen, HeartHandshake, BadgeCheck, ArrowRight } from 'lucide-react';

// Source: Website Content PDF, Page 21 – Education & Qualifications (pp.144–145).
// Institution / university / year details verified from the certificates
// supplied in source-docs/Profile Summary (see docs-audit/AGENT_BRIEF.md).
const qualifications = [
  {
    icon: GraduationCap,
    title: 'BHMS',
    text: 'Bachelor of Homeopathic Medicine and Surgery, completed in 2012.',
    meta: [
      ['Institution', 'Motiwala Homoeopathic Medical College & Hospital, Nashik'],
      ['University', 'Maharashtra University of Health Sciences (MUHS), Nashik'],
      ['Year', '2012'],
    ],
    link: { label: 'Learn more', href: '/about-me' },
  },
  {
    icon: BookOpen,
    title: 'MD in Homeopathy',
    text: 'Postgraduate specialisation in Homeopathic Materia Medica, completed in 2016.',
    meta: [
      ['Institution', "SNJB's Bhamashah Shri V. D. Mehata, Dev-Vijay (Pune) Post Graduate Institute of Homoeopathy & Research Centre, Chandwad"],
      ['University', 'Maharashtra University of Health Sciences (MUHS), Nashik'],
      ['Year', '2016'],
    ],
    link: { label: 'Discover more', href: '/my-approach/why-homeopathy' },
  },
  {
    icon: HeartHandshake,
    title: 'Psychological Counselling',
    text: 'Post Graduate Diploma in Psychological Counselling, adding another perspective to patient care.',
    meta: [['Qualification', 'PGDPC']],
    link: { label: 'Discover more', href: '/expertise/mental-emotional-psychosomatic-wellness' },
  },
];

const learning = [
  { title: 'Clinical foundation', text: 'BHMS provided the foundation for my clinical practice in homeopathy.' },
  { title: 'Specialised knowledge', text: 'MD in Homeopathy strengthened my understanding of Homeopathic Materia Medica.' },
  { title: 'Broader perspective', text: 'PGDPC added training in psychological counselling and emotional wellbeing.' },
];

export default function EducationQualificationsPage() {
  return (
    <div className="education-qualifications-page">
      <Hero
        badge="Credentials"
        title="Education & Qualifications"
        subtitle="Qualifications that support thoughtful patient care"
        breadcrumbs={[
          { label: 'Credentials' },
          { label: 'Education & Qualifications' },
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Professional Experience"
        secondaryCtaLink="/credentials/professional-experience"
      />

      <section className="section bg-sand">
        <div className="container">
          <div className="grid-3">
            {qualifications.map(({ icon: Icon, title, text, meta, link }) => (
              <div className="card cr-card" key={title}>
                <div className="cr-card-top">
                  <span className="icon-tile"><Icon size={22} aria-hidden="true" /></span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul className="cr-credential-meta">
                  {meta.map(([k, v]) => (
                    <li key={k}><strong>{k}:</strong> {v}</li>
                  ))}
                </ul>
                <Link href={link.href} className="link-arrow cr-card-footer">
                  <span>{link.label}</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>

          <div className="cr-panel rs-section-gap">
            <div style={{ marginBottom: '1.5rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <Image
                src="/images/credentials/education-materia-medica.webp"
                alt="An open Materia Medica notebook, fountain pen and remedy bottles on a library desk"
                width={900}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>
            <h3>Registration</h3>
            <p className="cr-registration">
              <BadgeCheck size={18} aria-hidden="true" />
              <span>Registered with the Maharashtra Council of Homoeopathy, Mumbai (2012).</span>
            </p>
          </div>
        </div>
      </section>

      <section className="section photo-band" style={{ '--band-img': "url('/images/photos/homeopathy-remedies-desk.webp')" }}>
        <div className="container">
          <SectionHeader
            badge="Education"
            title="Learning that continues beyond qualification"
            subtitle="My education has given me different perspectives to understand health, symptoms and the individual behind them."
            centered={true}
          />
          <div className="grid-3">
            {learning.map((l, i) => (
              <div className="card cr-card" key={l.title}>
                <div className="cr-card-top">
                  <span className="cr-card-num" aria-hidden="true">0{i + 1}</span>
                </div>
                <h3>{l.title}</h3>
                <p>{l.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ActionTilesCTA
        title="Knowledge with a human perspective"
        subtitle="Qualifications provide the foundation. Listening, experience and understanding shape how that knowledge is used in practice."
        tiles={defaultTiles({ message: 'Share your questions.', chat: 'Discuss your concerns.' })}
      />
    </div>
  );
}
