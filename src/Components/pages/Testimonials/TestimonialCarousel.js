import React from 'react';
import { Carousel } from 'antd';
import BodySection from '../../common/Sections/BodySection';
import Testimonial from './Testimonial';

const TestimonialCarousel = props => {
  const { testimonials, autoplay } = props;

  return (
    <Carousel autoplay={!!autoplay} dots={false}>
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
