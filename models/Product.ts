import mongoose, { Document, Schema } from "mongoose";

// Definiera TypeScript-typen för produktens data
export interface IProduct extends Document {
  id: string;
  title: string;
  content: string;
  price: number;
  stock: number;
  images: {
    id: string;
    url: string;
    alt: string;
  }[];
}

// Definiera Mongoose-schema för en produkt
const productSchema = new Schema<IProduct>({
  id: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  images: [
    {
      id: { type: String, required: true },
      url: { type: String, required: true },
      alt: { type: String, required: true },
    },
  ],
});

// En Mongoose-modell för produkten
const Product =
  mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);

export default Product;
