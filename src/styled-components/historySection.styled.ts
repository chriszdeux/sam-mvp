"use client";
import { Box, styled, useMediaQuery } from "@mui/material";
import Image from "next/image";

export const HistoryImage = styled(Image)(({ theme }) => ({
  width: "100%",
  height:380,
  objectFit: "cover",
  objectPosition: "center",
  zIndex: 1
}));

export const HistoryImagesDisplay = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: 32,
  position: "relative",
  overflowX: 'hidden',
  height: 380,
}));

export const HistoryImageContainer = styled("figure")(({ theme }) => ({
  margin: 0,
  width: '100%',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  objectFit: "cover",
  objectPosition: "center",
  position: "absolute",
  top: 45,
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 2,
}));

export const HistoryMainImage = styled(Image)(
  ({ theme }) => ({
    width:'100%',
    height: 320,
    objectFit: "cover",
    [theme.breakpoints.up("md")]: {
      width: '50%'
    }
  }));

export const HistoryLeftImage = styled(Image)(({ theme }) => ({
  width: '50%',
  height: 320,
  objectFit: "cover",
  filter: "blur(2px) brightness(0.6)",
}));

export const HistoryRightImage = styled(Image)(({ theme }) => ({
  width: '50%',
  height: 320,
  objectFit: "cover",
  filter: "blur(2px) brightness(0.6)",
}));
