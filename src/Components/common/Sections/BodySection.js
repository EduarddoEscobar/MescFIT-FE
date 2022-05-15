import React from 'react';

const BodySection = ({ left, right }) => {
  return (
    <div className="body-section">
      <div className="half">{left}</div>
      <div className="half">{right}</div>
    </div>
  );
};

export default BodySection;
