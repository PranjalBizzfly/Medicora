import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Compass, Mail, MessageCircle } from 'lucide-react';
import BrandMark from '../../components/BrandMark';
import { siteConfig } from '../../data/websiteContent';

const WHATSAPP_URL = 'https://wa.me/919423972150';

const KIND = {
  explore: { icon: Compass },
  chat: { icon: MessageCircle, href: WHATSAPP_URL, external: true },
  message: { icon: Mail, href: `mailto:${siteConfig.email}`, external: true },
  book: { icon: Calendar, href: '/book-a-consultation' },
};

/**
 * Final CTA with the three source action tiles.
 * tiles: [{ kind: 'explore'|'chat'|'message'|'book', title, text, href? }]
 */
export default function ActionTiles({ title, subtitle, tiles }) {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-panel ap-cta">
          <BrandMark className="cta-panel-mark" />
          <div className="cta-panel-content">
            <h2>{title}</h2>
            <p className="cta-panel-subtitle">{subtitle}</p>
            <ul className="ap-tiles">
              {tiles.map(({ kind, title: tileTitle, text, href }) => {
                const conf = KIND[kind];
                const Icon = conf.icon;
                const target = href || conf.href;
                const inner = (
                  <>
                    <span className="ap-tile-icon"><Icon size={22} /></span>
                    <span className="ap-tile-title">{tileTitle} <ArrowRight size={16} /></span>
                    <span className="ap-tile-text">{text}</span>
                  </>
                );
                return (
                  <li key={tileTitle}>
                    {conf.external ? (
                      <a
                        className="ap-tile"
                        href={target}
                        {...(target.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {inner}
                      </a>
                    ) : (
                      <Link className="ap-tile" href={target}>{inner}</Link>
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
