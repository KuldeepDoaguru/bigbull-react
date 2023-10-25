import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
// import { hashPassword } from "./../helper/authHelper.js";
import JWT from "jsonwebtoken";
import { otpModel } from "../models/otpModel.js";

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

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }

    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error in login", error });
  }
};

export const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    // Generate a random OTP
    function generateOTP(length) {
      const chars = "0123456789";
      let otp = "";

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        otp += chars[randomIndex];
      }

      return otp;
    }

    const OTP = generateOTP(6);

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAILSENDER,
        pass: process.env.EMAILPASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAILSENDER,
      to: email,
      subject: "Password reset OTP",
      text: `Your OTP for password reset is ${OTP}`,
    };

    transporter.sendMail(mailOptions, async (error, info) => {
      if (error) {
        console.error(error);
        return res
          .status(500)
          .json({ message: "An error occurred while sending the email" });
      } else {
        console.log("OTP sent:", info.response);

        try {
          // Find the OTP document based on the email
          let otpDocument = await otpModel.findOne({ email });

          if (!otpDocument) {
            otpDocument = new otpModel({
              email,
              code: OTP,
              expiresIn: new Date().getTime() + 600000, // Set OTP expiration time (e.g., 10 minutes from now)
            });
          } else {
            // Update the OTP code and expiresIn fields
            otpDocument.code = OTP;
            otpDocument.expiresIn = new Date().getTime() + 600000; // Update expiration time
          }

          // Save the document
          await otpDocument.save();

          return res.status(200).json({ message: "OTP sent successfully" });
        } catch (error) {
          console.error("Error updating OTP:", error);
          return res.status(500).json({ message: "Failed to update OTP" });
        }
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updatePassword = async (req, res) => {
  try {
    const { email, password, cpassword, otp } = req.body;
    console.log(req.body);
    if (!email || !password || !cpassword || !otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid email, password, or OTP",
      });
    }

    // Fetch the user based on the provided email
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // otpmatch
    const otpDocument = await otpModel.findOne({ email });
    if (!otpDocument || otpDocument.code !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    // Hash both the "password" and "cpassword"
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const hashedCPassword = await bcrypt.hash(cpassword, saltRounds);

    await userModel.findByIdAndUpdate(user._id, {
      password: hashedPassword,
      cpassword: hashedCPassword,
    });
    res.status(200).send({
      success: true,
      message: "Password Reset Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

export const manageUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
    console.log(users);
  } catch (error) {
    console.log(error);
  }
};

export const updateUsers = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, email, phone, gender, country, state, address, dob } =
      req.body;

    // Find the user by their unique identifier (e.g., ID)
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    // Update user properties
    if (name) user.name = name;
    if (email) user.email = email;
    if (phone) user.phone = phone;
    if (gender) user.gender = gender;
    if (country) user.country = country;
    if (state) user.state = state;
    if (address) user.address = address;
    if (dob) user.dob = dob;

    // Save the updated user
    const updatedUser = await user.save();

    res.status(200).json({
      success: true,
      message: "User details updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getUserViaId = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
      console.log(user);
    } else {
      res.status(200).send({ user });
    }
  } catch (error) {
    console.log(error);
  }
};
