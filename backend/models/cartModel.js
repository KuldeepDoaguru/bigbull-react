import mongoose from "mongoose";

// Define the schema for a shopping cart item
const cartItemSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users", // Reference to the user model
      required: true,
    },

    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course", // Reference to the "Course" model
      },
    ],
  },
  { timestamps: true }
);

// Create the cart model
const Cart = mongoose.model("Cart", cartItemSchema);

export default Cart;
