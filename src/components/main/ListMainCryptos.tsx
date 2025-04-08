"use client";
import { CryptoMainDisplay } from "@/styled-components/mainSection.styled";
import { ListItemText, Typography } from "@mui/material";
import { CSSProperties } from "react";

interface Props {
  sx?: CSSProperties
}
export default function ListMainCryptos({sx}: Props) {
  return (
    <CryptoMainDisplay>
        <ListItemText 
          primary={<Typography variant="h4">Z-Aurus</Typography>}
          secondary={<Typography sx={{fontSize: '1.5rem'}}>75.66 C</Typography>}
        />
        <ListItemText 
          primary={<Typography variant="h4">Z-Aurus</Typography>}
          secondary={<Typography sx={{fontSize: '1.5rem'}}>75.66 C</Typography>}
        />
        <ListItemText 
          primary={<Typography variant="h4">Z-Aurus</Typography>}
          secondary={<Typography sx={{fontSize: '1.5rem'}}>75.66 C</Typography>}
        />     
    </CryptoMainDisplay>
  );
}