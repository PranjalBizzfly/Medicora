import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import StatsStrip from '../components/StatsStrip';
import CTABanner from '../components/CTABanner';
import {
  HeartHandshake,
  ArrowRight,
  Sparkles,
  Compass,
  MapPin,
  Globe,
  GraduationCap
} from 'lucide-react';
import '../styles/about.css';

// Source: Website Content PDF, "Page 2 – About Me", Section 4
const values = [
  {
    icon: HeartHandshake,
    title: 'Patient first',
    text: 'Every consultation begins with listening and understanding the individual.'
  },
  {
    icon: Compass,
    title: 'Thoughtful clinical perspective',
    text: 'Dr. Mohini considers relevant patterns and contributing factors before discussing the way forward.'
  },
  {
    icon: Sparkles,
    title: 'Continuous learning',
    text: 'Clinical experience is strengthened by staying curious, learning and understanding patients better.'
  }
];

// Source: "Page 2 – About Me", Section 5 (My journey)
const journey = [
  {
    year: '2012',
    title: 'Beginning of clinical practice',
    text: 'Started practising homeopathy and working directly with patients across a broad range of health concerns.'
  },
  {
    year: 'MD in Homeopathy',
    title: 'Deepening clinical knowledge',
    text: 'Completed MD in Homeopathy with specialisation in Homeopathic Materia Medica, strengthening her academic and clinical foundation.'
  },
  {
    year: 'Psychological Counselling',
    title: 'Understanding the emotional side of health',
    text: 'Completed Post Graduate Diploma in Psychological Counselling, developing deeper understanding of emotional and psychological concerns.'
  },
  {
    year: '2018',
    title: 'Joined ONGC',
    text: 'Began working as a Consultant Homoeopathic Physician with ONGC, continuing in this role for approximately eight years.'
  },
  {
    year: 'Today',
    title: 'Continuing the journey',
    text: 'With more than 12,000 patients consulted, Dr. Mohini continues to provide personalised care to patients in India and internationally, including the UAE and USA.'
  }
];

const campPhotos = [
  { src: '/images/camp/medical-camp-2.webp', alt: 'Dr. Mohini Mutha consulting a patient at a free Navratri medical camp' },
  { src: '/images/camp/medical-camp-3.webp', alt: 'Residents seated on red chairs, waiting for consultations at a free camp in Navi Mumbai' },
  { src: '/images/camp/medical-camp-1.webp', alt: 'A patient being attended to at the camp desk under a white tent in Navi Mumbai' },
];

