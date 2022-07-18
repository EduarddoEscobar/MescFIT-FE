import React from 'react';
import image from '../../../img/AboutPicture.jpg';

const AboutSection = () => {
  return (
    <div className="landing-about info-section">
      <div className="half center-text about-text">
        <h2>About MescFIT</h2>
        <p>
          <i>
            MescFIT and its services are based in Newark, Delaware, offering
            in-person training, online coaching, and nutrition guidance
          </i>
        </p>
      </div>
      <div className="half center-text">
        <img src={image} alt="MescFIT owner" />
      </div>
    </div>
  );
};

export default AboutSection;
