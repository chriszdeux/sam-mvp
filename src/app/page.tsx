import BlockchainSection from "@/components/views/blockchain/BlockchainSection";
import BlockchainDiv from "@/components/views/blockchain_divider/BlockchainDiv";
import HistoryScreen from "@/components/views/history/HistoryScreen";
import MainScreen from "@/components/views/main/MainScreen";
import ImageCube from "../public/img/blockchain_cube.jpg";
import Image from "next/image";
import StarsImage from "../public/img/stars_bg.jpg";
import FadeComponent from "@/components/fades/FadeComponent";
import MainImageBG from "@/components/image-background/MainImageBG";
export default function Home() {
  return (
    <>
      <MainScreen />
      <HistoryScreen />
      <BlockchainDiv
        text="Blockchain: el motor que transforma cómo interactuamos en el mundo digital"
        src={ImageCube}
        alt="blockchain en todas partes"
      />
      <BlockchainSection />
      <MainImageBG img={StarsImage}/>
    </>
  );
}
