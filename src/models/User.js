import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [0, "Age cannot be negative"],
  },
});

const User = mongoose.model("User", userSchema);
export default User;
