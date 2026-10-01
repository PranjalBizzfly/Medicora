import React from 'react';

// Default captions follow the source "Page 2 – About Me", Section 2 (Intro / Statistics).
const defaultStats = [
  { number: '12,000+', label: 'Patients consulted' },
  { number: '14+', label: 'Years of clinical experience' },
  { number: '8 Years', label: 'Consultant Homoeopathic Physician at ONGC' },
  { number: '3 Countries', label: 'Patients consulted across India, UAE & USA' },
];

export default function StatsStrip({
  eyebrow,
  title = "Experience you can count on",
  subtitle = "More than a decade dedicated to understanding people and their health",
  items = defaultStats,
}) {
  return (
    <section className="section-sm stats-strip">
      <div className="container">
        {(eyebrow || title) && (
          <div className="stats-strip-head">
            {eyebrow && <span className="badge">{eyebrow}</span>}
            {title && <h3>{title}</h3>}
            {subtitle && <p>{subtitle}</p>}
          </div>
        )}

        {items.length > 0 && (
          <div className={`stats-grid ${items.length === 3 ? 'stats-grid-3' : ''}`}>
            {items.map((stat) => (
              <div key={stat.label} className="stat-box">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                {stat.note && <p className="stat-note">{stat.note}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
