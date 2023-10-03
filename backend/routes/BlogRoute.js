import express from "express";
import PostBlog from "../controllers/PostBlog.js";

const router = express.Router();

router.route("/post-blog").post(PostBlog);

export default router;
