from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np

app = Flask(__name__)
CORS(app)

# Load the model
model = tf.keras.models.load_model("best_model.h5")

# Prediction route
@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        landmarks = data.get("landmarks")  # Expecting a flat list of 63 floats (21 points × 3 coords)

        if not landmarks or len(landmarks) != 63:
            return jsonify({"error": "Invalid input"}), 400

        input_array = np.array(landmarks).reshape(1, 63)
        prediction = model.predict(input_array)
        predicted_class = np.argmax(prediction)

        return jsonify({"prediction": int(predicted_class)})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5000)

