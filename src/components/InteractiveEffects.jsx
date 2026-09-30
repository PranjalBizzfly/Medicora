'use client';

import { useEffect } from 'react';

// Cards and photos that tilt in 3D under the pointer.
const TILT = [
  '.site-main .card',
  '.site-main .tv-card',
  '.site-main .tv-glass-card',
  '.site-main .tv-photo-card',
  '.site-main .tv-photo',
  '.site-main .tv-portrait',
  '.site-main .home-service-card',
  '.site-main .home-glass-card',
  '.site-main .home-people-card',
  '.site-main .home-blog-card',
  '.site-main .home-contact-card',
  '.site-main .home-about-photo',
  '.site-main .stat-box',
].join(',');

// Buttons that lean toward the pointer.
const MAGNETIC = '.site-main .btn-lg, .site-main .btn-primary, .navbar-actions .btn';

const MAX_TILT = 6;
const MAGNET_PULL = 0.25;

/**
 * Pointer-driven 3D tilt, glass spotlight and magnetic buttons, applied by
 * event delegation so every page gets them. Mouse / trackpad only; nothing
 * runs for touch screens or visitors who prefer reduced motion.
 */
export default function InteractiveEffects() {
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return undefined;

    let tilted = null;
    let magnet = null;

    const resetTilt = () => {
      if (!tilted) return;
      tilted.classList.remove('is-tilting');
      tilted.style.removeProperty('--tilt-x');
      tilted.style.removeProperty('--tilt-y');
      tilted = null;
    };

    const resetMagnet = () => {
      if (!magnet) return;
      magnet.style.removeProperty('--magnet-x');
      magnet.style.removeProperty('--magnet-y');
      magnet.classList.remove('is-magnetic');
      magnet = null;
    };

    const onMove = (e) => {
      const card = e.target.closest?.(TILT);
      if (card !== tilted) resetTilt();
      if (card) {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        card.style.setProperty('--tilt-x', `${(0.5 - py) * MAX_TILT}deg`);
        card.style.setProperty('--tilt-y', `${(px - 0.5) * MAX_TILT}deg`);
        card.style.setProperty('--spot-x', `${px * 100}%`);
        card.style.setProperty('--spot-y', `${py * 100}%`);
        card.classList.add('is-tilting');
        tilted = card;
      }

      const btn = e.target.closest?.(MAGNETIC);
      if (btn !== magnet) resetMagnet();
      if (btn) {
        const r = btn.getBoundingClientRect();
        btn.style.setProperty('--magnet-x', `${(e.clientX - r.left - r.width / 2) * MAGNET_PULL}px`);
        btn.style.setProperty('--magnet-y', `${(e.clientY - r.top - r.height / 2) * MAGNET_PULL}px`);
        btn.classList.add('is-magnetic');
        magnet = btn;
      }
    };

    const onLeave = () => {
      resetTilt();
      resetMagnet();
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      document.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      onLeave();
    };
  }, []);

  return null;
}
