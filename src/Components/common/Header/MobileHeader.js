import React, { useState } from 'react';
import { faBars, faEnvelope, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';

const MobileHeader = props => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    console.log(!menuOpen);
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="mobile-only">
      {menuOpen && <HamburgerMenu />}
      <div className="header-container">
        {!menuOpen && (
          <FontAwesomeIcon
            icon={faBars}
            className="header-icon"
            onClick={handleClick}
          />
        )}
        {menuOpen && (
          <FontAwesomeIcon
            icon={faXmark}
            className="header-icon"
            onClick={handleClick}
          />
        )}
        <div className="logo">
          <Link data-testid="header-link" to="/">
            MescFIT
          </Link>
        </div>
        <Link to="/email-form">
          <FontAwesomeIcon icon={faEnvelope} className="header-icon" />
        </Link>
      </div>
    </header>
  );
};

export default MobileHeader;
