import React, { useEffect, useState } from 'react';
import '../../../styles/LandingPageStyles/index.less';
import BodySection from '../../common/Sections/BodySection';
import mainLogo from '../../../img/MescFitLongRed.png';
import { testimonials as testData } from '../../../data/Testimonials';
import TestimonialCarousel from './TestimonialCarousel';

const Home = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    document.title = 'MescFIT';

    // For testing testimonials display
    let formattedData = testData.reduce((acc, cur, ind, arr) => {
      if (ind % 2 === 0) {
        acc.push(arr.slice(ind, ind + 2));
      }
      return acc;
    }, []);
    console.log(formattedData);
    setTestimonials(formattedData);
  }, []);

  return (
    <>
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
      <div className="landing-info image-container mid">
        <div className="landing-about info-section">
          <BodySection
            left={
              <div>
                <h2>About MescFIT</h2>
                <p>
                  MescFIT and its services are based in Newark, Delaware,
                  offering in-person training, online coaching, and nutrition
                  guidance
                </p>
              </div>
            }
          />
        </div>
        <div className="landing-testimonials info-section">
          {testimonials.length > 0 && (
            <TestimonialCarousel testimonials={testimonials} />
          )}
        </div>
      </div>
    </>
  );
};
export default Home;
