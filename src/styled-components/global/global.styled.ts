'use client'
import { Container, styled, Typography } from "@mui/material";
export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "1.5rem",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: theme.spacing(2),
}));

export const MainContainer = styled(Container)(({ theme }) => ( {
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  gap: 32,
  overflowX: "hidden",
  marginTop: 32,
  padding: 0,
  paddingTop: 64,
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  }
  // "&::before": {
  //   content: '""',
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   width: "100%",
  //   height: "100%",
  //   backgroundImage: `url(${Image.src})`,
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center",
  //   backgroundAttachment: "fixed",
  //   opacity: 0.2,
  //   zIndex: -1,
  // }
}));



