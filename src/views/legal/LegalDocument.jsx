import React from 'react';
import { CalendarDays, Mail, Phone, Globe, FileText } from 'lucide-react';
import Hero from '../../components/Hero';
import { siteConfig } from '../../data/websiteContent';
import '../../styles/legal.css';

export const LAST_UPDATED = 'September 2026';

/*
 * Shared renderer for the legal pages (Privacy, Terms, Disclaimer, Cookies).
 * Section `content` is an array of blocks:
 *   'string'                    -> paragraph
 *   { list: [..] }              -> bullet list
 *   { note: '..' }              -> highlighted note
 *   { sub: '..' }               -> sub-heading (h3)
 *   { term: 'Label', text }     -> "Label: text" paragraph
 *   { contact: { name, website, cta } } -> contact card
 */
function Block({ block }) {
  if (typeof block === 'string') return <p>{block}</p>;
  if (block.list) {
    return (
      <ul className="lg-list">
        {block.list.map((item) => <li key={item}>{item}</li>)}
      </ul>
    );
  }
  if (block.note) return <p className="lg-note">{block.note}</p>;
  if (block.sub) return <h3 className="lg-doc-subheading">{block.sub}</h3>;
  if (block.term) {
    return (
      <p>
        <strong>{block.term}:</strong> {block.text}
      </p>
    );
  }
  if (block.contact) {
    const { name, website, cta } = block.contact;
    return (
      <div className="lg-contact">
        <span className="lg-contact-icon"><FileText size={22} /></span>
        <div className="lg-contact-body">
          <p className="lg-contact-name">{name}</p>
          <ul className="lg-contact-list">
            <li><Mail size={15} /><span>Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></span></li>
            <li><Phone size={15} /><span>Phone: <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phone}</a></span></li>
            {website && (
              <li><Globe size={15} /><span>Website: <a href="https://drmohinimutha.com">drmohinimutha.com</a></span></li>
            )}
          </ul>
          {cta && (
            <a className="btn btn-primary lg-contact-cta" href={`mailto:${siteConfig.email}`}>{cta}</a>
          )}
        </div>
      </div>
    );
  }
  return null;
}

export default function LegalDocument({ hero, tocLabel, tocCta, intro, sections, footnotes = [] }) {
  return (
    <div className="legal-page">
      <Hero
        badge={hero.badge}
        title={hero.title}
        subtitle={hero.subtitle}
        breadcrumbs={[{ label: hero.crumb }]}
        primaryCtaText={null}
      />

      <section className="section lg-section">
        <div className="container">
          <div className="lg-layout lg-layout-single">
            <article className="lg-doc" aria-label={tocLabel}>
              <div className="lg-doc-meta">
                <CalendarDays size={16} />
                <span>Last updated: {LAST_UPDATED}</span>
              </div>
              <div className="lg-prose">
                {intro && <p className="lg-doc-intro">{intro}</p>}
                {sections.map((s, i) => (
                  <section key={s.id} id={s.id} className="lg-doc-section">
                    <h2 className="lg-doc-heading">{i + 1}. {s.title}</h2>
                    {s.content.map((block, j) => <Block key={j} block={block} />)}
                  </section>
                ))}
                {footnotes.length > 0 && (
                  <div className="lg-doc-footnotes">
                    {footnotes.map((f, j) => <Block key={j} block={f} />)}
                  </div>
                )}
                <p className="lg-doc-contact-line">
                  {tocCta} <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
