import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    default: "N/A"
  },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  favourites: {
    type: Array,
    default: [],
  },
});

const userModel = mongoose.model("Users", userSchema);

export default userModel;
