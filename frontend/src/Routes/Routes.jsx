import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage/Homepage";
import Header from "../Components/Header/Header";
import Blog from "../Pages/Blog/Blog";
import FullBlog from "../Pages/Blog/FullBlog";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Market from "../Pages/Market Place/Market";
import About from "../Pages/About/About";
import MarketAdd from "../Pages/Market Place/Add/MarketAdd";
import DetermineImageType from "../Components/DetermineImageType";
import FullMarketComponent from "../Pages/Market Place/FullMarketComponent";
import PostBlog from "../Pages/Blog/PostBlog";

const WebRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/postBlog" element={<PostBlog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogId" element={<FullBlog />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/market" element={<Market />} />
          <Route path="/market/:marketId" element={<FullMarketComponent />} />
          <Route path="/addmarket" element={<MarketAdd />} />
          <Route path="/determine-image" element={<DetermineImageType />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { WebRoutes };
