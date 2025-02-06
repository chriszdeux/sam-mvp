import BlockchainSection from "@/components/views/blockchain/BlockchainSection";
import BlockchainDiv from "@/components/views/blockchain_divider/BlockchainDiv";
import HistoryScreen from "@/components/views/history/HistoryScreen";
import MainScreen from "@/components/views/main/MainScreen";

export default function Home() {
  const imageCube = "../public/img/blockchain_cube.jpg"
  return (
    <>
      <MainScreen />
      <HistoryScreen />
      <BlockchainDiv text="Blockchain: el motor que transforma cómo interactuamos en el mundo digital" img={imageCube} alt="blockchain en todas partes"/>
      <BlockchainSection />
    </>
  );
}
