'use client';

import React, { useState } from 'react';
import Hero from '../../components/Hero';
import FAQAccordion from '../../components/FAQAccordion';
import ActionTilesCTA from './ActionTilesCTA';
import { generalFaqs } from '../../data/websiteContent';
import '../../styles/resources.css';

// Source: Website Content PDF, Page 27 – FAQs (pp.153–155): 15 Q&As in
// three categories with left-side navigation. No other questions are added.
export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState(generalFaqs[0].category);
  const current = generalFaqs.find((c) => c.category === activeCategory) || generalFaqs[0];

  return (
    <div className="faqs-page">
      <Hero
        badge="FAQ"
        title="Questions about your care? We're here to help."
        subtitle="Find answers to common questions about consultations, homeopathy, personalised care and the Trivana Wellness approach."
        breadcrumbs={[
          { label: 'Resources' },
          { label: 'FAQs' },
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Myths vs Facts"
        secondaryCtaLink="/resources/myths-vs-facts"
      />

      <section className="section bg-surface">
        <div className="container">
          <div className="rs-faq-layout">
            <aside className="rs-faq-nav" aria-label="FAQ categories">
              <h2 className="rs-label">FAQ categories</h2>
              <div className="rs-faq-tabs">
                {generalFaqs.map((cat) => (
                  <button
                    key={cat.category}
                    type="button"
                    onClick={() => setActiveCategory(cat.category)}
                    className={`rs-faq-tab ${activeCategory === cat.category ? 'is-active' : ''}`}
                    aria-pressed={activeCategory === cat.category}
                  >
                    {cat.category}
                  </button>
                ))}
              </div>
            </aside>

            <div>
              <div className="rs-faq-head">
                <h2>{current.category}</h2>
                <p className="rs-faq-intro">{current.intro}</p>
              </div>
              <FAQAccordion key={current.category} items={current.items} defaultOpenIndex={0} />
            </div>
          </div>
        </div>
      </section>

      <ActionTilesCTA
        title="Can I ask a question before booking?"
        subtitle="Yes. If you are unsure whether an online consultation is right for your concern, you can get in touch before booking."
      />
    </div>
  );
}
