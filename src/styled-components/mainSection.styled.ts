"use client";
import { Box, List } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainSection = styled("main")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  height: "100vh",
  position: "relative",
  overflow: "hidden",
  background: theme.palette.background.default,
}));

export const MainInfoContainer = styled("aside")(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "45%",
  },
  padding: theme.spacing(0.5),
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

export const ContainerCallToActionButtons = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  [theme.breakpoints.up("md")]: {
    flexDirection: 'row',
  },
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    alignItems: "center",
  },
  gap: 2,
  marginTop: 4,
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
  [theme.breakpoints.up("md")]: {
    width: '45%',
    position: 'absolute',
    top: '60%',
    left: '50%',
  },
}));
