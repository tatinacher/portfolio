import React from "react";

import {
  Box,
  Typography,
  AppBar,
  Menu,
  Button,
  IconButton,
  MenuItem,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export function HeadMenu({ pages, themeButton }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = ({ currentTarget }) => {
    const id = currentTarget?.dataset?.id;
    if (id && document) {
      const section = document.getElementById(id);
      section.scrollIntoView({ behavior: "smooth" });
    }
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      {/* Мобильное меню */}
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
          sx={{ display: { xs: "block", md: "none" } }}
        >
          {pages.map(({ name, id }) => (
            <MenuItem key={id} onClick={handleCloseNavMenu} data-id={id}>
              <Typography sx={{ textAlign: "center" }}>{name}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      {/* Десктоп меню */}
      <Container>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>
            {pages.map(({ name, id }) => (
              <Button
                key={id}
                data-id={id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "primary.text", display: "block" }}
              >
                {name}
              </Button>
            ))}
          </div>
          <div>{themeButton}</div>
        </Box>
      </Container>
    </AppBar>
  );
}
