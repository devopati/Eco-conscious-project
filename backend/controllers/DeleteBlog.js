import { StatusCodes } from "http-status-codes";
import Blog from "../models/Blog.js";

const DeleteBlog = async (req, res) => {
  try {
    const { BlogId } = req.params;

    if (!BlogId) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Blog to be deleted is required" });
      return;
    }

    await Blog.findByIdAndDelete(BlogId);

    res.status(StatusCodes.OK).json({ message: "Blog deleted successfull" });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "An error occurred while deleting Blog" });
  }
};

export default DeleteBlog;
