"use client";
import * as React from "react";
import Header from "./Header";
import Subheader from "./SubHeader";

const ResponsiveAppBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <Header
        handleOpenNavMenu={handleOpenNavMenu}
        anchorElNav={anchorElNav}
        handleCloseNavMenu={handleCloseNavMenu}
      />

      <Subheader />
    </div>
  );
};

export default ResponsiveAppBar;
