"use client";
import {  List, ListItem, ListItemText, Typography, useMediaQuery, useTheme } from "@mui/material";
import { CSSProperties } from "react";

interface Props {
  sx?: CSSProperties
}
export default function ListMainCryptos({sx}: Props) {
    const theme = useTheme();
    const lg = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <List sx={{
      display: 'flex',
      justifyContent: 'center',
      width: lg ? '20%' : '100%',
      textAlign: 'center',
      ...sx
    }}>
        <ListItemText 
          primary={<Typography variant="caption" color="primary">Z-Aurus</Typography>}
          secondary={<Typography color="primary" sx={{fontSize: '1.5rem'}}>75.66 C</Typography>}
        />
        <ListItemText 
          primary={<Typography variant="caption" color="primary">Z-Aurus</Typography>}
          secondary={<Typography color="primary" sx={{fontSize: '1.5rem'}}>75.66 C</Typography>}
        />
        <ListItemText 
          primary={<Typography variant="caption" color="primary">Z-Aurus</Typography>}
          secondary={<Typography color="primary" sx={{fontSize: '1.5rem'}}>75.66 C</Typography>}
        />
     
    </List>
  );
}