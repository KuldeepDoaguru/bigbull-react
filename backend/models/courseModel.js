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
    data: Buffer, // Store binary image data for thumbnails
    contentType: String, // Store the content type of the image
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
