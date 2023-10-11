import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "./Richtext.css";
import axios from "axios";

const EditorConvertToHTML = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const [blogText, setBlogText] = useState("");
  const [title, setTitle] = useState("");

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    setBlogText(draftToHtml(convertToRaw(newEditorState.getCurrentContent())));
  };
  const editorWrapperStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "4px",
    scrollbarColor: "white",
  };

  const textareaStyle = {
    marginTop: "10px",
    width: "100%",
    minHeight: "200px",
    padding: "10px",
  };
  const titleStyle = {
    marginTop: "10px",
    width: "100%",
    minHeight: "70px",
    padding: "10px",
    fontFamily: "inherit",
    border: "1px solid #ccc",
    fontSize: "21px",
    fontWeight: "bold",
    textTransform: "capitalize",
  };

  const [isLoading, setIsLoading] = useState(false);

  const onSubitHandler = async (e) => {
    // e.preventDefault();
    if (!title || !blogText) {
      alert("Blog post field cannot be empty");
      return;
    }
    const blog = {
      title,
      blogText,
    };

    try {
      setIsLoading(true);
      const res = await axios.post(
        "http://localhost:5000/api/blog/post-blog",
        blog
      );
      setIsLoading(false);
      alert(res?.message);
    } catch (error) {
      console.log(err);
    }
  };

  return (
    <div style={{ marginBottom: "160px" }}>
      <div className="title">
        <textarea
          style={titleStyle}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Blog title here"
        />
      </div>
      <div style={editorWrapperStyle}>
        <Editor
          editorState={editorState}
          wrapperClassName="editor-wrapper"
          editorClassName="editor-style"
          onEditorStateChange={onEditorStateChange}
          toolbarClassName="toolbar-class"
          toolbar={{
            fontSize: {
              options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48],
            },
            options: [
              "inline",
              "blockType",
              "fontSize",
              "fontFamily",
              "list",
              "textAlign",
              "colorPicker",
              "remove",
              "history",
            ],
          }}
          placeholder="Enter blog text here"
        />
      </div>

      <div className="post-blog-btn">
        <button onClick={() => !isLoading && onSubitHandler()}>
          {isLoading ? "Posting..." : "Post Blog"}
        </button>
      </div>
      {/* <textarea
        style={textareaStyle}
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      /> */}

      <div className="blog-preview">
        <h3>Blog Preview</h3>
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: blogText }}></div>
      </div>
      {/* <div className="post-blog-btn">
        <button onClick={() => onSubitHandler()}>Post Blog</button>
      </div> */}
    </div>
  );
};

export default EditorConvertToHTML;
