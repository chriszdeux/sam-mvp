import { Stack, Typography } from "@mui/material";
import PlanetImg from "../../assets/img/blockchain_cube.jpg";
import FadeComponent from "../fades/FadeComponent";
import { DescriptionContainer, DescriptionImage } from "@/styled-components/descriptionSection.style";
export default function DescriptionBlockA() {
  return (
    <DescriptionContainer>
      <Stack spacing={2} width="100%">
        <Typography variant="body1">
          En un universo donde la expansión es ilimitada, Kanto emerge como la
          piedra angular de la economía galáctica. Esta criptomoneda no es solo
          un medio de intercambio, sino el pilar central de todo progreso en
          Proyecto Sam.
        </Typography>
        <Typography variant="body1">
          Cada transacción, cada conquista, cada construcción en los confines
          del espacio profundo depende del poder de Kanto. Con su tecnología
          respaldada por la más avanzada blockchain cuántica, Kanto ofrece una
          seguridad inquebrantable, escalabilidad y velocidad que no conoce
          fronteras.
        </Typography>
        <Typography variant="body1">
          Es la moneda de confianza, utilizada por todos los jugadores para
          gestionar recursos, realizar intercambios interplanetarios, y
          construir sus imperios en el cosmos.
        </Typography>
      </Stack>
      <FadeComponent bottom top caption="planet">
        <DescriptionImage
          alt="Planet"
          src={PlanetImg}
        />
      </FadeComponent>
    </DescriptionContainer>
  );
}
