import React from 'react';
import { consultationSteps } from '../data/websiteContent';
import SectionHeader from './SectionHeader';
import { Headphones, ClipboardCheck, HeartHandshake, Sparkles, RefreshCw } from 'lucide-react';

const icons = [Headphones, ClipboardCheck, HeartHandshake, Sparkles, RefreshCw];

export default function ConsultationProcess({
  showHeading = true,
  title = "What to Expect During Your Consultation",
  subtitle = "A simple, considered 5-step process designed to understand your concerns and build care around you."
}) {
  return (
    <section className="section process-section">
      <div className="container">
        {showHeading && (
          <SectionHeader
            badge="Consultation Process"
            title={title}
            subtitle={subtitle}
            centered={true}
          />
        )}

        <ol className="process-grid">
          {consultationSteps.map((step, idx) => {
            const Icon = icons[idx] || HeartHandshake;
            return (
              <li key={step.number} className="card process-step">
                <div className="process-step-top">
                  <span className="process-step-number">{step.number}</span>
                  <span className="icon-tile">
                    <Icon size={22} />
                  </span>
                </div>
                <h3>{step.title}</h3>
                <p className="process-step-subtitle">{step.subtitle}</p>
                {step.description && <p>{step.description}</p>}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
