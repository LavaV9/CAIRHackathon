from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np
import mediapipe as mp
import base64
from io import BytesIO
from PIL import Image
import math

app = Flask(__name__)
CORS(app)

mp_pose = mp.solutions.pose
pose = mp_pose.Pose(min_detection_confidence=0.6, min_tracking_confidence=0.6)

rep_count = 0
stage = None
bad_back_during_rep = False
did_go_low_enough = False

def calculate_angle(a, b, c):
    a, b, c = np.array(a), np.array(b), np.array(c)
    radians = np.arctan2(c[1]-b[1], c[0]-b[0]) - np.arctan2(a[1]-b[1], a[0]-b[0])
    angle = np.abs(radians * 180.0 / np.pi)
    return 360 - angle if angle > 180.0 else angle

@app.route('/predict', methods=['POST'])
def predict():
    global rep_count, stage, bad_back_during_rep, did_go_low_enough

    try:
        img_data = request.json['image'].split(',')[1]
        img_bytes = base64.b64decode(img_data)
        img = Image.open(BytesIO(img_bytes)).convert("RGB")
        frame = np.array(img)

        results = pose.process(frame)
        feedback = "Waiting..."

        if results.pose_landmarks:
            landmarks = results.pose_landmarks.landmark

            shoulder = [landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].x,
                        landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].y]
            elbow = [landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].x,
                     landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].y]
            wrist = [landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].x,
                     landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].y]
            hip = [landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].x,
                   landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].y]
            knee = [landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].x,
                    landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].y]

            elbow_angle = calculate_angle(shoulder, elbow, wrist)
            back_angle = calculate_angle(shoulder, hip, knee)

            if back_angle < 160:
                bad_back_during_rep = True
            if elbow_angle <= 90:
                did_go_low_enough = True
                stage = "down"
            if elbow_angle > 160 and stage == "down":
                stage = "up"
                rep_count += 1
                if not did_go_low_enough:
                    feedback = f"Push-Up #{rep_count}: ❌ Didn’t go low enough!"
                elif bad_back_during_rep:
                    feedback = f"Push-Up #{rep_count}: ❌ Keep your back straight!"
                else:
                    feedback = f"Push-Up #{rep_count}: ✅ Good Form!"
                bad_back_during_rep = False
                did_go_low_enough = False
            else:
                feedback = f"Push-Up #{rep_count}: ⏳ In Progress"

            return jsonify({
                "rep_count": rep_count,
                "feedback": feedback,
                "elbow_angle": int(elbow_angle),
                "back_angle": int(back_angle)
            })

        return jsonify({"feedback": "No pose detected", "rep_count": rep_count})

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
