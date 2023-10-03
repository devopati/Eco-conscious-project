import { StatusCodes } from "http-status-codes";
import WasteProduct from "../models/WasteProduct.js";

const RetrieveWasteProducts = async (req, res) => {
  try {
    const products = await WasteProduct.find({}).sort({ createdAt: -1 });

    res.status(StatusCodes.OK).json({ products });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "An error occurred while Posting product" });
  }
};

export default RetrieveWasteProducts;
