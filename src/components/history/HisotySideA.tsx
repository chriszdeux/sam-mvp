import { Stack, Typography } from "@mui/material";
import ImageHistory from "../../public/img/history_img.jpg";
import FadeComponent from "@/components/fades/FadeComponent";
import { HistoryImage } from "@/styled-components/historySection.styled";

export default function HistorySideA() {

  return (
    // <Container>
      <Stack spacing={2}>
        <Typography variant="h4">
          El amanecer de la red universal
        </Typography>
        <FadeComponent all caption="La historia comienza de nuevo">
          <HistoryImage
            src={ImageHistory}
            alt="Background image"
          />
        </FadeComponent>
        <Typography variant="body1" component="p" mb={1}>
          La humanidad, en su afán de expansión, agotó los recursos de la Tierra y
          buscó refugio en las estrellas. Pero con esta migración masiva surgió un
          nuevo desafío: la economía interestelar. Los sistemas tradicionales no
          podían sostenerse en un entorno descentralizado y diverso.
        </Typography>

        <Typography variant="body1" component="p">
          Así nació el blockchain intergaláctico, una red que conectaba colonias
          distantes, estaciones espaciales y flotas de exploración. Este avance
          tecnológico no solo resolvió problemas económicos, sino que también
          permitió un flujo constante de recursos y conocimientos, garantizando la
          estabilidad entre civilizaciones.
        </Typography>
      </Stack>
    // </Container>
  );
}
