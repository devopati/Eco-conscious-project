import express from "express";
import PostWasteProduct from "../controllers/PostWasteProduct.js";
import upload from "../middlewares/Multer.js";
import RetrieveWasteProducts from "../controllers/RetrieveWasteProducts.js";
import DeletWasteProduct from "../controllers/DeleteWasteProduct.js";

const router = express.Router();

router
  .route("/post/:userId")
  .post(upload.single("productImage"), PostWasteProduct);

router.route("/get-products").get(RetrieveWasteProducts);

router.route("/delete-product/:productId").delete(DeletWasteProduct);

export default router;
