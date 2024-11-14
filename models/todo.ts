import mongoose, { Document } from "mongoose";

export interface Todo extends Document {
  title: string;
}

const todoSchema = new mongoose.Schema<Todo>({
  title: { type: String, required: true },
});

export default mongoose.model<Todo>("Todo", todoSchema);
