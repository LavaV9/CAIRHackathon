import React, { useEffect, useRef, useState } from "react";
import "./camera.css";

function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [prediction, setPrediction] = useState("Waiting for input...");

  const sendPredictionRequest = async (landmarkArray) => {
    if (!landmarkArray || landmarkArray.length === 0) {
      console.warn("No landmarks to send.");
      return;
    }

    try {
      const res = await fetch("https://cairhackathon.onrender.com/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ landmarks: landmarkArray }),
      });

      const data = await res.json();
      setPrediction(data.prediction);
    } catch (err) {
      console.error("Prediction error:", err);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext("2d");

    if (!window.Hands || !window.Camera || !window.drawConnectors) {
      console.error("MediaPipe scripts not loaded!");
      return;
    }

    const hands = new window.Hands({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.8,
      minTrackingConfidence: 0.8,
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
            lineWidth: 3,
          });
          window.drawLandmarks(canvasCtx, landmarks, {
            color: "#FF0000",
            lineWidth: 2,
          });

          const landmarkArray = landmarks.map(p => [p.x, p.y, p.z]);
          sendPredictionRequest(landmarkArray);
        }
      }

      canvasCtx.restore();
    });

    const startCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoElement.srcObject = stream;

      videoElement.onloadedmetadata = () => {
        videoElement.play();

        const camera = new window.Camera(videoElement, {
          onFrame: async () => {
            await hands.send({ image: videoElement });
          },
          width: 640,
          height: 480,
        });

        camera.start();
      };
    };

    startCamera();
  }, []);

  return (
    <div className="camera-container">
      <div className="camera-view">
        <video ref={videoRef} className="camera-feed" playsInline autoPlay muted />
        <canvas ref={canvasRef} className="camera-overlay" width="640" height="480" />
      </div>
      <div className="camera-feedback">
        <h2>Make A SYN</h2>
        <p>🤖 Letter: {prediction}</p>
      </div>
    </div>
  );
}

export default Camera;
