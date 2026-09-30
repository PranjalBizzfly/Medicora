import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from './Breadcrumbs';
import ParticleSphere from './ParticleSphere';
import { ArrowRight, Calendar } from 'lucide-react';
import './Hero.css';

/**
 * Inner-page header: a compact brand banner holding only the title and
 * breadcrumbs, followed by a centred intro (label, subtitle, actions) and an
 * optional fact card.
 */
export default function Hero({
  badge = "Dr. Mohini Mutha",
  title,
  subtitle,
  breadcrumbs = [],
  primaryCtaText = "Book a Consultation",
  primaryCtaLink = "/book-a-consultation",
  secondaryCtaText,
  secondaryCtaLink,
  sideCard = null,
  image = null,
}) {
  const hasActions = primaryCtaText || (secondaryCtaText && secondaryCtaLink);
  const hasIntro = badge || subtitle || hasActions;

  return (
    <>
      <section className={`page-hero ${image ? 'has-image' : ''}`}>
        {image && (
          <Image src={image} alt="" fill priority sizes="100vw" className="page-hero-img" />
        )}
        <div className="page-hero-decor" aria-hidden="true" />
        <ParticleSphere className="page-hero-sphere" />
        <div className="container page-hero-content">
          <h1 className="hero-title">{title}</h1>
          {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        </div>
      </section>

      {hasIntro && (
        <section className="page-intro">
          <div className="container page-intro-inner">
            {badge && <span className="badge">{badge}</span>}
            {subtitle && <p className="page-intro-text">{subtitle}</p>}
            {hasActions && (
              <div className="hero-actions">
                {primaryCtaText && (
                  <Link href={primaryCtaLink} className="btn btn-primary">
                    <Calendar size={16} aria-hidden="true" />
                    <span>{primaryCtaText}</span>
                  </Link>
                )}
                {secondaryCtaText && secondaryCtaLink && (
                  <Link href={secondaryCtaLink} className="btn btn-secondary">
                    <span>{secondaryCtaText}</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {sideCard && (
        <div className="page-hero-card-wrap">
          <div className="container">
            <div className="hero-side-card">{sideCard}</div>
          </div>
        </div>
      )}
    </>
  );
}
