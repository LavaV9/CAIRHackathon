import React, { useEffect, useRef, useState } from "react";
import "./camera.css";

function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext("2d");

    if (!window.Hands || !window.Camera) {
      console.error("MediaPipe scripts not loaded!");
      return;
    }

    const hands = new window.Hands({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.7,
    });

    hands.onResults((results) => {
      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      canvasCtx.drawImage(
        results.image,
        0,
        0,
        canvasElement.width,
        canvasElement.height
      );

      if (results.multiHandLandmarks) {
        for (const landmarks of results.multiHandLandmarks) {
          window.drawConnectors(canvasCtx, landmarks, window.HAND_CONNECTIONS, {
            color: "#00FF00",
            lineWidth: 2,
          });
          window.drawLandmarks(canvasCtx, landmarks, {
            color: "#FF0000",
            lineWidth: 1,
          });

          // 🎯 Send landmarks to backend (you can enhance this)
          fetch("http://localhost:5000/predict", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ landmarks }),
          })
            .then((res) => res.json())
            .then((data) => {
              setPrediction(data.prediction);
            })
            .catch((err) => console.error("Prediction error:", err));
        }
      }

      canvasCtx.restore();
    });

    const startCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoElement.srcObject = stream;
      videoElement.play();

      new window.Camera(videoElement, {
        onFrame: async () => {
          await hands.send({ image: videoElement });
        },
        width: 640,
        height: 480,
      }).start();
    };

    startCamera();
  }, []);

  return (
    <div className="camera-container">
      <video ref={videoRef} className="camera-feed" playsInline autoPlay muted />
      <canvas ref={canvasRef} className="camera-overlay" width="640" height="480" />
      <div className="camera-feedback">
        <h2>Feedback</h2>
        <p>🤖 Prediction: {prediction || "Waiting for input..."}</p>
      </div>
    </div>
  );
}

export default Camera;


