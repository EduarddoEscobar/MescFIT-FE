import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faCamera } from '@fortawesome/free-solid-svg-icons';

const Post = props => {
  const {
    media_type,
    thumbnail_url,
    permalink: post_url,
    caption,
    children,
  } = props;

  const getImage = () => {
    if (media_type !== 'CAROUSEL_ALBUM') return thumbnail_url;
    return children['data'][0]['media_type'] === 'VIDEO'
      ? children['data'][0]['thumbnail_url']
      : children['data'][0]['media_url'];
  };

  return (
    <div className="instagram-post-container">
      <FontAwesomeIcon
        icon={media_type === 'VIDEO' ? faVideo : faCamera}
        className="post-icon"
      />
      <a href={post_url} target="_blank" rel="noreferrer">
        <img src={getImage()} alt={caption} />
      </a>
    </div>
  );
};

export default Post;
