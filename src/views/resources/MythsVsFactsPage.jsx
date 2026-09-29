import React from 'react';
import Hero from '../../components/Hero';
import SectionHeader from '../../components/SectionHeader';
import CTABanner from '../../components/CTABanner';
import { mythsAndFactsList } from '../../data/websiteContent';
import {
  XCircle,
  CheckCircle,
  HelpCircle,
  UserRound,
  MessagesSquare
} from 'lucide-react';
import '../../styles/resources.css';

const principles = [
  {
    Icon: HelpCircle,
    title: 'Question Assumptions',
    text: 'Not everything circulated about health or alternative medicine is supported by genuine clinical evidence or medical responsibility.'
  },
  {
    Icon: UserRound,
    title: 'Look at the Individual',
    text: 'The same health condition or emotional challenge affects different people in markedly different ways across their physiology and life.'
  },
  {
    Icon: MessagesSquare,
    title: 'Ask Informed Questions',
    text: 'Understanding your treatment options empowers you to have more meaningful, collaborative conversations with your healthcare provider.'
  }
];

export default function MythsVsFactsPage() {
  return (
    <div className="myths-vs-facts-page">
      <Hero
        badge="Resources · Truth in Health"
        title="Myths vs Facts"
        subtitle="Separating common beliefs from better understanding. Clear, balanced explanations to help you ask informed questions about homeopathy, anxiety, and holistic care."
        breadcrumbs={[
          { label: "Resources", path: "/resources/patient-stories" },
          { label: "Myths vs Facts" }
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Frequently Asked Questions"
        secondaryCtaLink="/resources/faqs"
      />

      {/* Intro Philosophy: Better Information, Better Conversations */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeader
            badge="Evidence & Responsibility"
            title="Better Information Leads to Better Conversations"
            subtitle="Health information can often be confusing or contradictory. Understanding what is known, what is uncertain, and what is strictly individual helps you make confident healthcare choices."
            centered={true}
          />

          <div className="grid-3 rs-principles">
            {principles.map(({ Icon, title, text }) => (
              <div key={title} className="card rs-card">
                <span className="icon-tile">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            ))}
          </div>

          {/* Myths vs Facts Detailed Cards */}
          <div className="rs-myth-list">
            {mythsAndFactsList.map((item, idx) => (
              <article key={idx} className="card rs-myth-card">
                {/* Myth Row */}
                <div className="rs-myth">
                  <span className="rs-mf-icon">
                    <XCircle size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <span className="rs-mf-label">Common Myth</span>
                    <h3>"{item.myth}"</h3>
                  </div>
                </div>

                {/* Fact Row */}
                <div className="rs-fact">
                  <span className="rs-mf-icon">
                    <CheckCircle size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <span className="rs-mf-label">Clinical Fact</span>
                    <p>{item.fact}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        badge="Have a Question About Homeopathy?"
        title="Have a Question About Homeopathy?"
        subtitle="If you've heard something you're unsure about, bring your questions to the conversation and explore them openly."
      />
    </div>
  );
}
