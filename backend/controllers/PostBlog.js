import { StatusCodes } from "http-status-codes";

const PostBlog = async (req, res) => {
  try {
    const { blog } = req.body;

    if(!blog)
   
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "An error occurred while Posting Blog" });
  }
};

export default PostBlog;
