import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected Successfully");
  } catch (error) {
    console.error(`connection failed ${error.message}`);
  }
};
