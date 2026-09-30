import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../styles/credentials.css';
import Hero from '../../components/Hero';
import SectionHeader from '../../components/SectionHeader';
import ActionTilesCTA from '../resources/ActionTilesCTA';
import { defaultTiles } from '../resources/actionTiles';
import { Users, CalendarCheck, Building2, ArrowRight } from 'lucide-react';

// Source: Website Content PDF, Page 22 – Achievements (pp.145–146).
// Sitemap brief: only verified achievements; no fabricated awards.
const keyMilestones = [
  {
    icon: Users,
    title: '12,000+ patients',
    text: 'More than 12,000 patient consultations since beginning clinical practice in 2012.',
    link: { label: 'Discover more', href: '/resources/patient-stories' },
  },
  {
    icon: CalendarCheck,
    title: '14+ years of practice',
    text: 'More than a decade of clinical experience across diverse health concerns.',
    link: { label: 'Connect with Dr. Mohini', href: '/book-a-consultation' },
  },
  {
    icon: Building2,
    title: 'Consultant at ONGC',
    text: 'Serving as a Consultant Homoeopathic Physician with ONGC since 2018.',
    link: { label: 'Discover more', href: '/credentials/professional-experience' },
  },
];

const milestones = [
  { title: 'Clinical journey', text: 'Practising homeopathy and caring for patients since 2012.' },
  { title: 'Professional contribution', text: 'Bringing clinical experience to institutional healthcare through ONGC.' },
  { title: 'Community outreach', text: 'Participating in free homeopathic medical camps focused on health awareness.' },
];

const campPhotos = [
  {
    src: '/images/camp/medical-camp-1.webp',
    width: 1280,
    height: 640,
    alt: 'Women seated under a tent while a camp worker records patient details in Navi Mumbai',
    caption: 'Free homeopathic medical camp, Navi Mumbai.',
  },
  {
    src: '/images/camp/medical-camp-3.webp',
    width: 1280,
    height: 640,
    alt: 'Patients lined up on red chairs outside the camp consultation area in Navi Mumbai',
    caption: 'Health awareness at a free homeopathic medical camp in Navi Mumbai.',
  },
];

export default function AchievementsPage() {
  return (
    <div className="achievements-page">
      <Hero
        badge="Credentials"
        title="Achievements"
        subtitle="Milestones built through practice and dedication"
        breadcrumbs={[
          { label: 'Credentials' },
          { label: 'Achievements' },
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Education & Qualifications"
        secondaryCtaLink="/credentials/education-qualifications"
      />

      <section className="section bg-surface">
        <div className="container">
          <div className="grid-3">
            {keyMilestones.map(({ icon: Icon, title, text, link }) => (
              <div className="card cr-card" key={title}>
                <div className="cr-card-top">
                  <span className="icon-tile"><Icon size={22} aria-hidden="true" /></span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link href={link.href} className="link-arrow cr-card-footer">
                  <span>{link.label}</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section photo-band" style={{ '--band-img': "url('/images/photos/couple-consultation.webp')" }}>
        <div className="container">
          <SectionHeader
            badge="Milestones"
            title="More than numbers, meaningful milestones"
            subtitle="Each milestone reflects years of learning, patient conversations and commitment to thoughtful care."
            centered={true}
          />
          <div className="grid-3">
            {milestones.map((m, i) => (
              <div className="card cr-card" key={m.title}>
                <div className="cr-card-top">
                  <span className="cr-card-num" aria-hidden="true">0{i + 1}</span>
                </div>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <SectionHeader
            badge="Community outreach"
            title="Free homeopathic medical camps"
            subtitle="Participating in free homeopathic medical camps focused on health awareness."
            centered={true}
          />
          <div className="cr-gallery">
            {campPhotos.map((p) => (
              <figure key={p.src} className={p.tall ? 'cr-gallery-tall' : undefined}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={p.width}
                  height={p.height}
                  sizes="(max-width: 760px) 100vw, (max-width: 1200px) 66vw, 800px"
                />
                <figcaption>{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <ActionTilesCTA
        title="A journey that continues to grow"
        subtitle="Every patient, experience and opportunity to learn has contributed to the doctor I am today."
        tiles={defaultTiles({ message: 'Share your questions.', chat: 'Discuss your concerns.' })}
      />
    </div>
  );
}
