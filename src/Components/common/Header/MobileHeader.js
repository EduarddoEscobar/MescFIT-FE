import React from 'react';
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const MobileHeader = props => {
  return (
    <header className="mobile-header">
      <FontAwesomeIcon icon={faBars} className="header-icon" />
      <div className="logo">
        <Link data-testid="header-link" to="/">
          MescFIT
        </Link>
      </div>
      <Link to="/email-form">
        <FontAwesomeIcon icon={faEnvelope} className="header-icon" />
      </Link>
    </header>
  );
};

export default MobileHeader;
