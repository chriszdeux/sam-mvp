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
}));

interface CInterface {
  fixWidth?: boolean
}
export const ContainerPage = styled(Container)<CInterface>(({ theme, fixWidth }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  // alignItems: "center",
  width: "100%",
  minHeight: "100vh",
  paddingTop: 64,
  [theme.breakpoints.up("md")]: {
    width: fixWidth ? "30%" : "80%",
  } 
}))


