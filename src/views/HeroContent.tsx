import { Box, Button, Typography } from '@mui/material';

export const HeroContent = () => {
  return (
    <>
      <Box textAlign="center" padding={8}>
        <Typography variant="h3" mb={3}>EN EL MARGEN DE HÉCATE</Typography>
        <Typography variant="h5" mb={3}>LA ASTUCIA ES TU ÚNICA ARMA</Typography>

        <Typography variant="body1">Funda tu imperio desde cero en un simulador de civilización espacial donde cada recurso es un activo digital y cada transacción es ley. Domina un mercado P2P impulsado por jugadores, forja contratos inteligentes y construye un legado económico que resonará a través de la galaxia. Sin guías. Solo libertad y consecuencias.</Typography>
      </Box>
      <Box textAlign="center" sx={{ px: 4, mt: 4 }}>
        <Button color="info" variant="contained">CREA TU IDENTIDAD DIGITAL</Button>
      </Box>
    </>
  );
};