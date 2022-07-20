import React from 'react';
import TestimonialCarousel from '../../pages/Testimonials/TestimonialCarousel';

const TestimonialSection = ({ testimonials }) => {
  return (
    <div className="landing-testimonials info-section">
      <h2>Testimonials</h2>
      {testimonials.length > 0 && (
        <>
          <div className="carousel-div desktop-only">
            <TestimonialCarousel
              testimonials={testimonials}
              autoplay={false}
              dots={true}
              showOne={false}
            />
          </div>
          <div className="carousel-div mobile-only">
            <TestimonialCarousel
              testimonials={testimonials}
              autoplay={false}
              dots={true}
              showOne={true}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default TestimonialSection;
