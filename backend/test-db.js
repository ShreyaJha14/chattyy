import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const testConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
    await mongoose.disconnect();
    console.log("Connection test successful");
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};

testConnection();