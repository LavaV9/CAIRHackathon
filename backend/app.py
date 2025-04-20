from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import tensorflow as tf

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Load your model
model = tf.keras.models.load_model("model.h5")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    print("RECEIVED DATA:", data)  # Debugging
    landmarks = data.get("landmarks")

    if not landmarks:
        return jsonify({"error": "No landmarks provided"}), 400

    # Preprocess landmarks
    landmarks = np.array(landmarks).flatten().reshape(1, -1)

    prediction = model.predict(landmarks)
    predicted_class = np.argmax(prediction)

    return jsonify({"prediction": int(predicted_class)})

if __name__ == "__main__":
    app.run(debug=True)


