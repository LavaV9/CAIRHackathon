import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Camera from './pages/Camera';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="bg-white text-gray-800 min-h-screen font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/camera" element={<Camera />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
