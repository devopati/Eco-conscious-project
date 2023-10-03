import mongoose from "mongoose";

const WasteProductSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    productImg: {
      type: Object,
      imageUrl: String,
      id: String,
    },
    price: Number,
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    isPurchased: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Waste Product", WasteProductSchema);
