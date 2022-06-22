import React, { useEffect, useState } from 'react';
import '../../../styles/LandingPageStyles/index.less';
import { testimonials as testData } from '../../../data/Testimonials';
import AboutSection from './AboutSection';
import TestimonialSection from './TestimonialSection';
import TopSection from './TopSection';

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
    setTestimonials(formattedData);
  }, []);

  return (
    <>
      <TopSection />
      <div className="landing-content image-container mid">
        <AboutSection />
        <TestimonialSection testimonials={testimonials} />
        {/*<div className="landing-instagram info-section"></div>*/}
      </div>
    </>
  );
};
export default Home;
