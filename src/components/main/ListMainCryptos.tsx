"use client";
import { CryptoMainDisplay } from "@/styled-components/mainSection.styled";
import { animations } from "@/styles/animations";
import { delayAnimation } from "@/utils/delayAnimation.utils";
import { ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import { CSSProperties } from "react";

interface Props {
  sx?: CSSProperties;
}
export default function ListMainCryptos({ sx }: Props) {
  const {fadeUp} = animations
  return (
    <CryptoMainDisplay className={animations.fadeRight}>
      <ListItemText
        primary={<Typography variant="h3">Z-Aurus</Typography>}
        secondary={<Typography sx={{ fontSize: "1.5rem" }}>75.66 C</Typography>}
        className={fadeUp}
        sx={delayAnimation(4)}
      />
      <ListItemText
        primary={<Typography variant="h3">Z-Aurus</Typography>}
        secondary={<Typography sx={{ fontSize: "1.5rem" }}>75.66 C</Typography>}
        className={fadeUp}
        sx={delayAnimation(5)}
      />
      <ListItemText
        primary={<Typography variant="h3">Z-Aurus</Typography>}
        secondary={<Typography sx={{ fontSize: "1.5rem" }}>75.66 C</Typography>}
        className={fadeUp}
        sx={delayAnimation(6)}
      />
    </CryptoMainDisplay>
  );
}
