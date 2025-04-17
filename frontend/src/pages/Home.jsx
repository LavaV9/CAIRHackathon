import React from "react";
import "./home.css";
import rocket from "../assets/meowth.png";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  const starCount = 120;
  const stars = Array.from({ length: starCount }, (_, i) => {
    const size = Math.random() * 2 + 1; // random size for stars, change here if yall want to 
    const duration = 10 + Math.random() * 20; // stars moving at random time, change here if yall want to 
    const direction = Math.random() > 0.5 ? "normal" : "reverse";
    return (
      <div
        key={i}
        className="star"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${duration}s`,
          animationDirection: direction,
        }}
      ></div>
    );
  });

  return (
    <div className="starry-bg">
      {stars}
      <img src={rocket} alt="rocket" className="rocket" />

      <button className="logout-btn" onClick={() => navigate("/")}>
        Log Out
      </button>
   
      <div className="home-container">
        <h1 className="frameshift title">Welcome to SYN</h1>
        <p className="subtitle">
          Learn sign language with real-time AI feedback, live camera tracking, and personalized lessons.
        </p>
        <div className="buttons">
          <button className="camera-btn" onClick={() => navigate("/camera")}>
            Try the Camera
          </button>
          <button className="dash-btn" onClick={() => navigate("/dashboard")}>
            Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;














