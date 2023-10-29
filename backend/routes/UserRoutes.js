import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import {
  AdminRegister,
  adminLoginUser,
  getUserViaId,
  manageUsers,
  updateUsers,
} from "../controllers/authController.js";
import {
  addToWishlist,
  addtocartBack,
  getCartItems,
  getWishlistItems,
} from "../controllers/ItemController.js";

const router = express.Router();

router.get("/usersList", manageUsers);
router.put("/users/:id", updateUsers);
router.get("/getUserViaId/:id", getUserViaId);
router.post("/addToWishlist/:userId/:productId", addToWishlist);
router.get("/getWishlistItems/:userId", getWishlistItems);
router.post("/addtocart/:userId/:productId", addtocartBack);
router.get("/getCartItems/:userId", getCartItems);
router.post("/AdminRegister", AdminRegister);
router.post("/adminLoginUser", adminLoginUser);

export default router;
