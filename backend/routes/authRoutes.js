import express from "express";
import {
  loginController,
  registerController,
  sendOtp,
  updatePassword,
} from "../controllers/authController.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);
router.post("/login", loginController);
router.post("/sendOtp", sendOtp);
router.post("/updatePassword", updatePassword);

export default router;
