import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../../pages/Instagram/Post';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const InstagramSection = props => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://graph.facebook.com/v14.0/${process.env.REACT_APP_INSTAGRAM_BUSINESS_ID}/media?fields=media_type,thumbnail_url,permalink,caption,children{media_type,media_url, thumbnail_url}&limit=6&access_token=${process.env.REACT_APP_INSTAGRAM_API_TOKEN}`
      )
      .then(res => {
        setPosts(res.data.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="landing-posts">
      <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
      <div className="instagram-section">
        {posts && posts.map(post => <Post key={post.id} {...post} />)}
      </div>
    </div>
  );
};

export default InstagramSection;
