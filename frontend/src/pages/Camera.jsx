import React, { useRef, useEffect } from 'react';
import './camera.css';

function Camera() {
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
      })
      .catch(err => {
        console.error("Error accessing webcam:", err);
      });
  }, []);

  return (
    <div className="camera-container">
      <div className="camera-view">
        <video ref={videoRef} autoPlay playsInline muted className="camera-feed" />
      </div>
      <div className="camera-feedback">
        <h2>Feedback</h2>
        <p>🤖 Real-time feedback will show here based on your gestures.</p>
      </div>
    </div>
  );
}

export default Camera;
