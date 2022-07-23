import React from 'react';
import HeaderLink from '../Links/HeaderLink';

const HamburgerMenu = ({ focus, setFocus, menuOpen }) => {
  return (
    <div
      className="hamburger-menu"
      style={{
        maxHeight: menuOpen ? '100vh' : '0',
      }}
    >
      <HeaderLink to="/about" focus={focus} setFocus={setFocus}>
        About Me
      </HeaderLink>
      <HeaderLink
        to="/coaching"
        focus={focus}
        setFocus={setFocus}
        links={[
          {
            to: '/coaching/#one-to-one',
            title: '1:1 Coaching',
          },
          {
            to: '/coaching/#faq',
            title: 'Pricing/FAQs',
          },
        ]}
        extendable={true}
      >
        Coaching
      </HeaderLink>
      <HeaderLink
        to="/testimonials"
        focus={focus}
        setFocus={setFocus}
        links={[
          {
            to: '/testimonials/submit',
            title: 'Submit a Testimonial',
          },
        ]}
        extendable={true}
      >
        Testimonials
      </HeaderLink>
      <HeaderLink to="/exercise-library" focus={focus} setFocus={setFocus}>
        Exercise Library
      </HeaderLink>
    </div>
  );
};

export default HamburgerMenu;
