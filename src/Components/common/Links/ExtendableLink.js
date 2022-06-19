import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ExtendableLink = ({ to, links, children, focus, handleClick }) => {
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <div
      className="extendable-link"
      onMouseLeave={() => setHover(false)}
      style={{
        overflow: hover ? 'visible' : 'hidden',
      }}
    >
      <div className={`main-link ${selected && 'hovered'}`}>
        <Link
          to={to}
          onMouseOver={() => setHover(true)}
          style={
            focus.includes(to)
              ? {
                  color: '#40a9ff',
                }
              : {}
          }
          onClick={() => handleClick(to)}
          className="header-link"
        >
          {children}
        </Link>
        <p
          className="mobile-only hover-button"
          onClick={() => setSelected(!selected)}
        >
          {selected ? '-' : '+'}
        </p>
      </div>
      <div
        className="extended-links"
        style={{
          maxHeight: hover || selected ? '50vh' : '0',
        }}
      >
        {links.length > 0 &&
          links.map((link, ind) => (
            <div key={ind} className="extended-link">
              <Link
                to={link.to}
                style={
                  focus.includes(link.to)
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
