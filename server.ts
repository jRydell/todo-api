import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors({ exposedHeaders: ["Authorization"] }));

app.use(express.json());

// MongoDB connection setup
mongoose
  .connect("mongodb+srv://admin:admin@mongotodo.gb7kb.mongodb.net/")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err: any) => console.error("Database connection error: ", err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
