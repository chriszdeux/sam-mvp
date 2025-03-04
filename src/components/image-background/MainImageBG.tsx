import { StaticImageData } from "next/image";
import FadeComponent from "../fades/FadeComponent";
import { CustomImage } from "@/styled-components/global/images.styled";

interface Props {
  img: StaticImageData;
}
export default function MainImageBG({ img }: Props) {
  return (
    <FadeComponent
      all
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -2,
        filter: "blur(4px) opacity(.2)",
      }}
    >
      <CustomImage
        src={img}
        alt="Stars Bg"
        style={{
          height: "100vh",
        }}
      />
    </FadeComponent>
  );
}
