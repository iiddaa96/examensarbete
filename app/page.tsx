import connectToDatabase from "@/lib/dbConnect";
import ProductModel from "@/models/Product";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import Image from "next/image";
import MiddleImage from "./assets/color.jpg";

interface Image {
  url: string;
  alt: string;
}

interface ProductType {
  id: string;
  title: string;
  images: Image[];
  content: string;
  price: number;
}

// hämta produktdata från MongoDB
async function fetchProducts(): Promise<ProductType[]> {
  await connectToDatabase(); // Anslut till databasen

  // Hämta alla produkter från MongoDB
  const products = await ProductModel.find();
  return JSON.parse(JSON.stringify(products));
}

export default async function Home() {
  const products = await fetchProducts();

  return (
    <main>
      <Box
        sx={{
          width: "95%",
          height: "200px",
          justifyContent: "center",
          position: "relative",
          paddingTop: "30%",
          margin: "32px auto",
          display: "flex",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <Image
          src={MiddleImage}
          alt="Stor Bild"
          layout="fill"
          objectFit="cover"
        />
      </Box>

      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          marginBottom: "24px",
        }}
      >
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} lg={4} xl={3} key={product.id}>
              <Link href={`/product/${product.id}`}>
                <Card
                  sx={{
                    maxWidth: 345,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    m: "auto",
                    boxShadow: 3,
                    position: "relative",
                  }}
                >
                  <CardMedia
                    component="img"
                    width="auto"
                    height="200"
                    image={product.images[0].url}
                    alt={product.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {product.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: "0.8rem" }}
                    >
                      {product.price}kr
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </main>
  );
}
