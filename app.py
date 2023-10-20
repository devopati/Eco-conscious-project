import streamlit as st
import tensorflow as tf
import numpy as np
import keras
from tensorflow.keras.utils import load_img, img_to_array
from keras.applications.vgg16 import preprocess_input
from PIL import Image


def load_models():
    model1 = tf.keras.models.load_model('Eco_1.h5')
    model2 = tf.keras.models.load_model('waste_classification_model.h5')
    return model1, model2

def stacked_prediction(image):
    image = img_to_array(image)
    image = np.expand_dims(image, axis=0)
    image = image/255.0 
    pred1 = model1.predict(image)
    
    if pred1 > 0.5:
        st.write("The waste is inorganic.")
        pred2 = model2.predict(image)
        
        if np.argmax(pred2) == 0:
            st.write("The waste is Cardboard.")
        elif np.argmax(pred2) == 1:
            st.write("The waste is Glass.")
        elif np.argmax(pred2) == 2:
            st.write("The waste is Metal")
        elif np.argmax(pred2) == 3:
            st.write("The waste is Paper")
        elif np.argmax(pred2) == 4:
            st.write("The waste is Plastic")
    
    else:
        st.write("The waste is organic.")



st.title("Eco-Conscious Innovators")
st.write("This is a simple image classification web app to predict the type of waste")

model1, model2 = load_models()

uploaded_file = st.file_uploader("Upload an image", type=["jpg", "png"])

if uploaded_file is not None:
    image = Image.open(uploaded_file)
    st.image(image, caption="Uploaded Image", use_column_width=True)
    st.write("")
    st.write("Predicting...")
    image = image.resize((224, 224))
    stacked_prediction(image)


