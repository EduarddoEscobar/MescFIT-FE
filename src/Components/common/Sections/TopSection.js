import React from 'react';
import mainLogo from '../../../img/MescFitLongRed.png';
import { useNavigate } from 'react-router-dom';

const TopSection = () => {
  let navigate = useNavigate();

  const handleClick = target => {
    navigate(target);
  };

  return (
    <div className="image-container top">
      <div className="landing-main">
        <div className="half center-text">
          <h1>WELCOME TO</h1>
          <img src={mainLogo} alt={'Workout Inspiration'} />
          <p>
            <i>
              At MescFIT we strive to provide the tools, resources, and guidance
              to transform your health and fitness
            </i>
          </p>
        </div>
        <div className="half desktop-only"></div>

        <button
          className="mobile-only"
          onClick={() => handleClick('/coaching')}
        >
          COACHING
        </button>
        <button
          className="mobile-only"
          onClick={() => handleClick('/exercise-library')}
        >
          EXERCISE LIBRARY
        </button>
      </div>
    </div>
  );
};

export default TopSection;
