'use client';

import React, { useId, useState } from 'react';
import { Plus } from 'lucide-react';

export default function FAQAccordion({ items = [], defaultOpenIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);
  const baseId = useId();

  if (!items || items.length === 0) return null;

  return (
    <div className="faq-list">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `${baseId}-panel-${idx}`;
        return (
          <div key={item.q} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
            <button
              type="button"
              className="faq-question"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
            >
              <span>{item.q}</span>
              <span className="faq-icon" aria-hidden="true">
                <Plus size={18} />
              </span>
            </button>

            {/* Always mounted so it can animate closed as well as open; hidden
                from assistive tech and keyboard focus while collapsed. */}
            <div
              id={panelId}
              className="faq-panel"
              role="region"
              aria-hidden={!isOpen}
              inert={!isOpen ? true : undefined}
            >
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
