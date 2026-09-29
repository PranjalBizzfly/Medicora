import React from 'react';
import '../../styles/approach.css';
import Hero from '../../components/Hero';
import SectionHeader from '../../components/SectionHeader';
import ConsultationProcess from '../../components/ConsultationProcess';
import CTABanner from '../../components/CTABanner';
import BrandMark from '../../components/BrandMark';
import {
  CheckCircle,
  CheckCircle2,
  FileText,
  Quote,
  UserCheck
} from 'lucide-react';

const stages = [
  {
    icon: FileText,
    stage: 'Stage 01',
    title: 'Before the Session',
    text: 'Share your concerns, timeline of symptoms, and relevant health information or previous diagnostic reports before your appointment.',
    items: ['Select convenient date & slot', 'Note down primary symptoms', 'Have previous prescriptions handy']
  },
  {
    icon: UserCheck,
    stage: 'Stage 02',
    title: 'During the Session',
    text: 'Talk openly about your symptoms, everyday experiences, emotional challenges, and health history in an unhurried, comfortable dialogue.',
    items: ['Comprehensive case-taking', 'Mind-body & stress review', 'Space to ask all your questions']
  },
  {
    icon: CheckCircle,
    stage: 'Stage 03',
    title: 'After the Session',
    text: 'Understand the agreed-upon care roadmap, dosage recommendations, lifestyle guidance, and schedule of ongoing follow-ups.',
    items: ['Individualised remedies plan', 'Lifestyle & breathing routines', 'Scheduled follow-up assessment']
  }
];

const quotes = [
  'The consultation felt comfortable and I had enough time to explain everything.',
  'I appreciated how carefully my concerns and health history were discussed.',
  'The process was simple, clear and felt very personal.'
];

export default function ConsultationProcessPage() {
  return (
    <div className="consultation-process-page">
      <Hero
        badge="Patient Journey"
        title="Consultation Process"
        subtitle="A simple, thoughtful approach to your care. What to expect before, during, and after your consultation with Dr. Mohini Mutha."
        breadcrumbs={[
          { label: "My Approach", path: "/my-approach" },
          { label: "Consultation Process" }
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Read About Personalised Care"
        secondaryCtaLink="/my-approach/personalised-treatment"
      />

      {/* The 5-Step Process Component */}
      <ConsultationProcess
        title="What to Expect During Your Consultation"
        subtitle="Our 5-step consultation flow, designed to help you feel heard, understood, and supported."
      />

      {/* Before, During, After Journey */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeader
            badge="Session Breakdown"
            title="Before, During & After Your Consultation"
            subtitle="Clear steps so you know what to expect."
            centered={true}
          />

          <div className="grid-3">
            {stages.map(({ icon: Icon, stage, title, text, items }) => (
              <div className="card ap-card ap-card-sand" key={title}>
                <div className="ap-card-top">
                  <span className="icon-tile"><Icon size={24} /></span>
                  <span className="badge badge-mint">{stage}</span>
                </div>
                <h3>{title}</h3>
                <p className="ap-card-body">{text}</p>
                <ul className="check-list">
                  {items.map((item) => (
                    <li key={item}><CheckCircle2 size={16} /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Experiences with Consultation */}
      <section className="section bg-mint">
        <div className="container">
          <SectionHeader
            badge="Patient Reflections"
            title="Consultation Experiences"
            subtitle="Feedback shared by patients about their consultation time with Dr. Mohini."
            centered={true}
          />

          <div className="grid-3">
            {quotes.map((quote) => (
              <div className="card ap-quote-card" key={quote}>
                <Quote size={28} className="ap-quote-card-icon" />
                <p>"{quote}"</p>
                <div className="ap-quote-card-foot">
                  <BrandMark className="ap-quote-card-mark" />
                  <span>Patient experience</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        badge="Ready to Take the Next Step?"
        title="Ready to Take the Next Step in Your Care?"
        subtitle="You don't need to have everything figured out. Begin by telling us what you'd like support with."
      />
    </div>
  );
}
