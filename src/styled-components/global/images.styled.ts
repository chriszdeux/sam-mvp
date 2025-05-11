"use client";
import { styled } from "@mui/material/styles";
import Image from "next/image";

export const FigureImage = styled("figure")(({ theme }) => ({
  position: "relative",
  width: "100%",
  margin: theme.spacing(2, 0),
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
}));

export const FigCaption = styled("figcaption")(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  position: "absolute",
  left: 0,
  bottom: 0,
  width: "100%",
  maxHeight: 130,
  padding: theme.spacing(2),
  color: theme.palette.common.white,
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  fontSize: "1.2rem",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1.5),
    fontSize: "1rem",
  },
}));

export const CustomImage = styled(Image)(({ theme }) => ({
  width: "100%",
  objectFit: "cover",
  objectPosition: "center",
}));