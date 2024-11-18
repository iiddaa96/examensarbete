import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import connectToDatabase from "../../lib/dbConnect";
import Product from "../../models/Product";

export interface Product {
  id: string;
  title: string;
  content: string;
  price: number;
  stock: number;
  images: { id: string; url: string; alt: string }[];
}

async function getProducts() {
  await connectToDatabase();
  // Hämta alla produkter från databasen
  const products = await Product.find();
  return products;
}

export default async function ProductsPage() {
  // Hämta produkterna på serversidan
  const products = await getProducts();

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Produkter
      </Typography>
      <Grid container spacing={4}>
        {products.length > 0 ? (
          products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.images[0].url} // Använder första bilden
                  alt={product.images[0].alt}
                />
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.content}
                  </Typography>
                  <Typography variant="h6">{product.price} SEK</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Antal i lager: {product.stock}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1">Inga produkter tillgängliga</Typography>
        )}
      </Grid>
    </Container>
  );
}
