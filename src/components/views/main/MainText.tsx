"use client";
import { Box, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
export default function MainText() {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Container
      sx={{
        display: lg ? "none" : "revert",
      }}
    >
      <Typography variant="caption" color="primary" align={ lg ? 'left' : 'center' }>
        En un futuro donde las galaxias están conectadas digitalmente, el
        blockchain intergaláctico asegura transacciones rápidas y fomenta
        confianza entre civilizaciones aisladas.
      </Typography>
      <Typography variant="caption" color="primary" align={ lg ? 'left' : 'center' }>
        Este sistema es clave para la cooperación y el progreso común en la
        expansión humana por el universo.
      </Typography>
    </Container>
  );
}
