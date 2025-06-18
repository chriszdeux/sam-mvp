import BlockchainDiv from "@/components/blockchain_divider/BlockchainDiv";
import HistoryScreen from "@/components/history/HistoryScreen";
import MainScreen from "@/components/main/MainScreen";
import ImageCube from "../assets/img/blockchain_cube.jpg";
import BlockchainSection from "@/components/blockchain/BlockchainSection";
import { delayAnimation } from "@/utils/delayAnimation.utils";
import { animations } from "@/styles/animations";
import GridCards from "@/components/cards/GridCards";
import ContainerCards from "@/components/cards/ContainerCards";

export default function page() {
  const { fadeIn } = animations;

  return (
    <>
      <MainScreen />
      <ContainerCards />
      <BlockchainDiv
        text="Blockchain: el motor que transforma cómo interactuamos en el mundo digital"
        src={ImageCube}
        alt="blockchain en todas partes"
        className={fadeIn}
        sx={delayAnimation(1)}
      />
      <HistoryScreen />
      <BlockchainDiv
        text="Blockchain: el motor que transforma cómo interactuamos en el mundo digital"
        src={ImageCube}
        alt="blockchain en todas partes"
        className={fadeIn}
        sx={delayAnimation(1)}
      />
      <BlockchainSection />
    </>
  );
}
