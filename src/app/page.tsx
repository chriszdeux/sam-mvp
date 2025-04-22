'use client'
import BlockchainSection from "@/components/blockchain/BlockchainSection";
import BlockchainDiv from "@/components/blockchain_divider/BlockchainDiv";
import HistoryScreen from "@/components/history/HistoryScreen";
import MainScreen from "@/components/main/MainScreen";
import ImageCube from "../public/img/blockchain_cube.jpg";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { removeLocalStorage } from "@/utils/localStorage.util";
import { localStorageList } from "@/enums/localStorage";
import LoadingModal from "@/components/modal/LoadingModal";
import { useEffect } from "react";

export default function Home() {
  const isLogin = useSelector((state:RootState) => state.auth.isLogin)
  useEffect(() => {
      !isLogin && removeLocalStorage(localStorageList.token)
  }, [isLogin])
  
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
    </>
  );
}
