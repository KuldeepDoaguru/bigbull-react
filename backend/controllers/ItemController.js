// import connectDB from "../config/db.js";
import Cart from "../models/cartModel.js";
import Course from "../models/courseModel.js";

import fs from "fs";
import Wishlist from "../models/wishlist.js";

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

export const editCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const { name, description, price, category } = req.body;
    const thumbnail = req.file;

    if (!thumbnail) {
      return res.status(400).json({ error: "Thumbnail is required" });
    }

    // Find the existing course by ID
    const existingCourse = await Course.findById(courseId);
    if (!existingCourse) {
      return res.status(404).json({ error: "Course not found" });
    }

    // Update the course properties
    existingCourse.name = name;
    existingCourse.description = description;
    existingCourse.price = price;
    existingCourse.category = category;
    existingCourse.thumbnails = thumbnail.filename; // Assuming you have a 'thumbnail' field

    // Save the updated course
    await existingCourse.save();

    res.status(200).json({
      message: "Course updated successfully",
      courseId: existingCourse._id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    // Find the existing course by ID
    const existingCourse = await Course.findById(courseId);
    if (!existingCourse) {
      return res.status(404).json({ error: "Course not found" });
    }
    // Delete the existing course
    await existingCourse.deleteOne();
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    console.log("error :", error);
  }
};

export const addCourseVideos = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const { title, duration, category, description } = req.body;
    const videoFile = req.file; // The uploaded video file

    if (!videoFile) {
      return res.status(400).json({ error: "Video file is required" });
    }

    // Ensure that "url" is set to "videoFile.filename"
    const videoUrl = videoFile.originalname;

    // Create a new video object
    const video = {
      title,
      url: videoUrl,
      duration,
      description,
      category,
    };

    // Find the course by ID and push the new video to its 'videos' array
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    course.videos.push(video);

    // Save the updated course document
    await course.save();

    res.status(201).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const videoListViaCourseId = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    console.log(courseId);
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    res.send(course.videos);
    console.log(course.videos);
    console.log(course);
  } catch (error) {
    console.log(error);
  }
};

export const addToWishlist = async (req, res) => {
  try {
    const { userId, productId } = req.params;

    // Find the user's wishlist or create a new one if it doesn't exist
    let wishlist = await Wishlist.findOne({ user: userId });

    if (!wishlist) {
      wishlist = new Wishlist({
        user: userId,
        items: [productId],
      });
    } else {
      // Check if the product is already in the wishlist
      if (!wishlist.items.includes(productId)) {
        wishlist.items.push(productId);
      }
    }

    await wishlist.save();

    res
      .status(201)
      .json({ message: "Product added to the wishlist successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getWishlistItems = async (req, res) => {
  try {
    const { userId, productId } = req.params;
    const wishlist = await Wishlist.findOne({ user: userId, items: productId });

    if (!wishlist) {
      return res.status(404).json({ error: "Item not found in the wishlist" });
    }

    return res.status(200).json({ wishlist });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
