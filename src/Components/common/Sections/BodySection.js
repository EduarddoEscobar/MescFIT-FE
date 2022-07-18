import React from 'react';

const BodySection = ({ left, right, turnToOne }) => {
  return (
    <div className="body-section">
      <div className={turnToOne ? 'mobile-only' : 'half'}>{left}</div>
      <div className={turnToOne ? 'desktop-only' : 'half'}>{right}</div>
    </div>
  );
};

export default BodySection;
