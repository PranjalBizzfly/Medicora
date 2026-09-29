'use client';

import React, { useState } from 'react';
import Hero from '../../components/Hero';
import SectionHeader from '../../components/SectionHeader';
import CTABanner from '../../components/CTABanner';
import {
  Mic,
  Users,
  HeartHandshake,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import '../../styles/resources.css';

const topics = [
  {
    Icon: HeartHandshake,
    title: 'Health & Wellbeing',
    text: 'Sharing practical, evidence-conscious perspectives on lifestyle habits, immune resilience, and preventive everyday wellness for modern professionals.'
  },
  {
    Icon: Users,
    title: 'Mental & Emotional Health',
    text: 'Creating an open, supportive dialogue about workplace stress, anxiety management, burnout prevention, and the physical manifestations of emotional overload.'
  },
  {
    Icon: Sparkles,
    title: 'Homeopathy & Awareness',
    text: 'Thoughtful discussions demystifying classical homeopathy, debunking common myths, and explaining how holistic and conventional medicine work complementarily.'
  }
];

const audiences = [
  "Corporate Wellness Programmes",
  "Health Awareness Sessions",
  "Women's Wellness Events",
  "Stress Management Workshops",
  "Mental Health & Psychosomatic Panels",
  "Community Health Programmes",
  "Educational Institutions & Colleges"
];

const feedback = [
  "A thoughtful and engaging perspective that made the conversation easy to understand.",
  "The discussion created a comfortable space for questions and meaningful conversation.",
  "Clear, practical and genuinely informative."
];

export default function InviteMeToSpeakPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [speakerForm, setSpeakerForm] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    eventType: 'Corporate Wellness Programme',
    eventDate: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="invite-speaker-page">
      <Hero
        badge="Keynote & Health Workshops"
        title="Invite Dr. Mohini to Speak"
        subtitle="Conversations that create awareness and understanding. Bringing clinical insight, psychological counselling, and holistic health awareness to corporate and community audiences."
        breadcrumbs={[
          { label: "Resources", path: "/resources/patient-stories" },
          { label: "Invite Me To Speak" }
        ]}
        primaryCtaText="Send Speaking Inquiry"
        primaryCtaLink="#speaker-form"
        secondaryCtaText="View Achievements"
        secondaryCtaLink="/credentials/achievements"
      />

      {/* 3 Speaking Areas */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeader
            badge="Speaking Areas"
            title="Keynote Topics & Workshop Focus"
            subtitle="Engaging, informative sessions designed to humanize healthcare and promote emotional resilience."
            centered={true}
          />

          <div className="grid-3">
            {topics.map(({ Icon, title, text }) => (
              <div key={title} className="card rs-card rs-topic">
                <span className="icon-tile">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences / Formats */}
      <section className="section bg-sand">
        <div className="container">
          <div className="split-section">
            <div className="rs-split-intro">
              <span className="badge">Audience Settings</span>
              <h2>Sessions Tailored to Your Organization</h2>
              <p className="rs-lead">
                With 14+ years of clinical practice and institutional healthcare experience at ONGC, Dr. Mohini connects effectively with diverse audiences:
              </p>

              <div className="rs-audience-grid">
                {audiences.map((aud) => (
                  <div key={aud} className="rs-audience">
                    <CheckCircle size={16} aria-hidden="true" />
                    <span>{aud}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Speaking Experience Feedback */}
            <div className="rs-feedback">
              <h3>Audience & Event Feedback</h3>

              <div className="rs-feedback-list">
                {feedback.map((quote) => (
                  <figure key={quote} className="rs-feedback-item">
                    <blockquote>"{quote}"</blockquote>
                    <figcaption>Event feedback</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaker Inquiry Form */}
      <section id="speaker-form" className="section bg-surface">
        <div className="container-narrow">
          <SectionHeader
            badge="Collaboration Inquiry"
            title="Have an Event in Mind?"
            subtitle="I would be happy to explore opportunities to speak, collaborate, or contribute to a meaningful conversation."
            centered={true}
          />

          {formSubmitted ? (
            <div className="card rs-success">
              <div className="rs-success-icon">
                <CheckCircle size={32} aria-hidden="true" />
              </div>
              <h3>Thank You for Reaching Out</h3>
              <p>
                We have received your speaking request for <strong>{speakerForm.organization || speakerForm.name}</strong>. Our team will review the event details and get back to you.
              </p>
              <button type="button" className="btn btn-secondary" onClick={() => setFormSubmitted(false)}>
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <div className="card rs-form-card">
              <form onSubmit={handleSubmit} className="rs-form">
                <div className="grid-2">
                  <div className="rs-field">
                    <label htmlFor="speaker-name">Your Name / Coordinator *</label>
                    <input
                      id="speaker-name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Full name"
                      value={speakerForm.name}
                      onChange={(e) => setSpeakerForm({ ...speakerForm, name: e.target.value })}
                    />
                  </div>
                  <div className="rs-field">
                    <label htmlFor="speaker-organization">Company / Organization *</label>
                    <input
                      id="speaker-organization"
                      type="text"
                      required
                      autoComplete="organization"
                      placeholder="Organization or group name"
                      value={speakerForm.organization}
                      onChange={(e) => setSpeakerForm({ ...speakerForm, organization: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid-2">
                  <div className="rs-field">
                    <label htmlFor="speaker-email">Email Address *</label>
                    <input
                      id="speaker-email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="contact@company.com"
                      value={speakerForm.email}
                      onChange={(e) => setSpeakerForm({ ...speakerForm, email: e.target.value })}
                    />
                  </div>
                  <div className="rs-field">
                    <label htmlFor="speaker-phone">Phone / WhatsApp *</label>
                    <input
                      id="speaker-phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="+91 98765 43210"
                      value={speakerForm.phone}
                      onChange={(e) => setSpeakerForm({ ...speakerForm, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid-2">
                  <div className="rs-field">
                    <label htmlFor="speaker-event-type">Event Type</label>
                    <select
                      id="speaker-event-type"
                      value={speakerForm.eventType}
                      onChange={(e) => setSpeakerForm({ ...speakerForm, eventType: e.target.value })}
                    >
                      <option>Corporate Wellness Programme</option>
                      <option>Health Awareness Session</option>
                      <option>Women's Wellness Event</option>
                      <option>Stress Management Session</option>
                      <option>Panel Discussion / Interview</option>
                      <option>Community Health Programme</option>
                    </select>
                  </div>
                  <div className="rs-field">
                    <label htmlFor="speaker-date">Tentative Date</label>
                    <input
                      id="speaker-date"
                      type="date"
                      value={speakerForm.eventDate}
                      onChange={(e) => setSpeakerForm({ ...speakerForm, eventDate: e.target.value })}
                    />
                  </div>
                </div>

                <div className="rs-field">
                  <label htmlFor="speaker-message">Topic or Event Details</label>
                  <textarea
                    id="speaker-message"
                    rows={4}
                    placeholder="Tell us about your audience, session goals, and preferred format (in-person or webinar)..."
                    value={speakerForm.message}
                    onChange={(e) => setSpeakerForm({ ...speakerForm, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg rs-submit">
                  <Mic size={16} aria-hidden="true" />
                  <span>Invite Dr. Mohini to Speak</span>
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        badge="Start the Conversation"
        title="Start with a Meaningful Conversation"
        subtitle="Explore health talks, workshops, and awareness sessions tailored to your audience."
      />
    </div>
  );
}
