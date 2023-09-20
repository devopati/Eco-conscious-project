import React, { useState } from "react";
import { IoImageSharp } from "react-icons/io5";
import "./image.css";

const ImageContainer = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div className="image-container">
      {selectedImage ? (
        <img
          src={selectedImage}
          alt="Selected"
          width={400}
          height={200}
          style={{ objectFit: "contain" }}
        />
      ) : (
        <IoImageSharp size={300} color="grey" />
      )}
      <div>
        {selectedImage === null && (
          <h3>Upload an image to classify your waste</h3>
        )}
        <br />
      </div>
      <div className="img-btn">
        <button>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </button>
        <button style={{ backgroundColor: selectedImage === null && "grey" }}>
          Upload Image
        </button>
      </div>
    </div>
  );
};

export default ImageContainer;
