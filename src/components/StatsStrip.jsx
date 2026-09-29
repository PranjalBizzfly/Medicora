import React from 'react';

const stats = [
  { number: '14+', label: 'Years of Clinical Experience', note: 'Practising homeopathy since 2012' },
  { number: '12,000+', label: 'Patients Consulted', note: 'Personalised patient-centred care' },
  { number: '8 Years', label: 'Consultant at ONGC', note: 'Structured institutional healthcare (2018–Present)' },
  { number: '3', label: 'Countries Consulted', note: 'Patients across India, UAE & USA' },
];

export default function StatsStrip({ title = "Experience You Can Count On", subtitle = "More than a decade dedicated to understanding people and their health" }) {
  return (
    <section className="section-sm stats-strip">
      <div className="container">
        {title && (
          <div className="stats-strip-head">
            <h3>{title}</h3>
            {subtitle && <p>{subtitle}</p>}
          </div>
        )}

        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-box">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <p className="stat-note">{stat.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
