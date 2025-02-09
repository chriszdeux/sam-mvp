import Image, { StaticImageData } from "next/image";
import FadeComponent from "../fades/FadeComponent";

interface Props {
  img: StaticImageData
}
export default function MainImageBG({
  img
}: Props) {
  return (
    <FadeComponent all sx={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -2,
      filter: 'blur(4px) opacity(.2)'
    }}>

      <Image src={img} alt="Stars Bg"  style={{
        width: '100%',
        height: '100vh',
        objectFit: 'cover',
      }}/>
    </FadeComponent>
  );
}