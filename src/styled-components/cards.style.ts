'use client'
import { Paper, styled } from "@mui/material";

export const CryptoCardStyled = styled(Paper)(({ theme }) => ({
  position: "relative",
  width: '100%',
  // opacity: .9,
  filter: "grayscale(.2)",
  // flexGrow: 1,
  height: 170,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  // alignItems: "center",
  padding: 16,
  borderRadius: 8,
  backgroundColor: theme.palette.customColors.transparent,
  overflow: "hidden",
  transition: "all 0.1s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    filter: "grayscale(0)",
    transform: "scale(1.011)",
    opacity: 1,
  },
  "&:active": {
    transform: "scale(0.98)",
  },
  [theme.breakpoints.up("lg")]: {
    width: 360,
  },
}))