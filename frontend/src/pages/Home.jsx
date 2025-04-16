import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-left">
        <h1 className="home-title">Welcome to <span className="syn-highlight">SYN</span></h1>
        <p className="home-description">
          Learn sign language with real-time AI feedback, live camera tracking, and personalized lessons.
        </p>
        <div className="home-buttons">
          <button className="primary-btn" onClick={() => navigate('/camera')}>
            Try the Camera
          </button>
          <button className="secondary-btn" onClick={() => navigate('/dashboard')}>
            Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;













