'use client';

import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import Hero from '../../components/Hero';
import FAQAccordion from '../../components/FAQAccordion';
import CTABanner from '../../components/CTABanner';
import { generalFaqs } from '../../data/websiteContent';
import '../../styles/resources.css';

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState("General Questions");

  const currentCategoryObj = generalFaqs.find(c => c.category === activeCategory) || generalFaqs[0];

  return (
    <div className="faqs-page">
      <Hero
        badge="Resources · FAQ"
        title="Frequently Asked Questions"
        subtitle="Questions about your care? We're here to help. Find answers to common questions about consultations, homeopathy, personalised care, and the Trivana Wellness approach."
        breadcrumbs={[
          { label: "Resources", path: "/resources/patient-stories" },
          { label: "FAQs" }
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Ask a Direct Question"
        secondaryCtaLink="#direct-question"
      />

      {/* Main FAQ Section with Category Navigation */}
      <section className="section bg-surface">
        <div className="container">
          <div className="rs-faq-layout">
            {/* Left-Side Category Navigation as instructed in source */}
            <aside className="rs-faq-nav">
              <h3>FAQ Categories</h3>

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

              <div className="rs-faq-nav-foot">
                <p>Have an unlisted question before scheduling?</p>
                <a href="#direct-question" className="link-arrow">
                  Send us a message →
                </a>
              </div>
            </aside>

            {/* Right Side: Accordion Questions */}
            <div>
              <div className="rs-faq-head">
                <span className="badge">{activeCategory}</span>
                <h2>
                  {activeCategory === "General Questions" && "General Questions About Dr. Mohini & Care"}
                  {activeCategory === "Service Details" && "Service Details & Mind-Body Integration"}
                  {activeCategory === "Procedures & Appointments" && "Appointments, Formats & Procedures"}
                </h2>
              </div>

              <FAQAccordion items={currentCategoryObj.items} defaultOpenIndex={0} />
            </div>
          </div>
        </div>
      </section>

      {/* Ask a Question Before Booking */}
      <section id="direct-question" className="section bg-sand">
        <div className="container-narrow rs-ask">
          <span className="badge">Still Have Questions?</span>
          <h2>Ask a Question Before Booking</h2>
          <p>
            If you are unsure whether an online or in-person consultation is right for your particular concern, feel free to reach out to us first.
          </p>

          <div className="rs-actions">
            <a href="tel:+919423972150" className="btn btn-secondary">
              <Phone size={16} aria-hidden="true" />
              <span>Call: +91 942 397 2150</span>
            </a>
            <a href="mailto:drmohini@drmohinimutha.com" className="btn btn-secondary">
              <Mail size={16} aria-hidden="true" />
              <span>Email: drmohini@drmohinimutha.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        badge="Ready to Consult?"
        title="Ready to Take the Next Step?"
        subtitle="Book a consultation at a convenient time and start with care that takes the time to listen."
      />
    </div>
  );
}
