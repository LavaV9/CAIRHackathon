import React, { useRef, useEffect } from "react";
import "./camera.css";
import Hands from "@mediapipe/hands"; // this is what I changed
import * as draw from "@mediapipe/drawing_utils";

function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Start webcam
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      videoRef.current.srcObject = stream;
    });

    const hands = new Hands({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.5,
    });

    hands.onResults((results) => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the webcam frame
      ctx.drawImage(
        results.image,
        0,
        0,
        canvas.width,
        canvas.height
      );

      if (results.multiHandLandmarks) {
        for (const landmarks of results.multiHandLandmarks) {
          draw.drawConnectors(ctx, landmarks, Hands.HAND_CONNECTIONS, {
            color: "#00FF00",
            lineWidth: 4,
          });
          draw.drawLandmarks(ctx, landmarks, {
            color: "#FF0000",
            lineWidth: 2,
          });
        }
      }
    });

    const detect = async () => {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      if (video && canvas) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const onFrame = async () => {
          await hands.send({ image: video });
          requestAnimationFrame(onFrame);
        };
        onFrame();
      }
    };

    videoRef.current?.addEventListener("loadeddata", detect);
  }, []);

  return (
    <div className="camera-container">
      <video ref={videoRef} autoPlay playsInline muted className="camera-feed" />
      <canvas ref={canvasRef} className="camera-canvas" />
      <div className="camera-feedback">
        <h2>Feedback</h2>
        <p>✋ Hand tracking active — gestures will show here soon!</p>
      </div>
    </div>
  );
}

export default Camera;



