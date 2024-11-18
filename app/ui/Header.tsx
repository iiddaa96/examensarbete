"use client";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as React from "react";

interface HeaderProps {
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  anchorElNav: null | HTMLElement;
  handleCloseNavMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({
  handleOpenNavMenu,
  anchorElNav,
  handleCloseNavMenu,
}) => {
  return (
    <AppBar
      position="static"
      component="header"
      sx={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid black",
        marginTop: "20px",
        paddingBottom: "20px",
        boxShadow: "none",
        color: "black",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Detta centrerar innehållet horisontellt
          width: "100%",
        }}
      >
        {/* Centrerad logotyp/titel */}
        <Box component={Link} href="/" sx={{ textDecoration: "none" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
              padding: "10px",
            }}
          >
            LUXE
          </Typography>
        </Box>
      </Box>

      {/* Mobil Menu Knapp */}
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Mobil meny */}
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            maxWidth: "1200px",
            flexWrap: "wrap",
          }}
        >
          <Button
            component={Link}
            href="/admin"
            color="inherit"
            sx={{ padding: "10px" }}
          >
            Admin
          </Button>
          <Button
            component={Link}
            href="/about us"
            color="inherit"
            sx={{ padding: "10px" }}
          >
            About us
          </Button>
          <Button
            component={Link}
            href="/favorite"
            color="inherit"
            sx={{ padding: "10px" }}
          >
            Favorite
          </Button>
          <Button
            component={Link}
            href="/contact"
            color="inherit"
            sx={{ padding: "10px" }}
          >
            Contact
          </Button>
        </Box>
      </Menu>
    </AppBar>
  );
};

export default Header;
