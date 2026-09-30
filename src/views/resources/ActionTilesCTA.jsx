import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import BrandMark from '../../components/BrandMark';
import { defaultTiles } from './actionTiles';
import '../../styles/resources.css';

/**
 * Final CTA with the three source action tiles
 * ("Message me / Chat with me / Book a consultation" by default, see actionTiles.js).
 * Each tile: { title, text, href, icon? }. External hrefs render as <a>.
 */

export default function ActionTilesCTA({ title, subtitle, tiles }) {
  const items = tiles || defaultTiles();
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-panel">
          <BrandMark className="cta-panel-mark" />
          <div className="cta-panel-content">
            <h2>{title}</h2>
            {subtitle && <p className="cta-panel-subtitle">{subtitle}</p>}
            <ul className="rs-tiles">
              {items.map(({ icon: Icon = ArrowRight, title: t, text, href }) => {
                const inner = (
                  <>
                    <span className="rs-tile-icon" aria-hidden="true"><Icon size={20} /></span>
                    <span className="rs-tile-title">{t}</span>
                    <span className="rs-tile-text">{text}</span>
                  </>
                );
                const external = /^(https?:|mailto:|tel:)/.test(href);
                return (
                  <li key={t}>
                    {external ? (
                      <a
                        className="rs-tile"
                        href={href}
                        {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {inner}
                      </a>
                    ) : (
                      <Link className="rs-tile" href={href}>{inner}</Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
