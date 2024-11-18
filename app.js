import fs from "fs";
import mongoose from "mongoose";

// Connect to MongoDB (make sure MongoDB is running locally)
mongoose
  .connect("mongodb://localhost:27017/storeDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

const productSchema = new mongoose.Schema({
  id: String,
  title: String,
  content: String,
  price: Number,
  stock: Number,
  images: [
    {
      id: String,
      url: String,
      alt: String,
    },
  ],
});

// Create the Product model
const Product = mongoose.model("Product", productSchema);

// Read data from your JSON file
const productData = JSON.parse(fs.readFileSync("products.json", "utf8"));

// Insert products into MongoDB
Product.insertMany(productData)
  .then((products) => {
    console.log("Products successfully inserted:", products);
  })
  .catch((err) => {
    console.error("Error inserting products:", err);
  });
