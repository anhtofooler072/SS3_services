import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import rootRouter from "./routes/rootRoutes.js";
/*------------------------------------------------------------------------------------------------*/


// env config
dotenv.config();
const mongo_uri = process.env.MONGO_URI;
const port = process.env.PORT;

// connect to mongoose
await mongoose
  .connect(mongo_uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// create express app
const app = express();
app.use(express.json());

// configure cors
app.use(
  cors({
    // origin: "http://localhost:5173", // Replace with your React app's origin
  })
);

// routes
app.use("/mindx_ss3_2", rootRouter);

/*------------------------------------------------------------------------------------------------*/


app.listen(port, () => {
  console.log("Server is running on port", port);
});
