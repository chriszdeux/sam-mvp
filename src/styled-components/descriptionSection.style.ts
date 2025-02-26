"use client";
import { ListItemText, styled } from "@mui/material";
import Image from "next/image";

export const DescriptionContainer = styled("aside")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 16,
  width: "100%",
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));

export const DescriptionImage = styled(Image)(({ theme }) => ({
  height: 400,
  objectFit: "cover",
  objectPosition: "center",
  [theme.breakpoints.up("lg")]: {
    height: 500,
    objectPosition: "bottom"
  }
}));

export const DescriptionContent = styled(ListItemText)(({ theme }) => ({
  gap: 3,
  display: "block",
  width: "100%",
  [theme.breakpoints.up("lg")]: {
    display: "flex", 
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 32,
  }
}));