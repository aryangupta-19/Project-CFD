import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

export default function CFDNavbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMarket = (click) =>{
    click.addEventListener()
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#0d1321",
          boxShadow: "0px 4px 10px rgba(2, 62, 138, 0.6)",
          zIndex: 1200
        }}
      >
        <Toolbar>
          {/* Logo + Brand */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
          >
            <img
              src="/images/cfd-logo.jpg"
              alt="CFD Logo"
              width="30"
              height="24"
              style={{ marginRight: "8px" }}
            />
            CFD Trader
          </Typography>

          {/* Desktop Links */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button  component={Link} to="/"  sx={{ color: "white" }}>Market</Button>
            <Button  component={Link} to="/portfolio" sx={{ color: "white" }}>Portfolio</Button>
            <Button  component={Link} to="/history" sx={{ color: "white" }}>History</Button>
            <Button  component={Link} to="/about" sx={{ color: "white" }}>About</Button>
            <Button  component={Link} to="/login" sx={{ color: "white" }}>Login</Button>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleMenu}
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Market</MenuItem>
              <MenuItem onClick={handleClose}>Portfolio</MenuItem>
              <MenuItem onClick={handleClose}>History</MenuItem>
              <MenuItem onClick={handleClose}>About</MenuItem>
              <MenuItem onClick={handleClose}>Login</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// proper navabar completed 
// responsive 
// though routing is pending 
