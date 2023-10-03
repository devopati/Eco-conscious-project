import { StatusCodes } from "http-status-codes";
import Blog from "../models/Blog.js";

const PostBlog = async (req, res) => {
  try {
    const { title, blogText } = req.body;

    if (!title || !blogText) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "A blog post is required" });
      return;
    }

    const blogPost = new Blog({
      title: title,
      postedAt: Date.now(),
      blogText: blogText,
    });

    await blogPost.save();

    res.status(StatusCodes.OK).json({ message: "Posted successfull" });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "An error occurred while Posting Blog" });
  }
};

export default PostBlog;
