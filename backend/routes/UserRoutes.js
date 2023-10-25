import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import {
  getUserViaId,
  manageUsers,
  updateUsers,
} from "../controllers/authController.js";

const router = express.Router();

router.get("/usersList", manageUsers);
router.put("/users/:id", updateUsers);
router.get("/getUserViaId/:id", getUserViaId);

export default router;
