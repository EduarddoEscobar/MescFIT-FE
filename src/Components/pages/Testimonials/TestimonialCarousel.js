import React, { useEffect, useState } from 'react';
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

const TestimonialCarousel = ({ testimonials, autoplay, dots, showOne }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let formattedData = testimonials.reduce((acc, cur, ind, arr) => {
      if (ind % 2 === 0) {
        acc.push(arr.slice(ind, ind + 2));
      }
      return acc;
    }, []);
    setData(formattedData);
  }, [testimonials]);

  return (
    <CarouselWrapper
      autoplay={!!autoplay}
      dots={dots}
      className="main-carousel"
    >
      {!showOne
        ? data.map(([testimonialOne, testimonialTwo], ind) => (
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
          ))
        : testimonials.map((testimonial, ind) => (
            <div key={ind}>
              <div className="carousel-item">
                <div className="center-text">
                  <Testimonial testimonial={testimonial} />
                </div>
              </div>
            </div>
          ))}
    </CarouselWrapper>
  );
};

export default TestimonialCarousel;
