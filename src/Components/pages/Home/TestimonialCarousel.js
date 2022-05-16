import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import BodySection from '../../common/Sections/BodySection';
import Testimonial from '../Testimonials/Testimonial';

const TestimonialCarousel = props => {
  const { testimonials } = props;

  useEffect(() => {
    console.log(props);
  }, [props]);

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
      {/*<div>*/}
      {/*  <Testimonial testimonial={testimonials[0][0]} />*/}
      {/*  <Testimonial testimonial={testimonials[0][1]} />*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <Testimonial testimonial={testimonials[1][0]} />*/}
      {/*  <Testimonial testimonial={testimonials[1][1]} />*/}
      {/*</div>*/}
    </Carousel>
  );
};

export default TestimonialCarousel;
