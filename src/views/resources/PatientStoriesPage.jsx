import React from 'react';
import { Ear, HeartHandshake, UserRound } from 'lucide-react';
import Hero from '../../components/Hero';
import SectionHeader from '../../components/SectionHeader';
import TestimonialCard from '../../components/TestimonialCard';
import CTABanner from '../../components/CTABanner';
import { patientTestimonials } from '../../data/websiteContent';
import '../../styles/resources.css';

const themes = [
  {
    num: '01',
    title: 'Every Story Is Different',
    text: 'Each patient comes with their own unique concerns, lived experiences, physical reactions, and expectations. We tailor the consultation to meet you where you are.'
  },
  {
    num: '02',
    title: 'A Space to Be Heard',
    text: 'Many patients value having dedicated, unhurried time and psychological safety to openly discuss what they are experiencing—both physically and emotionally.'
  },
  {
    num: '03',
    title: 'Care That Feels Personal',
    text: 'The most meaningful part of clinical practice is seeing patients feel genuinely understood throughout their care journey, supporting their everyday wellbeing.'
  }
];

const principles = [
  {
    Icon: Ear,
    title: 'Understanding',
    text: "Taking time to listen to each patient's concerns, background, and personal health experiences."
  },
  {
    Icon: HeartHandshake,
    title: 'Personal Connection',
    text: 'Creating a consultation atmosphere where patients feel comfortable speaking openly without hesitation.'
  },
  {
    Icon: UserRound,
    title: 'Individual Care',
    text: "Keeping each person's unique concerns, pace, and lifestyle at the centre of ongoing care."
  }
];

export default function PatientStoriesPage() {
  return (
    <div className="patient-stories-page">
      <Hero
        badge="Resources · Patient Voices"
        title="Patient Stories"
        subtitle="Real experiences from people I have cared for. Building trust through authentic patient reflections without exaggerated claims."
        breadcrumbs={[
          { label: "Resources", path: "/resources/patient-stories" },
          { label: "Patient Stories" }
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Explore Case Studies"
        secondaryCtaLink="/resources/case-studies"
      />

      {/* 3 Key Themes */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeader
            badge="Guiding Values"
            title="Three Key Themes of Patient Care"
            subtitle="The cornerstones that define our consultation environment."
            centered={true}
          />

          <div className="grid-3">
            {themes.map((theme) => (
              <div key={theme.num} className="card rs-card">
                <span className="rs-card-num" aria-hidden="true">{theme.num}</span>
                <span className="badge badge-mint">Theme {theme.num}</span>
                <h3>{theme.title}</h3>
                <p>{theme.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid (Authentic Only) */}
      <section className="section bg-sand">
        <div className="container">
          <SectionHeader
            badge="Authentic Reflections"
            title="What Patients Have to Say"
            subtitle="Real experiences from patients who have taken the time to share their thoughts about their consultations and care."
            centered={true}
          />

          <div className="grid-2 rs-testimonials">
            {patientTestimonials.map((t) => (
              <TestimonialCard
                key={t.id}
                quote={t.quote}
                author="Patient experience"
                category={t.category}
                condition={t.condition}
              />
            ))}
          </div>

          {/* Genuine Structure - No Fake Data */}
          <div className="rs-note">
            <h4>Our Testimonial Policy</h4>
            <p>
              In accordance with ethical medical practice and approved source guidelines, we only display genuine, permission-based reflections. We do not manufacture artificial testimonials or make promises of guaranteed health outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section bg-surface">
        <div className="container">
          <div className="grid-3">
            {principles.map(({ Icon, title, text }) => (
              <div key={title} className="card rs-card rs-principle">
                <span className="icon-tile icon-tile-mint">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        badge="Your Story Matters"
        title="Your Story Starts with a Conversation"
        subtitle="If you're considering personalised care, you can begin by sharing what you're experiencing."
      />
    </div>
  );
}
