const mongoose = require("mongoose");
const validator = require("validator");


mongoose.connect("mongodb://127.0.0.1:27017/tasks-manager-api", {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
    default: "Anonymous",
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email")
      }
    }
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number")
      }
    }
  },
  password: {
    type: String,
    min: [7, "Password length must be greater than 6 characters"],
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password cannot contain the word 'password'")
      }
    }
  }
});

const me = new User({
  name: "Lagathar",
  age: 53,
  email: "Lagathar@vikings.com",
  password: "mypassword",
});

me.save()
  .then(() => console.log("Me variable saved: ", me))
  .catch((error) => console.log(error));
