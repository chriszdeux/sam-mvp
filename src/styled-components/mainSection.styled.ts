"use client";
import { Box, List, useMediaQuery } from "@mui/material";
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
  width: useMediaQuery(theme.breakpoints.down("md")) ? "100%" : "45%",
  padding: theme.spacing(0.5),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(5),
  zIndex: 1,
}));

const imgStyle = (theme: any) => {
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));
  return {
    width: "100%",
    height: '100vh',
    objectFit: "cover",
    objectPosition: "center",
  };
};

export const FigureStyle = styled("figure")(({ theme }) => {
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return {
    width: md ? '45%' : sm ? '100%' : '100%',
    // right: md ? '50%' : sm ? '0' : '0',
    transform: sm
      ? "translateX(0%)"
      : md
      ? "translateX(-50%)"
      : "translateX(0%)",
    objectPosition: "bottom",
    "& img": imgStyle(theme),
    position: md ? "relative" : "absolute",
    top: 0,
    margin: 0,
    // zIndex: ,
  };
});

export const ContainerCallToActionButtons = styled(Box)(({ theme }) => {
  const md = useMediaQuery(theme.breakpoints.down("md"));
  return {
    width: "100%",
    display: "flex",
    flexDirection: md ? "column" : "row",
    justifyContent: !md ? "flex-end" : "center",
    alignItems: !md ? "flex-end" : "center",
    gap: 2,
    marginTop: 4,
  }
})

export const CryptoMainDisplay = styled(List)(({theme}) => {
  const md = useMediaQuery(theme.breakpoints.up("md"));
  // const lg = useMediaQuery(theme.breakpoints.up("lg"));
  return {
    display: 'flex',
    justifyContent: 'center',
    width: md ? '20%' : '100%',
    textAlign: 'center',
    position: md ? 'absolute' : 'relative',
    
    top: md ? '60%' : 0,
    left: md ? '70%' : 0,
    // transform: md ? 'translate(-50%, -50%)' : 'none',
    zIndex: 1
  }
})

// export const CryptoDisplayStyle = styled("div")(({ theme }) => ({
//   position: "absolute",
//   top: "60%",
//   right: "5%",
//   zIndex: 1,
//   width: 500,
// }));
