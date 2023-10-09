import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
// import { hashPassword } from "./../helper/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      gender,
      password,
      cpassword,
      country,
      state,
      address,
      dob,
      refferelCode,
    } = req.body;

    // Validations
    if (
      !name ||
      !email ||
      !gender ||
      !password ||
      !cpassword ||
      !phone ||
      !country ||
      !state ||
      !address ||
      !dob
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (password !== cpassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Hash both the "password" and "cpassword"
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const hashedCPassword = await bcrypt.hash(cpassword, saltRounds);

    // Check if the user already exists
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(200).json({
        success: false,
        message: "User already registered. Please login.",
      });
    }

    // Create a new user
    const user = await new userModel({
      name,
      email,
      phone,
      gender,
      password: hashedPassword,
      cpassword: hashedCPassword, // Save the hashed cpassword
      country,
      state,
      address,
      dob,
      refferelCode,
    }).save();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error in registration",
      error: error.message,
    });
  }
};
