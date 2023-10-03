import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: String,
    postedAt: String,
    blog: String,
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        commentText: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Blog", BlogSchema);
