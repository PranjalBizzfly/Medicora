import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../styles/approach.css';
import Hero from '../../components/Hero';
import SectionHeader from '../../components/SectionHeader';
import BrandMark from '../../components/BrandMark';
import ActionTiles from './ActionTiles';
import { ArrowRight, CheckCircle } from 'lucide-react';

/**
 * Shared layout for the four "My Approach" pages. All copy is passed in
 * from each page and comes from the Website Content document.
 */
export default function ApproachTemplate({
  className,
  hero,
  cardsHeader,
  cards,
  afterCards = null,
  approach,
  quotes,
  cta,
  image = null,
}) {
  return (
    <div className={className}>
      <Hero {...hero} />

      <section className="section photo-band" style={{ '--band-img': "url('/images/photos/meditation-practice.jpg')" }}>
        <div className="container">
          {cardsHeader && <SectionHeader {...cardsHeader} centered={true} />}
          <div className="grid-3">
            {cards.map(({ icon: Icon, title, text, linkText, href }, i) => (
              <div className="card ap-card" key={title}>
                <div className="ap-card-top">
                  <span className="icon-tile"><Icon size={24} /></span>
                  <span className="ap-card-num">0{i + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link href={href} className="ap-card-link">
                  {linkText} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {afterCards}

      <section className="section bg-sand">
        <div className="container">
          <div className="split-section ap-split">
            <div className="ap-split-content">
              {approach.badge && <span className="badge">{approach.badge}</span>}
              <h2>{approach.title}</h2>
              <p className="ap-lead">{approach.lead}</p>
              <ul className="ap-points">
                {approach.points.map(({ title, text }) => (
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
              {image ? (
                <div style={{ marginBottom: '1.5rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width || 600}
                    height={image.height || 400}
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                </div>
              ) : (
                <BrandMark className="ap-panel-mark" />
              )}
              <div className="ap-quotes">
                {quotes.map((quote) => (
                  <figure className="ap-quote" key={quote}>
                    <blockquote><p>&ldquo;{quote}&rdquo;</p></blockquote>
                    <figcaption className="ap-quote-label">Patient experience</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ActionTiles {...cta} />
    </div>
  );
}
