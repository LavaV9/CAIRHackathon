import React, { useRef, useEffect, useState } from 'react';
import './camera.css';

function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [feedback, setFeedback] = useState('Waiting...');
  const [repCount, setRepCount] = useState(0);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
      })
      .catch(err => {
        console.error("Error accessing webcam:", err);
      });

    const interval = setInterval(captureFrame, 200);
    return () => clearInterval(interval);
  }, []);

  const captureFrame = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const image = canvas.toDataURL('image/jpeg');

    const res = await fetch('https://your-backend-url.com/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image })
    });

    const data = await res.json();
    setFeedback(data.feedback);
    setRepCount(data.rep_count);
  };

  return (
    <div className="camera-container">
      <div className="camera-view">
        <video ref={videoRef} autoPlay playsInline muted className="camera-feed" />
        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </div>
      <div className="camera-feedback">
        <h2>Feedback</h2>
        <p>{feedback}</p>
        <h3>Reps: {repCount}</h3>
      </div>
    </div>
  );
}

export default Camera;
