import BlockchainSection from "@/components/blockchain/BlockchainSection";
import BlockchainDiv from "@/components/blockchain_divider/BlockchainDiv";
import HistoryScreen from "@/components/history/HistoryScreen";
import MainScreen from "@/components/main/MainScreen";
import ImageCube from "../public/img/blockchain_cube.jpg";
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
      {/* <MainImageBG img={StarsImage}/> */}
    </>
  );
}
