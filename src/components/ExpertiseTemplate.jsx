import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Hero from './Hero';
import SectionHeader from './SectionHeader';
import FAQAccordion from './FAQAccordion';
import TestimonialCard from './TestimonialCard';
import BrandMark from './BrandMark';
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Ear,
  HeartHandshake,
  Mail,
  MessageCircle,
  Search,
  ShieldAlert,
  Sparkles,
  Stethoscope,
  UserRound,
  ListChecks
} from 'lucide-react';
import { expertiseSpecialties, siteConfig } from '../data/websiteContent';
import '../styles/expertise.css';

const approachIcons = [Ear, Search, Sparkles];

const WHATSAPP_URL = 'https://wa.me/919423972150';

// Resolve a CTA tile (source: "Message me / Chat with me / Book a consultation" or page variant).
function tileTarget(tile) {
  switch (tile.type) {
    case 'message':
      return { href: `mailto:${siteConfig.email}`, external: true, Icon: Mail };
    case 'chat':
      return { href: WHATSAPP_URL, external: true, Icon: MessageCircle };
    case 'book':
      return { href: '/book-a-consultation', external: false, Icon: Calendar };
    default:
      return { href: tile.href, external: false, Icon: tile.href === '/about-me' ? UserRound : ArrowRight };
  }
}

function CareAreaLink({ href, children }) {
  if (href.startsWith('#')) {
    return <a href={href} className="link-arrow">{children}</a>;
  }
  return <Link href={href} className="link-arrow">{children}</Link>;
}

const EXPERTISE_HERO_IMAGES = {
  'mental-emotional-psychosomatic-wellness': {
    src: '/images/photos/anxiety-consultation.jpg',
    alt: 'A patient sharing emotional concerns during a consultation',
  },
  'sleep-lifestyle-concerns': {
    src: '/images/photos/sleep-evening-routine.jpg',
    alt: 'A calm evening routine before sleep',
  },
  'headache-migraine-care': {
    src: '/images/photos/doctor-male-patient.jpg',
    alt: 'Dr. Mohini Mutha in consultation with a patient',
  },
  'respiratory-health': {
    src: '/images/photos/mind-body-nature.jpg',
    alt: 'Breathing calmly outdoors in fresh air',
  },
  'skin-hair-allergies': {
    src: '/images/photos/patient-conversation.jpg',
    alt: 'A patient discussing her concerns with Dr. Mohini Mutha',
  },
  'womens-wellness': {
    src: '/images/photos/womens-wellness-consultation.png',
    alt: 'Dr. Mohini Mutha in consultation with a woman patient',
  },
  'child-adolescent-wellness': {
    src: '/images/photos/active-child-outdoors.jpg',
    alt: 'A healthy, active child playing outdoors',
  },
  'general-health-wellness': {
    src: '/images/photos/senior-patient-examination.jpg',
    alt: 'Dr. Mohini Mutha examining an elderly patient',
  },
  'digestive-gut-health': {
    src: '/images/photos/healthy-eating.jpg',
    alt: 'A balanced, wholesome meal at home',
  },
  'joint-muscle-pain-management': {
    src: '/images/photos/shoulder-pain-home.jpg',
    alt: 'Shoulder discomfort affecting everyday comfort',
  },
};

