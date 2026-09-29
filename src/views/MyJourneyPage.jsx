import React from 'react';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import CTABanner from '../components/CTABanner';
import BrandMark from '../components/BrandMark';
import { Quote } from 'lucide-react';
import '../styles/about.css';

const timelineEvents = [
  {
    year: "2012",
    title: "Beginning of Clinical Practice",
    badge: "Clinical Foundation",
    description: "Started practising homeopathy and working directly with patients across a broad range of acute and chronic health concerns with a simple belief: good care starts with understanding the person."
  },
  {
    year: "2016",
    title: "MD in Homeopathy — Materia Medica Specialisation",
    badge: "Advanced Academic Training",
    description: "Deepened clinical expertise in individualized, case-based homeopathic treatment and constitutional remedies through formal postgraduate studies."
  },
  {
    year: "2018",
    title: "Appointed Consultant Homoeopathic Physician with ONGC",
    badge: "Institutional Healthcare",
    description: "Began serving as a Consultant Homoeopathic Physician with ONGC, providing care within a structured corporate healthcare setting while maintaining private practice."
  },
  {
    year: "Counselling",
    title: "The Turning Point: PGDPC in Psychological Counselling",
    badge: "Emotional Understanding",
    description: "Noticing how frequently physical complaints (headaches, gut troubles, fatigue) stemmed from unspoken stress, completed a Post Graduate Diploma in Psychological Counselling to better understand the emotional side of health."
  },
  {
    year: "Integration",
    title: "Integrating Bach Flower Remedies",
    badge: "Holistic Healing",
    description: "Began pairing classical homeopathic medicine with Bach flower remedies as supportive care aimed at emotional balance and inner calm."
  },
  {
    year: "Today",
    title: "Founded Trivana Wellness & International Online Practice",
    badge: "Accessible Digital Care",
    description: "Launched Trivana Wellness, bringing together homeopathy, counselling, and mind-body routines for patients across India, the UAE, and the USA. Personal care for more than 12,000 patients."
  }
];

const learnings = [
  {
    title: "Listen First",
    desc: "Because the most important part of a consultation isn't always what is said first."
  },
  {
    title: "Keep Learning",
    desc: "Every patient and every clinical experience adds another perspective to understanding health."
  },
  {
    title: "Look at the Whole Picture",
    desc: "Health is influenced by more than a single symptom—mind, body, sleep, and lifestyle are interconnected."
  },
  {
    title: "Keep Care Personal",
    desc: "Because every person's story, physiology, and emotional circumstances are completely unique."
  }
];

export default function MyJourneyPage() {
  return (
    <div className="my-journey-page">
      <Hero
        badge="Professional Timeline"
        title="A Journey Built on Experience, Learning & Care"
        subtitle="From studying medicine to understanding the person behind it. Since 2012, shaped by thousands of patient conversations and a growing understanding of mind-body wellbeing."
        breadcrumbs={[
          { label: "About", path: "/about-me" },
          { label: "My Journey" }
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Read Clinical Philosophy"
        secondaryCtaLink="/clinical-philosophy"
        sideCard={
          <div>
            <h4 className="ab-side-title">Journey Milestones</h4>
            <ul className="ab-milestones">
              <li><strong>14+</strong><span>Years Clinical Experience</span></li>
              <li><strong>12,000+</strong><span>Patients Consulted</span></li>
              <li><strong>3</strong><span>Countries (India · UAE · USA)</span></li>
              <li><strong>8</strong><span>Years Institutional Practice (ONGC)</span></li>
            </ul>
          </div>
        }
      />

      {/* Narrative Section - The Turning Point */}
      <section className="section section-lg bg-surface">
        <div className="container">
          <div className="split-section ab-split">
            <div>
              <span className="badge ab-eyebrow">An Important Turning Point</span>
              <h2 className="ab-title">What Changed My Clinical Perspective</h2>
              <p className="ab-lead">
                Early in my practice, I noticed how often physical complaints—headaches, chronic fatigue, digestive distress, unexplained body pain—traced back to stress and emotional weight that patients carried silently.
              </p>
              <p className="ab-body">
                People would seek help for physical symptoms while quietly dealing with constant worry, poor sleep, emotional exhaustion, or work-life pressures. I wanted to look beyond the surface and understand what might be contributing to them.
              </p>
              <p className="ab-body">
                That realization led me back to studying for a Post Graduate Diploma in Psychological Counselling. It wasn't a detour from homeopathy; it was the essential completion of it.
              </p>
            </div>

            <div className="ab-quote">
              <BrandMark className="ab-panel-mark" />
              <Quote size={32} className="ab-quote-icon" />
              <p className="ab-quote-text">
                "I still believe what I believed the day I noticed that first pattern — that anxiety and chronic distress aren't something to push through quietly, and they aren't something a rushed prescription can fix. It deserves a doctor who asks the right questions, has the training to understand them, and takes the time most clinics don't."
              </p>
              <span className="ab-quote-author">— Dr. Mohini Mutha</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Timeline */}
      <section className="section bg-sand">
        <div className="container">
          <SectionHeader
            badge="Chronological Path"
            title="Growing Through Every Stage of Practice"
            subtitle="Every milestone below added something essential to how Dr. Mohini treats patients today."
            centered={true}
          />

          <ol className="ab-timeline">
            {timelineEvents.map((evt, idx) => (
              <li key={evt.title} className="ab-timeline-item">
                <span className="ab-timeline-dot" aria-hidden="true">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="card ab-timeline-card">
                  <div>
                    <span className="ab-timeline-year">{evt.year}</span>
                    <span className="badge badge-mint">{evt.badge}</span>
                  </div>
                  <div>
                    <h3>{evt.title}</h3>
                    <p>{evt.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What I Have Learned */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeader
            badge="Core Takeaways"
            title="What I Have Learned Along the Way"
            subtitle="Four guiding insights distilled from thousands of patient conversations."
            centered={true}
          />

          <div className="grid-4">
            {learnings.map((item, idx) => (
              <div key={item.title} className="card ab-card">
                <span className="ab-num">0{idx + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="section bg-soft">
        <div className="container-narrow ab-note">
          <BrandMark className="ab-note-mark" />
          <div>
            <span className="badge ab-eyebrow">A Personal Note</span>
          </div>
          <h2 className="ab-title">My Practice Continues to Evolve Through Learning and Experience</h2>
          <p className="ab-note-lead">
            More than a decade into my practice, I don't see my journey as something that has reached an endpoint. There is always another person to understand, another question to explore, and another opportunity to become a better doctor.
          </p>
          <p className="ab-note-sign">For me, that is what makes this journey meaningful.</p>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        badge="Your Journey Matters Too"
        title="Your Journey Matters Too. Start With a Conversation."
        subtitle="Whether you're looking for support with anxiety, emotional well-being, sleep or another health concern, you can begin with a personalised online consultation."
      />
    </div>
  );
}
