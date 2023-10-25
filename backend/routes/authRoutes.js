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
  addCourseVideos,
  addToCart,
  coursePage,
  createCourse,
  deleteCourse,
  editCourse,
  getAllCourses,
  thumbnail,
  videoListViaCourseId,
} from "../controllers/ItemController.js";

//router object
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "thumbnails/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
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
router.get("/getAllCourses", getAllCourses);
router.get("/thumbnail/:courseId", thumbnail);
router.get("/coursePage/:courseId", coursePage);
router.put("/editCourse/:courseId", upload.single("thumbnails"), editCourse);
router.delete("/deleteCourse/:courseId", deleteCourse);
// router.post("/add-course", upload.single("thumbnails"), createCourse);

const Videostorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "videoCourse/"); // Specify the upload directory
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original filename
  },
});

const Videoupload = multer({ storage: Videostorage });

router.post(
  "/courses/:courseId/videos",
  Videoupload.single("videoFile"),
  addCourseVideos
);

router.get(`/videoListViaCourseId/:courseId`, videoListViaCourseId);

export default router;
