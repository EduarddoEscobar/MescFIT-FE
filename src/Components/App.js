import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/WIP/NotFound';
import Coaching from './pages/Coaching/Coaching';

const App = () => {
  return (
    <div className="top-of-page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
