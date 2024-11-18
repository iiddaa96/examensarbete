import mongoose from "mongoose";

const connectToDatabase = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect("mongodb://localhost:27017/storeDB");
};

export default connectToDatabase;
