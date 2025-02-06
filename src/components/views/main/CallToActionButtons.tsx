"use client";
import { ContainerCallToActionButtons } from "@/styled-components/mainSection.styled";
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";

export default function CallToActionButtons() {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <ContainerCallToActionButtons >
      {md ? (
        <>
          <Button variant="contained" color="primary">
            Ver el mercado
          </Button>
          <Button sx={{ color: "white" }}>Mas información</Button>
        </>
      ) : (
        <>
          <Button sx={{ color: "white" }}>Mas información</Button>
          <Button variant="contained" color="primary">
            Ver el mercado
          </Button>
        </>
      )}
    </ContainerCallToActionButtons>
  );
}
