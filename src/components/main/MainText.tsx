"use client";
import { animations } from "@/styles/animations";
import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
export default function MainText() {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container
      className={animations.fadeIn}
      sx={{
        display: !md ? "none" : "revert",
        animationDuration: "2s",
        animationDelay: "2s",
      }}
    >
      <Typography variant="body1" align="center">
        En un futuro donde las galaxias están conectadas digitalmente, el
        blockchain intergaláctico asegura transacciones rápidas y fomenta
        confianza entre civilizaciones aisladas.
      </Typography>
      <Typography variant="body1" align="center">
        Este sistema es clave para la cooperación y el progreso común en la
        expansión humana por el universo.
      </Typography>
    </Container>
  );
}
