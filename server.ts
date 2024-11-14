import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import todoRoutes from "./routes/todoRoutes";

dotenv.config();

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors({ exposedHeaders: ["Authorization"] }));

app.use(express.json());

mongoose
  .connect("mongodb+srv://admin:admin@mongotodo.gb7kb.mongodb.net/todoapp")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err: any) => console.error("Database connection error: ", err));

app.use("/todos", todoRoutes);
app.use("/users", userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
