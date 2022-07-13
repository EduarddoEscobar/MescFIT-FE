import React from 'react';
import { Carousel } from 'antd';
import BodySection from '../../common/Sections/BodySection';
import Testimonial from './Testimonial';
import styled from 'styled-components';

const CarouselWrapper = styled(Carousel)`
  .slick-dots li button {
    width: 1.25vh;
    height: 1.25vh;
    border-radius: 100%;
  }
`;

const TestimonialCarousel = props => {
  const { testimonials, autoplay, dots } = props;

  return (
    <CarouselWrapper
      autoplay={!!autoplay}
      dots={dots}
      className="main-carousel"
    >
      {testimonials.map(([testimonialOne, testimonialTwo], ind) => (
        <BodySection
          key={ind}
          className="carousel-item"
          left={<Testimonial testimonial={testimonialOne} />}
          right={<Testimonial testimonial={testimonialTwo} />}
        />
      ))}
    </CarouselWrapper>
  );
};

export default TestimonialCarousel;
