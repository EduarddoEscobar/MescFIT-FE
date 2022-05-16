import React from 'react';

const Testimonial = props => {
  const { name, lastInitial, testimonial } = props.testimonial;
  return (
    <div>
      <p>"{testimonial}"</p>
      <h3>
        -{name}
        {lastInitial}.
      </h3>
    </div>
  );
};

export default Testimonial;
