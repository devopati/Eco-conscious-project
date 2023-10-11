import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import RichTextEditor from "../../Components/RichTextEditor";

const PostBlog = () => {
  return (
    <>
      <Header />
      <div className="post-blog-container">
        <RichTextEditor />
      </div>
    </>
  );
};

export default PostBlog;
