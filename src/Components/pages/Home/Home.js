import React, { useEffect } from 'react';
import '../../../styles/LandingPageStyles/index.less';
import BodySection from '../../common/Sections/BodySection';
import mainLogo from '../../../img/MescFitLongRed.png';

const Home = () => {
  useEffect(() => {
    document.title = 'MescFIT';
  }, []);

  return (
    <div className="image-container">
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
export default Home;
