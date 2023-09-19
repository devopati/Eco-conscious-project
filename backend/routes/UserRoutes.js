import express from "express";
import RegisterUser from "../controllers/RegisterUser.js";
import LoginUser from "../controllers/LoginUser.js";
const router = express.Router();

router.route("/register").post(RegisterUser);

router.route("/login").post(LoginUser);

export default router;
