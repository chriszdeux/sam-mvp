"use client";
import React from "react";
import Link from "next/link";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useToggle } from "@/hooks";
import { glassmorphismEffect } from "./theme/effects";
import { routes } from "@/routes/routes.config";

export const Navbar = () => {
  const [mobileOpen, toggleMobileOpen] = useToggle(false);
  const navItems = routes;
  const drawer = (
    <Box
      onClick={toggleMobileOpen}
      sx={(theme) => ({
        ...glassmorphismEffect(theme),
        height: "100%",
        textAlign: "center",
        pt: 2,
      })}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={Link}
              href={item.path}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <AppBar
        component="nav"
        position="fixed"
        sx={(theme) => glassmorphismEffect(theme)}
      >
        <Toolbar sx={{ py: 0 }}>
          {" "}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              href="/"
              passHref
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Proyecto SAM
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                href={item.path}
                sx={{ color: "text.primary" }}
              >
                {item.title}
              </Button>
            ))}
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={toggleMobileOpen}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={toggleMobileOpen}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              border: "none",
              backgroundColor: "transparedrent",
            },
          }}
        >
          {drawer}
        </Drawer>
        {/* Este Toolbar actúa como un espaciador para evitar que el contenido de la página se oculte debajo del Navbar */}
        <Toolbar />
      </Box>
    </Box>
  );
};
