'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import BookingForm from './BookingForm';

const BOOK_PATH = '/book-a-consultation';

/**
 * Opens the booking form in a popup for every "Book a Consultation" link on the site,
 * so no individual link needs changing. The /book-a-consultation page still works on
 * its own (direct visits, new tabs, no-JS), and links there are left alone.
 */
export default function BookingModal() {
  const [open, setOpen] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const pathname = usePathname();
  const dialogRef = useRef(null);
  const lastFocus = useRef(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest?.('a[href]');
      if (!a || a.target === '_blank') return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname.replace(/\/$/, '') !== BOOK_PATH) return;
      if (window.location.pathname.replace(/\/$/, '') === BOOK_PATH) return;
      e.preventDefault();
      lastFocus.current = a;
      setFormKey((k) => k + 1);
      setOpen(true);
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // Focus the first field (not the close button) so typing can start straight away.
    dialogRef.current?.querySelector('input.bk-input, button')?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const f = [...dialogRef.current.querySelectorAll('button, input, select, textarea, a[href]')]
        .filter((el) => !el.disabled && el.tabIndex !== -1 && el.offsetParent !== null);
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
      lastFocus.current?.focus?.();
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div className="bk-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}>
      <div ref={dialogRef} className="bk-dialog" role="dialog" aria-modal="true" aria-labelledby="bk-title">
        <button type="button" className="bk-close" onClick={close} aria-label="Close booking form">
          <X size={18} />
        </button>
        <BookingForm key={formKey} variant="modal" onClose={close} />
      </div>
    </div>
  );
}
