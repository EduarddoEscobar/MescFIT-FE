import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Home from './Home/Home';
import './App.css';

const App = (props) => {
  return (
    <Router>
      <header>
        <h2>MescPT</h2>
        <nav>
          <Link to="/about">About Me</Link>
          <Link to="/one-to-onecoaching">1:1 Coaching</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/workout-guides">Workout Guides</Link>
          <Link to="/pricing">Pricing</Link>
        </nav>
        <div className="nav-contact">
          <a href="https://www.instagram.com/escobarmarkk/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
          <Link to="/email-form">Contact</Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
