import mongoose, { Document } from "mongoose";

export interface Todo extends Document {
  title: string;
  description: string;
  completed: boolean;
  userId: mongoose.Schema.Types.ObjectId;
}

const todoSchema = new mongoose.Schema<Todo>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

export default mongoose.model<Todo>("Todo", todoSchema);
