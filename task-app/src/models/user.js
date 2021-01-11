const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model("User", {
  name: {
    type: String,
    default: "Anonymous",
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    },
  },
  password: {
    type: String,
    min: [7, "Password length must be greater than 6 characters"],
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password cannot contain the word 'password'");
      }
    },
  },
});

module.exports = User