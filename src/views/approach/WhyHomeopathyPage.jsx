import React from 'react';
import '../../styles/approach.css';
import Hero from '../../components/Hero';
import SectionHeader from '../../components/SectionHeader';
import CTABanner from '../../components/CTABanner';
import BrandMark from '../../components/BrandMark';
import {
  HeartHandshake,
  Search,
  Sparkles,
  CheckCircle
} from 'lucide-react';

const facets = [
  {
    icon: Sparkles,
    title: 'Individualised Care',
    text: 'Homeopathy considers your symptoms alongside your individual health history, constitutional sensitivities, and overall wellbeing. No two care plans are identical.'
  },
  {
    icon: HeartHandshake,
    title: 'A Deeper Conversation',
    text: 'Understanding your concerns, emotional patterns, sleep rhythms, and everyday challenges is an essential part of the case-taking process before choosing a remedy.'
  },
  {
    icon: Search,
    title: 'Personalised Support',
    text: 'Your care is shaped around your specific individual concerns rather than applying the same generic protocol to every person with the same condition name.'
  }
];

const principles = [
  {
    title: 'Individuality Matters:',
    text: 'Different people can experience similar health concerns in very different ways. Homeopathy honors these variations.'
  },
  {
    title: 'Your Story Matters:',
    text: 'Your experiences, onset story, emotional triggers, and health history provide crucial context for finding the right remedy.'
  },
  {
    title: 'Conversations Matter:',
    text: 'Good care begins with taking the time to understand what you are going through without clinical judgment or hurry.'
  }
];

const quotes = [
  'I appreciated how much time was taken to understand my concerns before discussing my care.',
  'The consultation felt personal and gave me space to explain what I was experiencing.',
  'I valued the thoughtful questions and the attention given to my individual concerns.'
];

export default function WhyHomeopathyPage() {
  return (
    <div className="why-homeopathy-page">
      <Hero
        badge="My Approach · Homeopathy"
        title="Why Homeopathy?"
        subtitle="Looking at the individual, not just the condition. Understanding the role of evidence-conscious, individualised homeopathy in modern personalised healthcare."
        breadcrumbs={[
          { label: "My Approach", path: "/my-approach" },
          { label: "Why Homeopathy" }
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Consultation Process"
        secondaryCtaLink="/my-approach/consultation-process"
      />

      {/* 3 Core Areas */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeader
            badge="Three Core Facets"
            title="Understanding the Role of Homeopathy in Personalised Care"
            subtitle="Content explained in an educational, evidence-conscious, and non-promotional manner."
            centered={true}
          />

          <div className="grid-3">
            {facets.map(({ icon: Icon, title, text }) => (
              <div className="card ap-card" key={title}>
                <span className="icon-tile"><Icon size={24} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Homeopathic Approach & Principles */}
      <section className="section bg-sand">
        <div className="container">
          <div className="split-section ap-split">
            <div className="ap-split-content">
              <span className="badge">Clinical Principles</span>
              <h2>Understanding the Homeopathic Approach</h2>
              <p className="ap-lead">
                Homeopathy is a system of complementary medicine that takes an individualised approach to health and symptoms. Developed over two centuries ago, it evaluates the total symptom complex of the patient rather than focusing only on isolated signs.
              </p>

              <ul className="ap-points">
                {principles.map(({ title, text }) => (
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
              <BrandMark className="ap-panel-mark" />
              <div className="ap-panel-head">
                <span className="ap-panel-avatar"><BrandMark className="ap-panel-avatar-mark" /></span>
                <h3>Patient Experiences with Homeopathy</h3>
              </div>
              <div className="ap-quotes">
                {quotes.map((quote) => (
                  <div className="ap-quote" key={quote}>
                    <p>"{quote}"</p>
                    <span className="ap-quote-label">Patient experience</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        badge="Explore Your Care"
        title="Explore Whether Homeopathy Is Right for You"
        subtitle="Have questions about homeopathy or your health concerns? Explore your options and understand whether this approach may be suitable for you."
      />
    </div>
  );
}
