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
        throw new Error("Price must be positive number");
      }
    },
  },
  qty: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Quantity must be positive number");
      }
    },
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
