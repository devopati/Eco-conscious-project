import { StatusCodes } from "http-status-codes";
import WasteProduct from "../models/WasteProduct.js";
import { CloudinaryImageDestroyer } from "../utils/CloudinaryImageDestroyer.js";

const DeletWasteProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    if (!productId) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Product to delete is required" });
      return;
    }

    const productInstance = await WasteProduct.findById(productId);

    if (!productInstance) {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Product requested does not exist" });
      return;
    }

    await CloudinaryImageDestroyer(productInstance?.productImg?.id);

    await WasteProduct.findByIdAndDelete(productId);

    res.status(StatusCodes.OK).json({ message: "Product deleted successfull" });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "An error occurred while Deleting product" });
  }
};

export default DeletWasteProduct;