export default function ExpertiseTemplate({ id, badge = 'Area of Expertise' }) {
  const page = expertiseSpecialties.find((item) => item.id === id);
  if (!page) return null;

  const { title, tagline, shortDesc, careAreas, concerns, approach, testimonials, faqs, relatedPages, cta, mentalHealthNote } = page;

  return (
    <div className="expertise-page">
      {/* 1. Hero — source: Content PDF expertise Section 1 */}
      <Hero
        badge={badge}
        title={title}
        subtitle={tagline}
        breadcrumbs={[
          { label: 'Expertise', path: '/sitemap' },
          { label: title }
        ]}
        primaryCtaText="Book a consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Consultation process"
        secondaryCtaLink="/my-approach/consultation-process"
        sideCard={
          <div className="expertise-hero-card">
            {EXPERTISE_HERO_IMAGES[id] && (
              <div style={{ marginBottom: '1.25rem', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                <Image
                  src={EXPERTISE_HERO_IMAGES[id].src}
                  alt={EXPERTISE_HERO_IMAGES[id].alt}
                  width={600}
                  height={400}
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </div>
            )}
            <span className="badge badge-mint">Areas of Care</span>
            <p>{shortDesc}</p>
            <ul>
              <li><span className="expertise-hero-card-icon"><Stethoscope size={16} /></span> Homeopathic Physician, 14+ years</li>
              <li><span className="expertise-hero-card-icon"><HeartHandshake size={16} /></span> BHMS, MD (Homoeopathy), PGDPC</li>
            </ul>
          </div>
        }
      />

      {/* 2. Three care areas — source: Section 2 */}
      <section className="section bg-sand">
        <div className="container">
          <div className="grid-3">
            {careAreas.map((area, idx) => (
              <div key={area.title} className="card expertise-area-card">
                <span className="expertise-pillar-number">0{idx + 1}</span>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
                <CareAreaLink href={area.href}>
                  <span>{area.linkLabel}</span>
                  <ArrowRight size={14} />
                </CareAreaLink>
              </div>
            ))}
          </div>

          {/* 3. Concerns you can discuss — source: Sitemap brief expertise topics list */}
          <div id="concerns" className="expertise-pillars expertise-concerns">
            <h3>Concerns you can discuss</h3>
            <ul className="check-list expertise-concerns-list">
              {concerns.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={17} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Approach — source: Section 3 */}
      <section id="approach" className="section photo-band" style={{ '--band-img': `url('${(EXPERTISE_HERO_IMAGES[id] || { src: '/images/photos/remedy-preparation.jpg' }).src}')` }}>
        <div className="container">
          <SectionHeader
            badge="Our approach"
            title={approach.heading}
            subtitle={approach.intro}
            centered={true}
          />
          <div className="grid-3">
            {approach.items.map((item, idx) => {
              const Icon = approachIcons[idx % approachIcons.length];
              return (
                <div key={item.title} className="card expertise-approach-card">
                  <div className="expertise-approach-top">
                    <span className="icon-tile"><Icon size={22} /></span>
                    <span className="expertise-approach-index">0{idx + 1}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Patient experience — only where the source provides quotes */}
      {testimonials.length > 0 && (
        <section className="section bg-surface">
          <div className="container">
            <SectionHeader title="Patient experience" centered={true} />
            <div className="grid-3 expertise-testimonials">
              {testimonials.map((t) => (
                <TestimonialCard key={t.quote} quote={t.quote} author="Patient experience" location="" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. When to seek professional help — source: Disclaimer "Emergency situations" + "Homeopathy and complementary care" */}
      <section className="section">
        <div className="container-narrow">
          <div className="expertise-safety">
            <div className="expertise-safety-head">
              <span className="icon-tile"><ShieldAlert size={22} /></span>
              <h2>When to seek professional help</h2>
            </div>
            <p>Dr. Mohini Mutha does not provide emergency medical services through this website.</p>
            <p>
              If you are experiencing a medical emergency, severe symptoms or a situation requiring immediate
              attention, contact your local emergency medical service or visit the nearest emergency department.
            </p>
            <p className={mentalHealthNote ? 'expertise-emergency' : undefined}>
              For urgent mental health concerns or an immediate risk of harm, seek emergency or crisis support
              available in your location.
            </p>
            <p>
              Homeopathy is a system of complementary medicine. Information presented on this website is not
              intended to suggest that homeopathy should replace medically necessary conventional care.
            </p>
            <Link href="/disclaimer" className="link-arrow">
              <span>Read the full disclaimer</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQs — verbatim from source FAQ page */}
      <section className="section bg-surface">
        <div className="container-narrow">
          <SectionHeader badge="FAQ" title="Questions about your care?" centered={true} />
          <FAQAccordion items={faqs} />
          <div className="expertise-faq-more">
            <Link href="/resources/faqs" className="link-arrow">
              <span>View all FAQs</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* 8. Related care & resources */}
          <div className="expertise-related">
            <h2>Related care &amp; resources</h2>
            <div className="expertise-related-links">
              {relatedPages.map((res) => (
                <Link key={res.path} href={res.path} className="expertise-related-link">
                  <span>{res.label}</span>
                  <ArrowRight size={15} />
                </Link>
              ))}
            </div>
          </div>

          {/* 9. Consultation process link */}
          <Link href="/my-approach/consultation-process" className="card card-link expertise-process-link">
            <span className="icon-tile"><ListChecks size={22} /></span>
            <span className="expertise-process-text">
              <strong>Consultation process</strong>
              <span>Listen · Assess · Understand · Personalise · Follow Up</span>
            </span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 10. Final CTA — source: Section 4 with the page's three action tiles */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-panel">
            <BrandMark className="cta-panel-mark" />
            <div className="cta-panel-content expertise-cta-content">
              <h2>{cta.heading}</h2>
              <p className="cta-panel-subtitle">{cta.intro}</p>
              {cta.primaryLabel && (
                <div className="cta-panel-actions">
                  <Link href={cta.primaryHref} className="btn btn-primary btn-lg">
                    <span>{cta.primaryLabel}</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              )}
              <ul className="expertise-cta-tiles">
                {cta.tiles.map((tile) => {
                  const { href, external, Icon } = tileTarget(tile);
                  const inner = (
                    <>
                      <span className="expertise-cta-tile-icon"><Icon size={20} /></span>
                      <span className="expertise-cta-tile-text">
                        <strong>{tile.label}</strong>
                        <span>{tile.text}</span>
                      </span>
                    </>
                  );
                  return (
                    <li key={tile.label}>
                      {external ? (
                        <a
                          href={href}
                          className="expertise-cta-tile"
                          {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        >
                          {inner}
                        </a>
                      ) : (
                        <Link href={href} className="expertise-cta-tile">{inner}</Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
