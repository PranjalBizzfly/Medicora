import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol>
        <li>
          <Link href="/">
            <Home size={14} />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index}>
              <ChevronRight size={13} className="breadcrumbs-sep" aria-hidden="true" />
              {isLast || !item.path ? (
                <span aria-current={isLast ? 'page' : undefined}>{item.label}</span>
              ) : (
                <Link href={item.path}>{item.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
