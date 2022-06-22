import React from 'react';
import { Carousel } from 'antd';
import BodySection from '../../common/Sections/BodySection';
import Testimonial from './Testimonial';

const TestimonialCarousel = props => {
  const { testimonials } = props;

  return (
    <Carousel>
      {testimonials.map(([testimonialOne, testimonialTwo], ind) => (
        <BodySection
          key={ind}
          className="carousel-item"
          left={<Testimonial testimonial={testimonialOne} />}
          right={<Testimonial testimonial={testimonialTwo} />}
        />
      ))}
    </Carousel>
  );
};

export default TestimonialCarousel;
