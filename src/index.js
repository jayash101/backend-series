import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR: " + error);
      throw error;
    });

    app.listen(port, () => {
      console.log(`Server running on port localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed !!!", error);
  });

/*
import express from "express";

const app = express();
const port = 5000 | process.env.port;

// IIFE
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

    // Error listeners
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(port, () => {
      console.log(`App is listening on port ${port}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
  }
})();
*/
