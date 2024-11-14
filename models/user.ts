import mongoose, { Document } from "mongoose";

export interface User extends Document {
  name: string;
}

const userSchema = new mongoose.Schema<User>({
  name: { type: String, required: true },
});

export default mongoose.model<User>("User", userSchema);
