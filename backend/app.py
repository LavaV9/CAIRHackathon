from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib

app = Flask(__name__)
CORS(app)

# Load your trained model and label encoder
model = joblib.load("asl_model.joblib")
label_encoder = joblib.load("label_encoder.joblib")

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        landmarks = data.get("landmarks")

        # Flatten the 21x3 landmark array to 63-length
        if not landmarks or len(landmarks) != 21 or len(landmarks[0]) != 3:
            return jsonify({"error": "Invalid landmark format"}), 400

        flattened = np.array(landmarks).flatten().reshape(1, -1)
        class_index = model.predict(flattened)[0]
        class_label = label_encoder.inverse_transform([class_index])[0]

        return jsonify({"prediction": class_label})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5000)
