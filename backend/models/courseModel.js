// courseModel.js
import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String, // Course category
    required: true,
  },
  thumbnails: {
    type: String, // Course category
    required: true,
  },
  videos: [
    {
      title: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      duration: {
        type: Number,
        required: true,
      },
      category: {
        type: String, // Video category
        required: true,
      },
    },
  ],
  // Add other course-related fields
});

const Course = mongoose.model("Course", courseSchema);

export default Course;
