from flask import Flask, request
import tensorflow as tf
from tensorflow.keras.utils import load_img, img_to_array
import numpy as np
from tensorflow.keras.preprocessing import image as img_prep

app = Flask(__name__)
model = tf.keras.models.load_model('Eco_1.h5')
class_labels = ['Cardboard', 'Glass', 'Metal', 'Paper', 'Plastic']

@app.route('/classify', methods=['POST']) 
def prepare_image(image_path):
    # Load the image
    img = img_prep.load_img(image_path, target_size=(224, 224))
    # Convert the image to a numpy array
    img_array = img_prep.img_to_array(img)
    # Scale the image pixels to the range 0-1 
    img_array /= 255.0
    # Expand dimensions to match the shape that the model expects (1, 224, 224, 3)
    img_expanded = np.expand_dims(img_array, axis=0)
    return img_expanded

def classify_image():
    uploaded_file = request.files['image']
    if uploaded_file.filename != '':
        image_path = "images/" + uploaded_file.filename
        uploaded_file.save(image_path)
        image = prepare_image(image_path)  
        prediction = model.predict(image)
        class_index = np.argmax(prediction, axis=1)
    return class_index


if __name__ == '__main__':
    app.run(port=5000)
