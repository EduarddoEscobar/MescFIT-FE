import React from 'react';
import TestimonialCarousel from '../../pages/Testimonials/TestimonialCarousel';

const TestimonialSection = ({ testimonials }) => {
  return (
    <div className="landing-testimonials info-section">
      <h2>Testimonials</h2>
      {testimonials.length > 0 && (
        <TestimonialCarousel
          testimonials={testimonials}
          autoplay={false}
          dots={true}
        />
      )}
    </div>
  );
};

export default TestimonialSection;
