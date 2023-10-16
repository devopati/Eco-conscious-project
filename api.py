from flask import Flask, request
import tensorflow as tf
from tensorflow.keras.utils import load_img, img_to_array
import numpy as np

app = Flask(__name__)
model = tf.keras.models.load_model('Eco_1.h5')

@app.route('/predict', methods=['POST'])
def predict():
    img = request.files['image']
    # Preprocess your image here
    image = img_to_array(image)
    image = np.expand_dims(image, axis=0)
    image = image/255.0 
    prediction = model.predict(image)
    return {'prediction': prediction.tolist()}

if __name__ == '__main__':
    app.run(port=5000)