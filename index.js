import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import productModel from "./models/products.js";

await mongoose
  .connect(
    "mongodb+srv://savvyreactor:nhom2mindx@project-ss3.enwnglq.mongodb.net/project_ss3?retryWrites=true&w=majority&appName=project-ss3"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());
app.use(
  cors({
    // origin: "http://localhost:5173", // Replace with your React app's origin
  })
);

app.get("/products", async (req, res) => {
  const products = await productModel.find({});
  res.send(products);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
