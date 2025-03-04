"use client";
import { ContainerCallToActionButtons } from "@/styled-components/mainSection.styled";
import { Button, useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";

export default function CallToActionButtons() {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <ContainerCallToActionButtons >
      {md ? (
        <>
          <Button variant="contained">
            Ver el mercado
          </Button>
          <Button sx={{ color: "white" }}>Mas información</Button>
        </>
      ) : (
        <>
          <Button sx={{ color: "white" }}>Mas información</Button>
          <Button variant="contained" LinkComponent={Link} href="/market">
            Ver el mercado
          </Button>
        </>
      )}
    </ContainerCallToActionButtons>
  );
}
