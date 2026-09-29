import React from 'react';

// Renders the Dr. Mohini Mutha "m" monogram in the current text colour.
// The source PNG is black-on-transparent, so it is used as a CSS mask.
export default function BrandMark({ className = '', variant = 'icon', style }) {
  const src = variant === 'monogram' ? '/brand/logo-monogram.png' : '/brand/logo-icon.png';
  return (
    <span
      className={`brand-mark ${className}`}
      style={{ WebkitMaskImage: `url(${src})`, maskImage: `url(${src})`, ...style }}
      aria-hidden="true"
    />
  );
}
