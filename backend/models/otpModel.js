import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
  {
    email: String,
    code: String,
    expiresIn: Number,
  },
  { timestamps: true }
);

export const otpModel = new mongoose.model("otpCollection", otpSchema);
