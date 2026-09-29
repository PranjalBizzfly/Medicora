import React from 'react';
import Link from 'next/link';
import Hero from './Hero';
import SectionHeader from './SectionHeader';
import FAQAccordion from './FAQAccordion';
import CTABanner from './CTABanner';
import TestimonialCard from './TestimonialCard';
import {
  HeartHandshake,
  Search,
  CheckCircle2,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  Ear,
  Stethoscope,
  Video
} from 'lucide-react';
import '../styles/expertise.css';

const approachSteps = [
  {
    icon: Ear,
    title: 'Listen Carefully',
    text: 'Your symptoms, health history and personal experiences help shape a more informed, empathetic consultation. No rushed appointments.',
  },
  {
    icon: Search,
    title: 'Understand Patterns',
    text: 'Recurring health concerns can be influenced by underlying stress, dietary patterns, sleep disruption, and emotional factors.',
  },
  {
    icon: Sparkles,
    title: 'Personalise Care',
    text: 'Care is considered around your individual needs and circumstances rather than applying a generic one-size-fits-all prescription.',
  },
];

// Safety notes are shown in the dedicated emergency box, not as a list item.
const isSafetyNote = (point) => /^critical medical disclaimer/i.test(point);

export default function ExpertiseTemplate({
  title,
  tagline,
  badge = "Area of Expertise",
  understandingText,
  commonSymptoms = [],
  everydayImpactText,
  careAreas = [],
  testimonials = [],
  whenToSeekHelp = [],
  faqs = [],
  relatedResources = []
}) {
  const seekHelpPoints = whenToSeekHelp.filter((p) => !isSafetyNote(p));
  const hasSafetyNote = whenToSeekHelp.some(isSafetyNote);

  return (
    <div className="expertise-page">
      {/* 1. Hero */}
      <Hero
        badge={badge}
        title={title}
        subtitle={tagline}
        breadcrumbs={[
          { label: "Expertise", path: "/sitemap" },
          { label: title }
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Explore Her Approach"
        secondaryCtaLink="/my-approach"
        sideCard={
          <div className="expertise-hero-card">
            <span className="badge badge-mint">Personalised Care</span>
            <h4>Consultation Focus</h4>
            <p>Every case begins with careful listening to understand your unique health story and lifestyle factors.</p>
            <ul>
              <li><span className="expertise-hero-card-icon"><Stethoscope size={16} /></span> 14+ years clinical experience</li>
              <li><span className="expertise-hero-card-icon"><HeartHandshake size={16} /></span> Classical homeopathy + counselling</li>
              <li><span className="expertise-hero-card-icon"><Video size={16} /></span> Online & in-person care</li>
            </ul>
          </div>
        }
      />

      {/* 2. Understanding the concern + care areas */}
      <section className="section bg-surface">
        <div className="container">
          <div className="split-section expertise-understanding">
            <div>
              <SectionHeader
                badge="Understanding The Concern"
                title={`Understanding Your ${title}`}
                subtitle="A personalised approach that considers your health, lifestyle and individual needs."
              />
              <p className="expertise-lead">{understandingText}</p>
              <div className="medical-disclaimer-box">
                <p>
                  <strong>Patient-Centred Insight:</strong> Rather than viewing symptoms in isolation, Dr. Mohini explores how physical discomfort interacts with sleep, daily habits, and emotional wellbeing.
                </p>
              </div>
            </div>

            <div className="expertise-pillars">
              <h3>Care Focus Areas</h3>
              <ol>
                {careAreas.map((area, idx) => (
                  <li key={area.title}>
                    <span className="expertise-pillar-number">0{idx + 1}</span>
                    <div>
                      <h4>{area.title}</h4>
                      <p>{area.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* 3. Common concerns + 4. everyday impact */}
          <div className="grid-2 expertise-detail-grid">
            <div className="card expertise-detail-card">
              <span className="icon-tile"><Search size={22} /></span>
              <h3>Common Concerns & Patterns</h3>
              <p>Patients often consult Dr. Mohini for concerns such as:</p>
              <ul className="check-list">
                {commonSymptoms.map((symptom) => (
                  <li key={symptom}>
                    <CheckCircle2 size={17} />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card expertise-detail-card">
              <span className="icon-tile icon-tile-mint"><HeartHandshake size={22} /></span>
              <h3>How It Can Affect Everyday Life</h3>
              <p className="expertise-impact-text">{everydayImpactText}</p>
              <p>
                When symptoms persist, they can gradually interfere with work, concentration, family life, mood, and sleep. Seeking guidance early can help you understand what may be contributing to them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Dr. Mohini's approach */}
      <section className="section bg-sand">
        <div className="container">
          <SectionHeader
            badge="Care Philosophy"
            title="Dr. Mohini's Approach to Care"
            subtitle="Thoughtful care built around your health, lifestyle and individual needs."
            centered={true}
          />

          <div className="grid-3">
            {approachSteps.map(({ icon: Icon, title: stepTitle, text }, idx) => (
              <div key={stepTitle} className="card expertise-approach-card">
                <div className="expertise-approach-top">
                  <span className="icon-tile"><Icon size={22} /></span>
                  <span className="expertise-approach-index">0{idx + 1}</span>
                </div>
                <h3>{stepTitle}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Patient experiences + 7. when to seek help */}
      <section className="section bg-surface">
        <div className="container">
          <div className="grid-2 expertise-safety-grid">
            <div className="expertise-safety">
              <div className="expertise-safety-head">
                <span className="icon-tile"><ShieldAlert size={22} /></span>
                <h3>When to Seek Professional Guidance</h3>
              </div>
              <p>Your safety comes first. Please consider booking a consultation if:</p>
              <ul className="check-list">
                {seekHelpPoints.map((point) => (
                  <li key={point}>
                    <CheckCircle2 size={17} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="expertise-emergency">
                <strong>Emergency notice:</strong> If you experience acute severe distress, sudden intense chest pain, shortness of breath or high fever, seek emergency medical care immediately.
                {hasSafetyNote && (
                  <> This practice does not provide emergency psychiatric crisis care. If you are having thoughts of self-harm or are in an immediate mental health crisis, contact your local emergency helpline or hospital emergency department.</>
                )}
              </div>
            </div>

            <div>
              <SectionHeader
                badge="Patient Experiences"
                title="In Their Words"
                subtitle="Reflections shared by patients about their consultations. Individual experiences vary."
              />
              <div className="expertise-testimonials">
                {(testimonials.length > 0 ? testimonials : [
                  { quote: "The consultation gave me time to explain my concerns and helped me understand my symptoms better.", patient: "Patient experience", location: "" },
                  { quote: "I felt heard and understood throughout my consultation, and my concerns were discussed with genuine care.", patient: "Patient experience", location: "" }
                ]).map((t) => (
                  <TestimonialCard key={t.quote} quote={t.quote} author={t.patient} location={t.location} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQs + related resources */}
      <section className="section">
        <div className="container-narrow">
          <SectionHeader
            badge="Frequently Asked Questions"
            title={`Common Questions on ${title}`}
            subtitle="Clear, honest answers to help you make informed decisions about your care."
            centered={true}
          />
          <FAQAccordion items={faqs} />

          {relatedResources.length > 0 && (
            <div className="expertise-related">
              <h4>Related Care & Educational Resources</h4>
              <p>Explore connected areas of care and Dr. Mohini's clinical perspective:</p>
              <div className="expertise-related-links">
                {relatedResources.map((res) => (
                  <Link key={res.path + res.label} href={res.path} className="expertise-related-link">
                    <span>{res.label}</span>
                    <ArrowRight size={15} />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 9. Final CTA */}
      <CTABanner
        badge="Start a Conversation"
        title={`Start a Conversation About Your ${title}`}
        subtitle="Share what you have been experiencing and take the first step towards personalised, thoughtful care."
      />
    </div>
  );
}
