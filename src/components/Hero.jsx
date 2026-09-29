import React from 'react';
import Link from 'next/link';
import Breadcrumbs from './Breadcrumbs';
import BrandMark from './BrandMark';
import { ArrowRight, Calendar } from 'lucide-react';
import './Hero.css';

export default function Hero({
  badge = "Dr. Mohini Mutha",
  title,
  subtitle,
  breadcrumbs = [],
  primaryCtaText = "Book a Consultation",
  primaryCtaLink = "/book-a-consultation",
  secondaryCtaText,
  secondaryCtaLink,
  sideCard = null
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-decor" aria-hidden="true" />
      <div className="container">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumbs items={breadcrumbs} />
        )}

        <div className={`page-hero-inner ${sideCard ? 'has-card' : ''}`}>
          <div className="page-hero-content">
            {badge && (
              <div className="hero-badge-row">
                <span className="badge">{badge}</span>
              </div>
            )}

            <h1 className="hero-title">{title}</h1>

            {subtitle && <p className="hero-subtitle">{subtitle}</p>}

            {(primaryCtaText || (secondaryCtaText && secondaryCtaLink)) && (
              <div className="hero-actions">
                {primaryCtaText && (
                  <Link href={primaryCtaLink} className="btn btn-primary">
                    <Calendar size={16} />
                    <span>{primaryCtaText}</span>
                  </Link>
                )}

                {secondaryCtaText && secondaryCtaLink && (
                  <Link href={secondaryCtaLink} className="btn btn-secondary">
                    <span>{secondaryCtaText}</span>
                    <ArrowRight size={16} />
                  </Link>
                )}
              </div>
            )}
          </div>

          {sideCard ? (
            <div className="hero-side-card">{sideCard}</div>
          ) : (
            <div className="hero-visual" aria-hidden="true">
              <div className="hero-visual-ring hero-visual-ring-lg" />
              <div className="hero-visual-ring hero-visual-ring-sm" />
              <BrandMark className="hero-visual-mark" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
