import { Container, Stack, Typography } from "@mui/material";
import ImageCarousel from "./ImageCarousel";

export default function HistorySideB() {
  return (
    <Stack spacing={2}>
      <ImageCarousel />
      <Typography variant="h5" color="primary">
        Blockchain en el espacio: Una solución para una economía sin fronteras
      </Typography>
      <Typography variant="caption" color="primary" component="p" mt={50}>
        El blockchain, en su forma más pura, reemplazó los antiguos sistemas
        bancarios, integrando a la perfección las operaciones de intercambio y
        comercio, superando las limitaciones físicas de la distancia.
      </Typography>
      <Typography variant="caption" color="primary" component="p" mt={50}>
        Este sistema revolucionó el concepto de economía, pasando de ser un
        concepto terrestre a una solución universalmente aceptada en cada rincón
        del espacio.
      </Typography>
    </Stack>
  );
}
