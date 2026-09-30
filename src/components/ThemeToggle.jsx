'use client';

import React, { useSyncExternalStore } from 'react';
import { Moon, Sun } from 'lucide-react';

export const THEME_STORAGE_KEY = 'medicora-theme';

// The <html data-theme> attribute (set before paint in layout.jsx) is the single source of truth.
function subscribe(callback) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
}
const getTheme = () => (document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
const getServerTheme = () => 'light';

/** Light/dark switch; the choice is remembered on this device. */
export default function ThemeToggle({ className = '' }) {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    const root = document.documentElement;
    root.classList.add('theme-transition');
    root.setAttribute('data-theme', next);
    window.setTimeout(() => root.classList.remove('theme-transition'), 350);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage unavailable (private mode): the choice lasts for this visit only.
    }
  };

  const label = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <button type="button" className={`header-icon-btn ${className}`} onClick={toggle} aria-label={label} title={label}>
      {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  );
}
