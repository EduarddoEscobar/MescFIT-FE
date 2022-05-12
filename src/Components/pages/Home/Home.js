import React, { useEffect } from 'react';
import '../../../styles/LandingPageStyles/index.less';

const Home = () => {
  useEffect(() => {
    document.title = 'MescPT';
  }, []);

  return (
    <div>
      <div className="split-div top-section">
        <div className="split-content top-content">
          <h2>Mesc Personal Training</h2>
          <p>Here to help you reach your health & fitness goals</p>
        </div>
        <div className="split-content trailer-content">
          <video autoPlay loop>
            <source src="stock_video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="split-div body-section">
        <div className="split-content image-content">
          <img
            src="https://i.ytimg.com/vi/XgPZrEHPKkk/maxresdefault.jpg"
            className="about-picture"
            alt="MescPT"
          />
        </div>
        <div className="split-content text-content">
          <h2>About MescFIT</h2>
          <p>
            MescPT LLC, is based in Newark, Delaware, offering in-person
            training, online coaching and nutrition guidance, and pre-made
            workout programs for a cheaper entry point
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
