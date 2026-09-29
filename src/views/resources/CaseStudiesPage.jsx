import React from 'react';
import { Info } from 'lucide-react';
import Hero from '../../components/Hero';
import SectionHeader from '../../components/SectionHeader';
import CTABanner from '../../components/CTABanner';
import BrandMark from '../../components/BrandMark';
import { caseStudiesList } from '../../data/websiteContent';
import '../../styles/resources.css';

const stages = [
  {
    num: '01',
    title: 'The Concern',
    text: 'Every case begins with understanding the symptoms, onset history, and specific daily limitations shared by the patient.'
  },
  {
    num: '02',
    title: 'The Consultation',
    text: 'A detailed consultation explores physical patterns, emotional stresses, lifestyle factors, and unique constitutional characteristics.'
  },
  {
    num: '03',
    title: 'The Care Journey',
    text: "Care is formulated and adapted around the patient's evolving needs, circumstances, and ongoing progress over follow-ups."
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="case-studies-page">
      <Hero
        badge="Resources · Clinical Case Studies"
        title="Case Studies"
        subtitle="Understanding the person behind the concern. Anonymised clinical perspectives illustrating the journey from initial consultation to tailored care."
        breadcrumbs={[
          { label: "Resources", path: "/resources/patient-stories" },
          { label: "Case Studies" }
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Consultation Process"
        secondaryCtaLink="/my-approach/consultation-process"
      />

      {/* 3 Key Stages of Case Study Architecture */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeader
            badge="Clinical Architecture"
            title="Three Key Stages of Every Clinical Case"
            subtitle="How patient concerns are systematically evaluated and addressed."
            centered={true}
          />

          <div className="grid-3">
            {stages.map((stage) => (
              <div key={stage.num} className="card rs-card">
                <span className="rs-card-num" aria-hidden="true">{stage.num}</span>
                <span className="badge badge-mint">Stage {stage.num}</span>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Cases & Clinical Perspective */}
      <section className="section bg-sand">
        <div className="container">
          <SectionHeader
            badge="Clinical Perspective"
            title="Real Cases, Thoughtfully Presented"
            subtitle="These case studies share selected patient journeys while strictly respecting privacy and confidentiality."
            centered={true}
          />

          <div className="rs-case-notice" role="note">
            <Info size={18} aria-hidden="true" />
            <p>
              Details below are anonymised and illustrative, and are pending review by Dr. Mohini. Each account describes an individual experience only; it is not evidence that the same approach will produce a similar outcome for anyone else.
            </p>
          </div>

          <div className="rs-case-list">
            {caseStudiesList.map((cs) => (
              <article key={cs.id} className="card rs-case">
                <div className="rs-case-aside">
                  <span className="badge badge-mint">Anonymised Clinical Record</span>
                  <div>
                    <span className="rs-label">Patient Profile:</span>
                    <p>{cs.patientProfile}</p>
                  </div>
                  <BrandMark className="rs-case-aside-mark" />
                </div>

                <div className="rs-case-body">
                  <h3>{cs.title}</h3>

                  <div className="rs-case-field">
                    <strong>Presenting Concern:</strong>
                    <p>{cs.presentingConcern}</p>
                  </div>

                  <div className="rs-case-field">
                    <strong>Consultation & Assessment:</strong>
                    <p>{cs.assessment}</p>
                  </div>

                  <div className="rs-case-field">
                    <strong>Care Approach:</strong>
                    <p>{cs.careApproach}</p>
                  </div>

                  <div className="rs-case-field rs-case-outcome">
                    <strong>Follow-up / Outcome:</strong>
                    <p>{cs.outcome}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="medical-disclaimer-box rs-disclaimer">
            <p>
              <strong>Important Medical Responsibility Note:</strong> Avoid presenting individual cases as proof that a treatment will produce the exact same outcome for other patients. In individualised homeopathy and counselling, each patient's response depends on their constitutional factors, duration of condition, and adherence to care.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        badge="Every Case Tells a Different Story"
        title="Every Case Tells a Different Story"
        subtitle="Patient experiences are individual. Case studies are shared to help you understand the approach, not to promise a particular outcome."
      />
    </div>
  );
}
