import React from 'react';
import { InstagramOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import '../../../styles/FooterStyles/index.less';

const Footer = props => {
  return (
    <footer>
      {/*Top Half of Footer*/}
      <div className="footer-div footer-disclaimer">
        <div className="side-content">
          <h2>Disclaimer: </h2>
        </div>
        <div className="middle-content">
          <p>
            You should always consult your physician or healthcare provider
            before changing your diet or starting a new exercise program. The
            content on this website if for educational and informational
            purposes and should not be taken as medical advice. Choosing to use
            the content on this website prior to consent from a physician is at
            your own risk. The author will not assume any liability for any
            direct or indirect loses or damages that may result including, but
            not limited to, economic loss, injury or illness.
          </p>
        </div>
        <div className="side-content">
          <a
            href="https://www.instagram.com/escobarmarkk/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramOutlined />
          </a>
        </div>
      </div>

      {/*Lower Half of Footer*/}
      <div className="footer-div footer-links">
        <div className="footer-content main-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/coaching">Coaching</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/exercise-library">Exercise Library</Link>
          <Link to="/faq">Pricing / FAQs</Link>
        </div>
        <div className="footer-content center-text">
          <a href="mailto:escobarmark@gmail.com" className="underline">
            Email Me
          </a>
          <Link to="">Business & Coaching Inquiries</Link>
        </div>
        <div className="footer-content center-text">
          <h2>©2022 by MescFIT</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
