'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutGrid, X, Search, ChevronDown } from 'lucide-react';
import { navigationLinks } from '../data/websiteContent';

// All 34 pages in the approved groups (navigation + home/connect + legal).
const GROUPS = [
  {
    title: 'Main',
    links: [
      { label: 'Home', path: '/' },
      { label: 'Book a Consultation', path: '/book-a-consultation' },
    ],
  },
  ...navigationLinks.filter((n) => n.children).map((n) => ({ title: n.label, links: n.children })),
  {
    title: 'Legal & Privacy',
    links: [
      { label: 'Privacy Policy', path: '/privacy-policy' },
      { label: 'Terms & Conditions', path: '/terms-and-conditions' },
      { label: 'Disclaimer', path: '/disclaimer' },
      { label: 'Cookie Policy', path: '/cookie-policy' },
      { label: 'Sitemap', path: '/sitemap' },
    ],
  },
];
const TOTAL = GROUPS.reduce((n, g) => n + g.links.length, 0);

/**
 * "Explore all pages" overview: filter by name, group pills with counts,
 * collapsible groups. Uncontrolled (own trigger) or controlled via `open`.
 */
export default function ExplorePages({ variant = 'icon', onNavigate, open: openProp, onOpenChange, hideTrigger = false, returnFocusTo }) {
  const [openState, setOpenState] = useState(false);
  const controlled = openProp !== undefined;
  const open = controlled ? openProp : openState;
  const setOpen = (value) => (controlled ? onOpenChange?.(value) : setOpenState(value));

  const pathname = usePathname();
  const [filter, setFilter] = useState('');
  const [activeGroup, setActiveGroup] = useState('All');
  const [collapsed, setCollapsed] = useState({});
  const dialogRef = useRef(null);
  const buttonRef = useRef(null);
  const filterRef = useRef(null);

  const visibleGroups = useMemo(() => {
    const q = filter.trim().toLowerCase();
    return GROUPS
      .filter((g) => activeGroup === 'All' || g.title === activeGroup)
      .map((g) => ({ ...g, links: q ? g.links.filter((l) => l.label.toLowerCase().includes(q)) : g.links }))
      .filter((g) => g.links.length);
  }, [filter, activeGroup]);

  const shownCount = visibleGroups.reduce((n, g) => n + g.links.length, 0);
  const allCollapsed = visibleGroups.length > 0 && visibleGroups.every((g) => collapsed[g.title]);

  useEffect(() => {
    if (!open) return undefined;
    const dialog = dialogRef.current;
    const trigger = buttonRef.current || returnFocusTo?.current;
    filterRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key !== 'Tab' || !dialog) return;
      const items = dialog.querySelectorAll('a[href], button, input');
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      trigger?.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const close = () => {
    setOpen(false);
    onNavigate?.();
  };

  const toggleAll = () => {
    const next = {};
    visibleGroups.forEach((g) => { next[g.title] = !allCollapsed; });
    setCollapsed((c) => ({ ...c, ...next }));
  };

  return (
    <>
      {!hideTrigger && (
        <button
          ref={buttonRef}
          type="button"
          className={{ icon: 'header-icon-btn', text: 'explore-text-btn' }[variant]}
          aria-label="Explore all pages"
          title="Explore all pages"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <LayoutGrid size={18} aria-hidden="true" />
          {variant !== 'icon' && <span>Explore all pages</span>}
        </button>
      )}

      {open && (
        <div className="explore-overlay" onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}>
          <div ref={dialogRef} className="explore-dialog" role="dialog" aria-modal="true" aria-label="Explore all pages">
            <button type="button" className="header-icon-btn explore-close" aria-label="Close" onClick={() => setOpen(false)}>
              <X size={20} aria-hidden="true" />
            </button>

            <div className="explore-toolbar">
              <div className="explore-filter">
                <Search size={18} aria-hidden="true" />
                <input
                  ref={filterRef}
                  type="search"
                  aria-label="Filter pages by name"
                  placeholder="Filter pages by name"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                />
              </div>
              <span className="explore-count">{shownCount === TOTAL ? TOTAL : `${shownCount} of ${TOTAL}`} pages</span>
              <button type="button" className="explore-collapse-all" onClick={toggleAll}>
                {allCollapsed ? 'Expand all' : 'Collapse all'}
              </button>
            </div>

            <div className="explore-pills" role="group" aria-label="Filter by section">
              {[{ title: 'All', count: TOTAL }, ...GROUPS.map((g) => ({ title: g.title, count: g.links.length }))].map((p) => (
                <button
                  key={p.title}
                  type="button"
                  className={`explore-pill ${activeGroup === p.title ? 'is-active' : ''}`}
                  aria-pressed={activeGroup === p.title}
                  onClick={() => setActiveGroup(p.title)}
                >
                  {p.title}
                  {p.title !== 'All' && <span>{p.count}</span>}
                </button>
              ))}
            </div>

            <div className="explore-sections">
              {visibleGroups.length === 0 && <p className="explore-empty">No pages match “{filter.trim()}”.</p>}
              {visibleGroups.map((g) => {
                const isCollapsed = collapsed[g.title];
                const bodyId = `explore-${g.title.replace(/\W+/g, '-').toLowerCase()}`;
                return (
                  <section key={g.title} className="explore-section">
                    <button
                      type="button"
                      className="explore-section-head"
                      aria-expanded={!isCollapsed}
                      aria-controls={bodyId}
                      onClick={() => setCollapsed((c) => ({ ...c, [g.title]: !c[g.title] }))}
                    >
                      <h2>{g.title}</h2>
                      <span className="explore-section-meta">
                        {g.links.length} {g.links.length === 1 ? 'page' : 'pages'}
                        <ChevronDown size={16} aria-hidden="true" className={isCollapsed ? '' : 'is-open'} />
                      </span>
                    </button>
                    {!isCollapsed && (
                      <ul id={bodyId} className="explore-links">
                        {g.links.map((l) => (
                          <li key={l.path}>
                            <Link
                              href={l.path}
                              className={`explore-link ${pathname === l.path ? 'is-current' : ''}`}
                              aria-current={pathname === l.path ? 'page' : undefined}
                              onClick={close}
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
