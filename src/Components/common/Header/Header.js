import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/HeaderStyles/index.less';
import IconLink from '../IconLink';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Header = props => {
  return (
    <header className="desktop-header">
      <div className="logo">
        <Link data-testid="header-link" to="/">
          MescFIT
        </Link>
      </div>
      <nav>
        <Link data-testid="header-link" to="/about">
          About Me
        </Link>
        <Link data-testid="header-link" to="/coaching">
          Coaching
        </Link>
        <Link data-testid="header-link" to="/testimonials">
          Testimonials
        </Link>
        <Link data-testid="header-link" to="/exercise-library">
          Exercise Library
        </Link>
        <Link data-testid="header-link" to="/faq">
          Pricing / FAQ
        </Link>
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
