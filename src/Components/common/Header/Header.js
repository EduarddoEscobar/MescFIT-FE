import React from 'react';
import { Link } from 'react-router-dom';
import IconLink from '../IconLink';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import ExtendableLink from './ExtendableLink';

const Header = props => {
  return (
    <header className="desktop-only">
      <div className="logo">
        <Link data-testid="header-link" to="/">
          MescFIT
        </Link>
      </div>
      <nav>
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
      </nav>
      <div className="nav-contact">
        <IconLink
          icon={faInstagram}
          href="https://www.instagram.com/escobarmarkk/"
        />
        <Link
          className="contact-button"
          data-testid="header-link"
          to="/email-form"
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
};

export default Header;
