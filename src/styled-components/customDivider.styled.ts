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
    position: "absolute",
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: -1,
    objectFit: "cover",
    objectPosition: "center",
    filter: "blur(2px) brightness(0.6)",
    opacity: 0.2,
  };
});