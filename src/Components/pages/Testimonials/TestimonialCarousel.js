import React from 'react';
import { Carousel } from 'antd';
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
        <div key={ind}>
          <div className="carousel-item">
            <div className="half center-text">
              <Testimonial testimonial={testimonialOne} />
            </div>
            <div className="half center-text">
              <Testimonial testimonial={testimonialTwo} />
            </div>
          </div>
        </div>
      ))}
    </CarouselWrapper>
  );
};

export default TestimonialCarousel;
