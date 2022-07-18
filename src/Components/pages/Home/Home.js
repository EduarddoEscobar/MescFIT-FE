import React, { useEffect, useState } from 'react';
import '../../../styles/LandingPageStyles/index.less';
import { testimonials as testData } from '../../../data/Testimonials';
import AboutSection from '../../common/Sections/AboutSection';
import TestimonialSection from '../../common/Sections/TestimonialSection';
import TopSection from '../../common/Sections/TopSection';
import InstagramSection from '../../common/Sections/InstagramSection';

const Home = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    document.title = 'MescFIT';

    // For testing testimonials display
    setTestimonials(testData);
  }, []);

  return (
    <>
      <TopSection />
      <div className="landing-content image-container mid">
        <AboutSection />
      </div>
      <div className="landing-content image-container bot">
        <TestimonialSection testimonials={testimonials} />
        <InstagramSection />
      </div>
    </>
  );
};
export default Home;
