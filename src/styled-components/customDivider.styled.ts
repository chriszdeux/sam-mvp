'use client'
import { Container, styled } from "@mui/material";
import Image from "next/image";

export const DividerContainer = styled(Container)(({ theme }) => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 32,
    padding: "24px 0",
    overflow: "hidden",
    position: "relative",
    zIndex: 1,
    backgroundColor: theme.palette.customColors.lightBlue
  };
});

export const DividerImg = styled(Image)(({ theme }) => {
  return {
    width: "100%",
    height: 100,
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: -1,
    objectFit: "cover",
    objectPosition: "center",
    filter: "blur(2px) brightness(0.6)",
    opacity: 0.2,
  };
});