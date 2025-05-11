import PageContainer from "@/components/containers/PageContainer";
import MarketView from "@/components/market/MarketView";
import { MainContainer } from "@/styled-components/global/global.styled";
import ImageCube from "../../public/img/blockchain_cube.jpg";
import MainImageBG from "@/components/image-background/MainImageBG";
import CryptoCard from "@/components/cards/CryptoCard";
import { Stack } from "@mui/material";
import GridCards from "@/components/cards/GridCards";

export default function MarketPage() {
  return (
    <PageContainer title="Seleccion Aleatoria" img={ImageCube}>
      <GridCards />
      {/* <MarketView /> */}
    </PageContainer>
  );
}