export default function AboutMePage() {
  return (
    <div className="about-me-page">
      <Hero
        badge="About Me"
        title="Clinical experience with a personal approach"
        subtitle="With 14+ years of clinical experience and 12,000+ patients consulted, Dr. Mohini Mutha combines homeopathy, counselling and a personalised understanding of every patient."
        breadcrumbs={[
          { label: "About" },
          { label: "About Me" }
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Learn more about Dr. Mohini"
        secondaryCtaLink="/my-journey"
      />

      {/* Section 2 – Intro: text beside photo */}
      <section className="section tv-intro">
        <div className="container tv-split">
          <div>
            <span className="badge">Experience you can count on</span>
            <h2 className="tv-title">More than a decade dedicated to understanding people and their health</h2>
            <p className="tv-lead">
              Since beginning her clinical practice in 2012, Dr. Mohini has worked with patients across a wide range of health concerns, building her practice around careful listening, individualised care and continuous learning.
            </p>
          </div>
          <div className="tv-photo">
            <Image
              src="/images/about/doctor-patient-listening.webp"
              alt="A doctor gently holding an older patient's hand while listening to her"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Statistics */}
      <StatsStrip title={null} />

      {/* Section 3b – Values on a photo band */}
      <section className="section tv-photo-band">
        <Image src="/images/photos/mind-body-nature.webp" alt="A man meditating on a rock by a forest stream in soft morning light" fill sizes="100vw" className="tv-photo-band-bg" />
        <div className="tv-photo-band-overlay" aria-hidden="true" />
        <div className="container tv-photo-band-inner">
          <SectionHeader badge="My approach" badgeType="dark" title="Listen carefully. Understand deeply. Care personally." centered={true} />
          <div className="tv-glass-grid">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="tv-glass-card">
                <span className="tv-glass-icon"><Icon size={22} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 – Approach narrative as cards */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeader badge="My approach" title="Good healthcare begins with care and understanding" centered={true} />
          <div className="tv-card-grid tv-card-grid-3">
            <div className="tv-card">
              <p>Dr. Mohini believes that a consultation should give patients enough space to explain not only what they are feeling, but also what may be happening around those symptoms.</p>
            </div>
            <div className="tv-card">
              <p>Her approach considers an individual&apos;s health history, symptoms, emotional patterns, lifestyle and everyday circumstances before discussing an appropriate care plan.</p>
            </div>
            <div className="tv-card">
              <p>This philosophy is important when working with anxiety and emotional concerns, where people may often hesitate to speak openly or may have lived with their symptoms for a long time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 – Who I am (founder layout) */}
      <section className="section tv-founder" id="who-i-am">
        <div className="container tv-founder-grid">
          <div>
            <div className="tv-portrait">
              <Image
                src="/images/doctor/dr-mohini-portfolio.webp"
                alt="Dr. Mohini Mutha, homeopathic physician, holding a folder in her clinic coat"
                fill
                quality={85}
                sizes="(max-width: 900px) 100vw, 40vw"
                style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
              />
            </div>
            <blockquote className="tv-quote">
              <p>&ldquo;A doctor who believes every patient deserves to be heard&rdquo;</p>
              <cite>Dr. Mohini Mutha · Homeopathic Physician · MD (Homeopathy) · PGDPC</cite>
            </blockquote>
            <div className="tv-profile-card">
              <p>Consultant Homoeopathic Physician with ONGC since 2018 · Founder, Trivana Wellness</p>
              <ul>
                <li><MapPin size={15} aria-hidden="true" /><span>Dr. Mutha&apos;s Homeopathic Clinic, Kopar Khairne, Navi Mumbai</span></li>
                <li><Globe size={15} aria-hidden="true" /><span>Online &amp; In-Person Consultations</span></li>
              </ul>
            </div>
          </div>

          <div>
            <span className="badge">Who I am</span>
            <h2 className="tv-title">Dr. Mohini Mutha</h2>
            <p className="tv-subhead">Homeopathic Physician · MD (Homeopathy) · PGDPC</p>
            <p className="tv-body">
              Dr. Mohini Mutha is a Homeopathic Physician with more than a decade of clinical experience. She completed her BHMS and MD in Homeopathy, specialising in Homeopathic Materia Medica, and has been practising since 2012.
            </p>
            <p className="tv-body">
              Her professional journey has taken her through clinical practice, reputed healthcare settings and institutional healthcare. Since 2018, she has also served as a Consultant Homoeopathic Physician with ONGC, adding around eight years of experience within a structured healthcare environment.
            </p>
            <div className="ab-credentials-line">
              <GraduationCap size={20} aria-hidden="true" />
              <p>
                <strong>BHMS</strong>: Motiwala Homoeopathic Medical College &amp; Hospital, Nashik (MUHS), completed in 2012 ·{' '}
                <strong>MD in Homoeopathy (Homoeopathic Materia Medica)</strong>: SNJB&apos;s Bhamashah Shri V. D. Mehata, Dev-Vijay (Pune) Post Graduate Institute of Homoeopathy &amp; Research Centre, Chandwad (MUHS), completed in 2016 ·{' '}
                <strong>PGDPC</strong>: Post Graduate Diploma in Psychological Counselling ·{' '}
                <Link href="/credentials/education-qualifications">Education &amp; Qualifications</Link>
              </p>
            </div>
            <div className="tv-actions">
              <Link href="/my-journey" className="btn btn-primary">
                <span>Meet Dr. Mohini</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 – My journey as step cards */}
      <section className="section photo-band" style={{ '--band-img': "url('/images/photos/senior-patient-examination.webp')" }}>
        <div className="container">
          <SectionHeader badge="My journey" title="Growing through every stage of practice" centered={true} />
          <div className="tv-card-grid tv-card-grid-3">
            {journey.map((evt) => (
              <div key={evt.title} className="tv-card">
                <span className="tv-card-tag">{evt.year}</span>
                <h3>{evt.title}</h3>
                <p>{evt.text}</p>
              </div>
            ))}
          </div>
          <div className="tv-center">
            <Link href="/my-journey" className="btn btn-secondary">
              <span>My Journey</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6 – More than qualifications + community camps (photo cards) */}
      <section className="section bg-sand">
        <div className="container">
          <SectionHeader badge="More than qualifications" title="Experience built through patients, practice and perspective" centered={true} />
          <div className="tv-text-block">
            <p>
              Over the years, Dr. Mohini has worked across different areas of healthcare, including general health and wellness, respiratory concerns, headaches and migraines, digestive health, skin and allergies, women&apos;s wellness, child and adolescent wellness, joint and muscle concerns, sleep and lifestyle issues, as well as mental, emotional and psychosomatic wellness.
            </p>
            <p>
              Her growing focus on anxiety and emotional wellbeing comes from recognising how frequently these concerns remain unspoken or overlooked.
            </p>
            <p>
              She has also conducted and participated in free homeopathic medical camps in Navi Mumbai, with an emphasis on health awareness and encouraging conversations around emotional wellbeing.
            </p>
          </div>
          <p className="tv-photo-cards-title">Free Homeopathic Medical Camp, Navi Mumbai</p>
          <div className="tv-photo-cards">
            {campPhotos.map((photo) => (
              <figure key={photo.src} className="tv-photo-card">
                <div className="tv-photo-card-media">
                  <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 – Final CTA */}
      <CTABanner
        badge="Take a step towards better wellbeing"
        title="Your health deserves more than a rushed conversation"
        subtitle="Whether you're looking for support with anxiety and emotional wellbeing or another health concern, the first step can simply be a conversation. Connect with Dr. Mohini for a personalised online consultation from wherever you are."
      />
    </div>
  );
}
