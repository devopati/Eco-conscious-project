import React from "react";
import ImageContainer from "./ImageContainer";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const DetermineImageType = () => {
  return (
    <>
      <Header />
      <div className="image-type-container">
        <ImageContainer />
      </div>
      <Footer />
    </>
  );
};

export default DetermineImageType;
