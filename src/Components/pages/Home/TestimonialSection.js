import React from 'react';
import '../../../styles/LandingPageStyles/index.less';
import TestimonialCarousel from '../Testimonials/TestimonialCarousel';

const TestimonialSection = ({ testimonials }) => {
  return (
    <div className="landing-testimonials info-section">
      <h2>Testimonials</h2>
      {testimonials.length > 0 && (
        <TestimonialCarousel testimonials={testimonials} autoplay={true} />
      )}
    </div>
  );
};

export default TestimonialSection;
