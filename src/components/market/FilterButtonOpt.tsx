'use client'
import { useState } from "react";
import { IconButton, Menu, MenuItem, useTheme } from "@mui/material";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";

export default function FilterButtonOpt() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton size="large" onClick={handleClick}>
        <SortByAlphaIcon sx={{ color: theme.palette.success.light }} />
      </IconButton>
      <Menu
        id="filter-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>A - Z</MenuItem>
        <MenuItem onClick={handleClose}>Z - A</MenuItem>
        <MenuItem onClick={handleClose}>Precio: Menor a Mayor</MenuItem>
        <MenuItem onClick={handleClose}>Precio: Mayor a Menor</MenuItem>
      </Menu>
    </>
  );
}
