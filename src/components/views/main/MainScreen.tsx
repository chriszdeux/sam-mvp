import {
  Typography,
} from "@mui/material";
import MainText from "@/components/views/main/MainText";
import CallToActionButtons from "./CallToActionButtons";
import BackgroundImage from "./BackgroundImage";
import { MainInfoContainer, MainSection } from "@/styled-components/mainSection.styled";
import ListMainCryptos from "./ListMainCryptos";

export default function MainScreen() {

  return (
    <MainSection>
      <MainInfoContainer>
        <Typography
          variant="body1"
          color="primary"
          align="center"
        >
          Desata el potencial de la humanidad en el cosmos
        </Typography>
        <Typography
          variant="body2"
          color="primary"
          align="center"
        >
          Descubre el horizonte de la civilizacion digital
        </Typography>
        <MainText />
        <ListMainCryptos />
        <CallToActionButtons />
      </MainInfoContainer>
      <BackgroundImage />
      {/* {!md && <ListMainCryptos sx={cryptoDisplayStyle} />} */}
    </MainSection>
  );
}
