'use client'
import { Container, Stack, Typography } from "@mui/material";
import ImageCarousel from "./ImageCarousel";
import { animations } from "@/styles/animations";
import { delayAnimation } from "@/utils/delayAnimation.utils";
import { useRef } from "react";
import { useView } from "@/hooks/useView.hook";

export default function HistorySideB() {
  const ref = useRef(null);
  const isVisible = useView(ref);
  const { fadeRight } = animations;
  return (
    <Stack spacing={2} ref={ref}>
      {isVisible && (
        <>
          <ImageCarousel className={fadeRight} sx={delayAnimation(1)} />
          <Typography variant="h2" className={fadeRight} sx={delayAnimation(2)}>
            Blockchain en el espacio: Una solución para una economía sin
            fronteras
          </Typography>
          <Typography
            variant="body1"
            component="p"
            mt={50}
            className={fadeRight}
            sx={delayAnimation(3)}
          >
            El blockchain, en su forma más pura, reemplazó los antiguos sistemas
            bancarios, integrando a la perfección las operaciones de intercambio
            y comercio, superando las limitaciones físicas de la distancia.
          </Typography>
          <Typography
            variant="body1"
            component="p"
            mt={50}
            className={fadeRight}
            sx={delayAnimation(4)}
          >
            Este sistema revolucionó el concepto de economía, pasando de ser un
            concepto terrestre a una solución universalmente aceptada en cada
            rincón del espacio.
          </Typography>
        </>
      )}
    </Stack>
  );
}
