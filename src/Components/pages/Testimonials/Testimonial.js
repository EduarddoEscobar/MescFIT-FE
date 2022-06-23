import React from 'react';
import '../../../styles/TestimonialStyles/index.less';

const Testimonial = props => {
  const { name, lastInitial, testimonial } = props.testimonial;
  return (
    <div className="testimonial-container">
      <p>
        <i>"{testimonial}"</i>
      </p>
      <h3>
        -{name}
        {lastInitial}.
      </h3>
    </div>
  );
};

export default Testimonial;
