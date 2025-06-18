'use client'
import { Stack, Typography } from "@mui/material";
import ImageHistory from "../../assets/img/history_img.jpg";
import FadeComponent from "@/components/fades/FadeComponent";
import { HistoryImage } from "@/styled-components/historySection.styled";
import { animations } from "@/styles/animations";
import { delayAnimation } from "@/utils/delayAnimation.utils";
import { useRef } from "react";
import { useView } from "@/hooks/useView.hook";

export default function HistorySideA() {
  const ref = useRef(null);
  const isVisible = useView(ref);
  const { fadeLeft } = animations;
  return (
    // <Container>
    <Stack spacing={2} ref={ref}>
      {isVisible && (
        <>
          <Typography variant="h2" className={fadeLeft} sx={delayAnimation(1)}>
            El amanecer de la red universal
          </Typography>
          <FadeComponent
            all
            caption="La historia comienza de nuevo"
            className={fadeLeft}
            sx={delayAnimation(2)}
          >
            <HistoryImage src={ImageHistory} alt="Background image" />
          </FadeComponent>
          <Typography
            variant="body1"
            component="p"
            mb={1}
            className={fadeLeft}
            sx={delayAnimation(3)}
          >
            La humanidad, en su afán de expansión, agotó los recursos de la
            Tierra y buscó refugio en las estrellas. Pero con esta migración
            masiva surgió un nuevo desafío: la economía interestelar. Los
            sistemas tradicionales no podían sostenerse en un entorno
            descentralizado y diverso.
          </Typography>

          <Typography
            variant="body1"
            component="p"
            className={fadeLeft}
            sx={delayAnimation(4)}
          >
            Así nació el blockchain intergaláctico, una red que conectaba
            colonias distantes, estaciones espaciales y flotas de exploración.
            Este avance tecnológico no solo resolvió problemas económicos, sino
            que también permitió un flujo constante de recursos y conocimientos,
            garantizando la estabilidad entre civilizaciones.
          </Typography>
        </>
      )}
    </Stack>
    // </Container>
  );
}
