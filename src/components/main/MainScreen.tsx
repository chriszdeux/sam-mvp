import { Typography } from "@mui/material";
import MainText from "@/components/main/MainText";
import CallToActionButtons from "./CallToActionButtons";
import BackgroundImage from "./BackgroundImage";
import {
  MainInfoContainer,
  MainSection,
} from "@/styled-components/mainSection.styled";
import ListMainCryptos from "./ListMainCryptos";
import { animations } from "@/styles/animations";
import MainTitles from "./MainTitles";

export default function MainScreen() {
  return (
    <MainSection className={animations?.fadeIn}>
      <MainInfoContainer >
        <MainTitles />
        <MainText />
        <ListMainCryptos />
        <CallToActionButtons />
      </MainInfoContainer>
      <BackgroundImage />
      {/* {!md && <ListMainCryptos sx={cryptoDisplayStyle} />} */}
    </MainSection>
  );
}
