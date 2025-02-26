import Image from "next/image";
import ImageBG from "../../public/img/main_bg.jpg";
import { FigureStyle } from "@/styled-components/mainSection.styled";
import { BottomFade, LeftFade } from "@/styled-components/global/effects.styled";

export default function BackgroundImage() {
  return (
    <FigureStyle>
      <Image  src={ImageBG} alt="Background image"/>
      <LeftFade></LeftFade>
      <BottomFade></BottomFade>
    </FigureStyle>
  );
}
