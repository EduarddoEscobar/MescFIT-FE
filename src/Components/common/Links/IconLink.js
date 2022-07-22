import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconLink = ({ href, icon }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

export default IconLink;
