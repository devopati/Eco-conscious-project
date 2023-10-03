import express from "express";
import PostBlog from "../controllers/PostBlog.js";
import GetBlogs from "../controllers/GetBlogs.js";
import DeleteBlog from "../controllers/DeleteBlog.js";

const router = express.Router();

router.route("/post-blog").post(PostBlog);

router.route("/get-blogs").get(GetBlogs);

router.route("/delete-blog/:BlogId").delete(DeleteBlog);

export default router;
