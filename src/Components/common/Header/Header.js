import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconLink from '../Links/IconLink';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import HeaderLink from '../Links/HeaderLink';

const Header = props => {
  const [focus, setFocus] = useState('');

  return (
    <header className="desktop-only">
      <div className="logo">
        <Link data-testid="header-link" to="/" onClick={() => setFocus('/')}>
          MescFIT
        </Link>
      </div>
      <nav>
        <HeaderLink focus={focus} setFocus={setFocus} to="/about">
          About Me
        </HeaderLink>
        <HeaderLink
          focus={focus}
          setFocus={setFocus}
          to="/coaching"
          extendable={true}
          links={[
            {
              to: '/coaching/#coaching',
              title: '1:1 Coaching',
            },
            {
              to: '/coaching/#faq',
              title: 'Pricing/FAQs',
            },
          ]}
        >
          Coaching
        </HeaderLink>
        <HeaderLink
          focus={focus}
          extendable={true}
          to="/testimonials"
          setFocus={setFocus}
          links={[
            {
              to: '/testimonials/submit',
              title: 'Submit a Testimonial',
            },
          ]}
        >
          Testimonials
        </HeaderLink>
        <HeaderLink focus={focus} setFocus={setFocus} to="/exercise-library">
          Exercise Library
        </HeaderLink>
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
