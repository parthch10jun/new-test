import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  if (!testimonial) return null;

  return (
    <div className="glass-card p-6 rounded-lg shadow-lg">
      <blockquote className="text-muted-foreground italic mb-4">
        <p>"{testimonial.quote}"</p>
      </blockquote>
      {testimonial.clientInfo && (
        <cite className="block text-right text-primary not-italic">
          — {testimonial.clientInfo}
        </cite>
      )}
      {testimonial.note && <p className="text-sm text-muted-foreground/70 mt-2">{testimonial.note}</p>}
    </div>
  );
};

export default TestimonialCard;
