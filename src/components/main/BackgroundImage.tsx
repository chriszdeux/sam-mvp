import Image from "next/image";
import ImageBG from "../../assets/img/main_bg.jpg";
import { FigureStyle, MainBGImage } from "@/styled-components/mainSection.styled";
import { BottomFade, LeftFade } from "@/styled-components/global/effects.styled";
import { animations } from "@/styles/animations";
import FadeComponent from "../fades/FadeComponent";
import PageContainer from "../containers/PageContainer";

export default function BackgroundImage() {
  return (
    <PageContainer img={ImageBG} sx={{
      position: 'absolute',
      left: 0, top: 0
    }}>

    </PageContainer>
      // <MainBGImage  src={ImageBG} alt="Background image" className={animations.pulse}/>
  );
}
