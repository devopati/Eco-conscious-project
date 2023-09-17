import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email",
      },
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: 6,
      select: false,
    },
    phoneNumber: {
      type: String,
      maxlength: 20,
      trim: true,
      default: "+2547",
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return Jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const passwordMatch = await bcrypt.compare(candidatePassword, this.password);
  return passwordMatch;
};

export default mongoose.model("User", UserSchema);
