import React from 'react';
import '../../../styles/LandingPageStyles/index.less';
import BodySection from '../../common/Sections/BodySection';

const AboutSection = () => {
  return (
    <div className="landing-about info-section">
      <BodySection
        left={
          <div className="about-text">
            <h2>About MescFIT</h2>
            <p>
              <i>
                MescFIT and its services are based in Newark, Delaware, offering
                in-person training, online coaching, and nutrition guidance
              </i>
            </p>
          </div>
        }
        right={
          <img
            src={
              'https://fitnessvolt.com/wp-content/uploads/2021/03/chris-bumstead-750x393.jpg'
            }
            alt="MescFIT owner"
          />
        }
      />
    </div>
  );
};

export default AboutSection;
