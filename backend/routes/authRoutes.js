import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import {
  loginController,
  registerController,
  sendOtp,
  updatePassword,
} from "../controllers/authController.js";
import {
  addToCart,
  addVideoToCourse,
  createCourse,
  getAllCourses,
  thumbnail,
} from "../controllers/ItemController.js";

//router object
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "thumbnails/");
  },
  filename: function (req, file, cb) {
    // const fileName =
    //   file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/add-course", upload.single("thumbnails"), createCourse);
//routing
//REGISTER || METHOD POST
router.post("/register", registerController);
router.post("/login", loginController);
router.post("/sendOtp", sendOtp);
router.post("/updatePassword", updatePassword);
router.post("/add-to-cart", addToCart);
router.post("/add-video-to-course/:courseId", addVideoToCourse);
router.get("/getAllCourses", getAllCourses);
router.get("/thumbnail/:courseId", thumbnail);
// router.post("/add-course", upload.single("thumbnails"), createCourse);

export default router;
