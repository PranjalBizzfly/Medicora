import React from 'react';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = false,
  badgeType = "default" // default, mint, dark
}) {
  return (
    <div className={`section-header ${centered ? 'text-center' : ''}`}>
      {badge && (
        <div className="section-tag">
          <span className={`badge ${badgeType === 'mint' ? 'badge-mint' : badgeType === 'dark' ? 'badge-dark' : ''}`}>
            {badge}
          </span>
        </div>
      )}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
