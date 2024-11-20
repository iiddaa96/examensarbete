import mongoose, { Document, Model, Schema } from "mongoose";

// Typdefinition för bild
interface Image {
  url: string;
  alt: string;
}

// Typdefinition för produkt
interface Product extends Document {
  title: string;
  content: string;
  price: number;
  images: Image;
}

// Definiera Mongoose-schema för en produkt
const productSchema = new Schema<Product>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  price: { type: Number, required: true },
  images: {
    url: { type: String, required: true },
    alt: { type: String, required: true },
  },
});

// Kontrollera om modellen redan är definierad
const Product: Model<Product> =
  mongoose.models.Product || mongoose.model<Product>("Product", productSchema);

export default Product;
