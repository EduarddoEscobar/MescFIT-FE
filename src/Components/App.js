import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise-library" element={<Catalog />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
