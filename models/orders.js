import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  items: [],
  timeStamp: {
    type: Date,
    default: Date.now,
  },
});

const orderModel = mongoose.model("order", orderSchema);

export default orderModel;
