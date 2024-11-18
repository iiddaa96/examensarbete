import { Button, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function HomePage() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Välkommen till vår butik!
      </Typography>
      <Typography variant="body1" paragraph>
        Utforska våra produkter och hitta dina favoriter.
      </Typography>
      <Link href="/products" passHref>
        <Button variant="contained" color="primary">
          Se Produkter
        </Button>
      </Link>
    </Container>
  );
}
