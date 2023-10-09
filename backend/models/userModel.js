import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    cpassword: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    refferelCode: {
      type: String,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
