'use client'
import { Container, styled, Typography, useMediaQuery } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "1.5rem",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: theme.spacing(2),
}));

export const  MainContainer = styled(Container)(({ theme }) => {
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  return {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: lg ? "row" : "column",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 32,
    overflowX: "hidden",
    marginTop: 32,
    padding: 0,
    paddingTop: 64,
  }
});


