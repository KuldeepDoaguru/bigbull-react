import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
  {
    email: String,
    code: String,
    expiresIn: Number,
  },
  { timestamps: true }
);

const otpModel = mongoose.model("otpCollection", otpSchema);

export default otpModel;
