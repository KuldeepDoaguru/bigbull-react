// import connectDB from "../config/db.js";
import Cart from "../models/cartModel.js";
import Course from "../models/courseModel.js";
import fs from "fs";

export const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity, price } = req.body;

    // Check if the user's cart exists; create it if not
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({
        user: userId,
        items: [],
      });
    }

    // Add the item to the cart
    cart.items.push({
      product: productId,
      quantity,
      price,
    });

    await cart.save();

    res.status(201).json({ message: "Item added to the cart successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createCourse = async (req, res) => {
  try {
    // Extract course data from the request body
    const { name, description, price, category } = req.body;

    // Get the uploaded file (thumbnail)
    const thumbnail = req.file;

    if (!thumbnail) {
      return res.status(400).json({ error: "Thumbnail is required" });
    }
    const imageUrl = thumbnail.filename;

    // Create a new course using the Course model and save the image data
    const course = new Course({
      name,
      description,
      price,
      category,
      thumbnails: imageUrl,
    });

    // Save the course to the database using await
    try {
      const savedCourse = await course.save();
      res.status(201).json({
        message: "Course created successfully",
        courseId: savedCourse._id,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Error saving the course" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const addVideoToCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const { title, url, duration, category } = req.body;

    // Find the course by courseId
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    // Create the video and add it to the course's videos array
    const video = {
      title,
      url,
      duration,
      category,
    };

    course.videos.push(video);

    // Save the updated course with the added video
    await course.save();

    res.status(201).json({ message: "Video added to course successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("videos");
    res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const thumbnail = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const course = await Course.findById(courseId);

    console.log("Course:", course);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    console.log("Thumbnails:", course.thumbnails);

    if (!course.thumbnails || course.thumbnails.length === 0) {
      return res.status(404).json({ error: "Course thumbnails not found" });
    }

    // Send the image data as the response
    res.send(course.thumbnails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const coursePage = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    res.send(course);
  } catch (error) {
    console.log(error);
  }
};
