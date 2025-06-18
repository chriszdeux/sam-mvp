"use client";
import { Box, List } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

export const MainSection = styled("main")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  height: "100vh",
  position: "relative",
  overflow: "hidden",
  background: theme.palette.background.default,
  transition: "all 1s ease-in-out",
  // [theme.breakpoints.up("md")]: {
  //   flexDirection: "row",
  // },
}));

export const MainInfoContainer = styled("aside")(({ theme }) => ({
  width: "100%",
  // [theme.breakpoints.up("md")]: {
  //   width: "45%",
  // },
  padding: theme.spacing(5),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(5),
  zIndex: 1,
}));

const imgStyle = (theme: any) => ({
  width: "100%",
  height: '100vh',
  objectFit: "cover",
  objectPosition: "center",
});

export const FigureStyle = styled("figure")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    width: '100%',
  },
  objectPosition: "bottom",
  "& img": imgStyle(theme),
  position: "absolute",
  [theme.breakpoints.up("md")]: {
    position: "relative",
  },
  top: 0,
  margin: 0,
}));

export const MainBGImage = styled(Image)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  filter: "brightness(0.15) blur(4px) ",
  zIndex: -1,
  animationDelay: "3s",
  animationDuration: "15s",
  animationIterationCount: "10",
})

export const ContainerCallToActionButtons = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  // flexDirection: "column",
  justifyContent: "space-between",
  // alignItems: "flex-end",
  [theme.breakpoints.up("md")]: {
    width: "30%",
  },
  // [theme.breakpoints.down("md")]: {
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  marginTop: 4,
  animationDelay: "6s",
  animationDuration: "2s",
}));

export const CryptoMainDisplay = styled(List)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  textAlign: 'center',
  position: 'relative',
  zIndex: 1,
  top: 0,
  left: 0,
  background: theme.palette.customColors.transparent,
  // borderLeft: `1px solid ${theme.palette.primary.main}`,
  animationDelay: '3s',
  [theme.breakpoints.up("md")]: {
    width: '50%',
    // position: 'absolute',
    // top: '60%',
    // left: '55%',
  },
}));
