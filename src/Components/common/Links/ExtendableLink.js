import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ExtendableLink = ({ to, links, children, focus, handleClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="extendable-link"
      onMouseLeave={() => setHover(false)}
      style={{
        overflow: hover ? 'visible' : 'hidden',
      }}
    >
      <div className="main-link">
        <Link
          to={to}
          onMouseOver={() => setHover(true)}
          style={
            focus === to
              ? {
                  color: '#40a9ff',
                }
              : {}
          }
          onClick={() => handleClick(to)}
        >
          {children}
        </Link>
      </div>
      <div
        className="extended-links"
        style={{
          maxHeight: hover ? '50vh' : '0vh',
        }}
      >
        {links.length > 0 &&
          links.map((link, ind) => (
            <div key={ind} className="extended-link">
              <Link
                to={link.to}
                style={
                  focus === link.to
                    ? {
                        color: '#40a9ff',
                      }
                    : {}
                }
                onClick={() => handleClick(link.to)}
              >
                {link.title}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ExtendableLink;