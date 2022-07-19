import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/FooterStyles/index.less';
import {
  faTiktok,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import IconLink from '../IconLink';

const Footer = props => {
  return (
    <footer>
      {/*Top Half of Footer*/}
      <div className="footer-div footer-links">
        <div className="social-links footer-content">
          <IconLink
            href="https://www.instagram.com/escobarmarkk/"
            icon={faInstagram}
          />
          <IconLink
            href="https://www.tiktok.com/@escobarmarkk"
            icon={faTiktok}
          />
          <IconLink
            href="https://youtube.com/channel/UCnVQa9DSntayyDwU5K0-Ivw"
            icon={faYoutube}
          />
        </div>
        <div className="footer-content main-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/coaching">Coaching</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/exercise-library">Exercise Library</Link>
          <Link to="/faq">Pricing / FAQs</Link>
        </div>
        <div className="footer-content center-text footer-contact">
          <a href="mailto:escobarmark@gmail.com" className="underline italics">
            Email Me
          </a>
          <p className="mobile-only"> - </p>
          <Link to="">Business & Coaching Inquiries</Link>
        </div>
        <div className="footer-content center-text copyright">
          <h2>©2022 by MescFIT</h2>
        </div>
      </div>

      {/*Lower Half of Footer*/}
      <div className="footer-div footer-disclaimer desktop-only">
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
      </div>
    </footer>
  );
};

export default Footer;
