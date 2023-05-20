const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) {
        throw new Error("Price must be a positive number");
      }
    },
  },
  qty: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Quantity must be a positive number");
      }
    },
  },
  image: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
