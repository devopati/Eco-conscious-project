import { StatusCodes } from "http-status-codes";
import Blog from "../models/Blog.js";

const GetBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });

    res.status(StatusCodes.OK).json({ blogs });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "An error occurred while retrieving Blogs" });
  }
};

export default GetBlogs;
