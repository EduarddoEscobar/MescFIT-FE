import React from 'react';
import { Link } from 'react-router-dom';
import ExtendableLink from '../Links/ExtendableLink';

const HamburgerMenu = props => {
  return (
    <div className="hamburger-menu">
      <div className="nav-link">
        <Link data-testid="header-link" to="/about">
          About Me
        </Link>
      </div>
      <div className="nav-link">
        <ExtendableLink
          data-testid="header-link"
          to="/coaching"
          links={[
            {
              to: '/coaching',
              title: '1:1 Coaching',
            },
            {
              to: '/faq',
              title: 'Pricing/FAQs',
            },
          ]}
        >
          Coaching
        </ExtendableLink>
      </div>
      <div className="nav-link">
        <ExtendableLink
          data-testid="header-link"
          to="/testimonials"
          links={[
            {
              to: '/testimonial-form',
              title: 'Submit a Testimonial',
            },
          ]}
        >
          Testimonials
        </ExtendableLink>
      </div>
      <div className="nav-link">
        <Link data-testid="header-link" to="/exercise-library">
          Exercise Library
        </Link>
      </div>
    </div>
  );
};

export default HamburgerMenu;
