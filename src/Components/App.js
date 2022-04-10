import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Home from './Home/Home';
import Catalog from './Catalog/Catalog';
import './App.css';

const App = (props) => {
  return (
    <Router>
        <header>
        <div className="logo">
            <Link data-testid="header-link" to="/">MescPT</Link>
        </div>
        <nav>
            <Link data-testid="header-link" to="/about">About Me</Link>
            <Link data-testid="header-link" to="/plans">Training Plans</Link>
            <Link data-testid="header-link" to="/one-to-onecoaching">1:1 Coaching</Link>
            <Link data-testid="header-link" to="/testimonials">Testimonials</Link>
            <Link data-testid="header-link" to="/exercise-library">Exercise Library</Link>
            <Link data-testid="header-link" to="/faq">Pricing / FAQ</Link>
        </nav>
        <div className="nav-contact">
            <a href="https://www.instagram.com/escobarmarkk/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <Link className="contact-button" data-testid="header-link" to="/email-form">Contact</Link>
        </div>
        </header>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/exercise-library" element={<Catalog />}/>
        </Routes>
    </Router>
  );
}

export default App;
