import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import { ImageUploader } from "../utils/Cloudinary.js";
import WasteProduct from "../models/WasteProduct.js";
import fs from "fs";

const PostWasteProduct = async (req, res) => {
  try {
    const { userId } = req.params;

    const { productName, description } = req.body;

    const productPic = req.file;

    if (!productName || !userId || !description) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Please fill in all the fields" });
      return;
    }

    const userExists = await User.findById(userId);
    if (!userExists) {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "User does not exist" });
      return;
    }

    // Upload profile image to clodinary and save the response
    let productImg;
    if (productPic) {
      const productImgUploader = async (path) => {
        return await ImageUploader(path, "Waste Product Images");
      };

      const { path } = productPic;
      productImg = await productImgUploader(path);
      fs.unlinkSync(req.file.path);
    }

    const newWasteProduct = new WasteProduct({
      userId,
      productName,
      productImg,
      description,
    });

    await newWasteProduct.save();

    res.status(StatusCodes.OK).json({ message: "Product posted successfull" });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "An error occurred while Posting product" });
  }
};

export default PostWasteProduct;
