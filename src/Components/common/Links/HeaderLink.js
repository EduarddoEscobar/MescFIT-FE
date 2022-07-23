import React from 'react';
import { Link } from 'react-router-dom';
import ExtendableLink from './ExtendableLink';

const HeaderLink = ({ to, focus, setFocus, children, links, extendable }) => {
  const handleClick = newFocus => {
    setFocus(newFocus);
  };

  return (
    <div className="nav-link">
      {extendable ? (
        <ExtendableLink
          to={to}
          links={links}
          handleClick={handleClick}
          focus={focus}
          data-testid="header-link"
        >
          {children}
        </ExtendableLink>
      ) : (
        <div className="single-link header-link">
          <Link
            to={to}
            onClick={() => handleClick(to)}
            style={
              focus.includes(to)
                ? {
                    color: '#40a9ff',
                  }
                : {}
            }
            data-testid="header-link"
          >
            {children}
          </Link>
        </div>
      )}
    </div>
  );
};

export default HeaderLink;
