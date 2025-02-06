"use client";
import { Box, styled, useMediaQuery } from "@mui/material";
import Image from "next/image";

export const HistoryImage = styled(Image)(({ theme }) => {
  const md = useMediaQuery(theme.breakpoints.down("md"));
  return {
    width: "100%",
    height:380,
    objectFit: "cover",
    objectPosition: "center",
  };
});

export const HistoryImagesDisplay = styled(Box)(({ theme }) => {
  return {
    display: "flex",
    justifyContent: "space-between",
    // alignItems: "center",
    gap: 32,
    position: "relative",
    overflowX: 'hidden',
    height: 380,
  };
});

export const HistoryImageContainer = styled("figure")(({ theme }) => {
  const md = useMediaQuery(theme.breakpoints.down("md"));
  return {
    margin: 0,
    width: '100%',
    // height: 251,
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
  };
});

export const HistoryMainImage = styled(Image)(
  ({ theme }, active: boolean = false) => {
    const md = useMediaQuery(theme.breakpoints.up("md"));
    return {
      width: md ? '50%' : '100%',
      height: 320,
      objectFit: "cover",
    };
  }
);

export const HistoryLeftImage = styled(Image)(({ theme }) => {
  const md = useMediaQuery(theme.breakpoints.up("md"));
  return {
    width: '50%',
    height: 320,
    objectFit: "cover",
    filter: "blur(2px) brightness(0.6)",
  };
});
export const HistoryRightImage = styled(Image)(({ theme }) => {
  const md = useMediaQuery(theme.breakpoints.up("md"));
  return {
    width: '50%',
    height: 320,
    objectFit: "cover",
    filter: "blur(2px) brightness(0.6)",
  };
});
