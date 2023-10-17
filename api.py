from flask import Flask, request
import tensorflow as tf
from tensorflow.keras.utils import load_img, img_to_array
import numpy as np

app = Flask(__name__)
model = tf.keras.models.load_model('Eco_1.h5')
# class_labels = ['Cardboard', 'Glass', 'Metal', 'Paper', 'Plastic']

@app.route('/predict', methods=['POST'])
def predict_image(model, img):
    img = img_to_array(img)
    img = np.expand_dims(img, axis=0)
    img = img/255.0 
    prediction = model.predict(img)
    class_index = np.argmax(prediction, axis=1)
    return class_index

if __name__ == '__main__':
    app.run(port=5000)
