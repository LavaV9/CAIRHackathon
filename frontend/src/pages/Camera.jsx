import React, { useEffect, useRef } from "react";
import { Hands } from '@mediapipe/hands';
import { Camera } from "@mediapipe/camera_utils";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import "./camera.css";

function CameraPage() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const hands = new Hands({
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
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        results.image,
        0,
        0,
        canvas.width,
        canvas.height
      );

      if (results.multiHandLandmarks) {
        for (const landmarks of results.multiHandLandmarks) {
          drawConnectors(ctx, landmarks, Hands.HAND_CONNECTIONS, {
            color: "#0f0",
            lineWidth: 2,
          });
          drawLandmarks(ctx, landmarks, {
            color: "#f00",
            lineWidth: 1,
          });
        }
      }

      ctx.restore();
    });

    if (
      typeof Camera === "function" &&
      videoRef.current &&
      canvasRef.current
    ) {
      const camera = new Camera(videoRef.current, {
        onFrame: async () => {
          await hands.send({ image: videoRef.current });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
  }, []);

  return (
    <div className="camera-container">
      <video ref={videoRef} className="hidden" />
      <canvas ref={canvasRef} width="640" height="480" className="camera-feed" />
      <div className="camera-feedback">
        <h2>🖐️ Feedback</h2>
        <p>Hand tracking results will appear on the canvas.</p>
      </div>
    </div>
  );
}

export default CameraPage;




