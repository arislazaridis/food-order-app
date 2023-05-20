const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
  },
  password: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) {
        throw new Error("Password must be a positive number");
      }
    },
  },
  phone: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Phone must be a positive number");
      }
    },
  },
  gender: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
