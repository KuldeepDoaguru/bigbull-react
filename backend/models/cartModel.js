import mongoose from "mongoose";

// Define the schema for a shopping cart item
const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product", // Reference to the product model
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video", // Reference to the video model
    },
  ],
  thumbnails: [
    {
      data: Buffer, // Store binary image data
      contentType: String, // Store the content type of the image (e.g., 'image/jpeg', 'image/png')
    },
  ],
});

// Define the schema for the shopping cart
const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the user model
    required: true,
  },
  items: [cartItemSchema], // An array of cart items
});

// Create the cart model
const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
