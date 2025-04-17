import React, { useRef, useEffect } from 'react';
import './camera.css';

function Camera() {
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch(err => {
        console.error("Error accessing webcam:", err);
      });
  }, []);

  return (
    <div className="camera-page">
      <div className="camera-left">
        <video ref={videoRef} autoPlay playsInline muted className="camera-feed" />
      </div>
      <div className="camera-right">
        <h1 className="feedback-title">Live Feedback</h1>
        <p className="feedback-text">Real-time AI interpretation will appear here as you sign.</p>
        <div className="feedback-box">
          <p>🤖 Waiting for input...</p>
        </div>
      </div>
    </div>
  );
}

export default Camera;


