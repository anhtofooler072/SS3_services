import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import productModel from "./models/products.js";
import dotenv from "dotenv";
/*------------------------------------------------------------------------------------------------*/

dotenv.config();
const mongo_uri = process.env.MONGO_URI;
const port = process.env.PORT;

await mongoose
  .connect(
    mongo_uri,
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

app.listen(port, () => {
  console.log("Server is running on port", port);
});
