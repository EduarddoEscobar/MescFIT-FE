import React from 'react';
import BodySection from '../../common/Sections/BodySection';
import mainLogo from '../../../img/MescFitLongRed.png';

const TopSection = () => {
  return (
    <div className="image-container top">
      <div className="landing-main">
        <BodySection
          left={
            <div>
              <h1>WELCOME TO</h1>
              <img src={mainLogo} alt={'Workout Inspiration'} />
              <p>
                <i>
                  At MescFIT we strive to provide the tools, resources, and
                  guidance to transform your health and fitness
                </i>
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default TopSection;
