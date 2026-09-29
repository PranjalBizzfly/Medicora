import React from 'react';
import { Quote, MapPin, User } from 'lucide-react';

export default function TestimonialCard({
  quote,
  author = "Patient experience",
  location,
  condition,
  category
}) {
  return (
    <figure className="card testimonial-card">
      <div>
        <div className="testimonial-card-top">
          <Quote size={30} className="testimonial-card-quote-icon" aria-hidden="true" />
          {category && <span className="badge badge-mint">{category}</span>}
        </div>

        <blockquote>“{quote}”</blockquote>
      </div>

      <figcaption className="testimonial-card-footer">
        <div className="testimonial-card-author">
          <span className="testimonial-card-avatar" aria-hidden="true">
            <User size={18} />
          </span>
          <div>
            <span className="testimonial-card-name">{author}</span>
            {location && (
              <span className="testimonial-card-location">
                <MapPin size={12} /> {location}
              </span>
            )}
          </div>
        </div>
        {condition && <span className="testimonial-card-condition">{condition}</span>}
      </figcaption>
    </figure>
  );
}
