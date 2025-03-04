import PageContainer from "@/components/containers/PageContainer";
import MarketView from "@/components/market/MarketView";
import { MainContainer } from "@/styled-components/global/global.styled";

export default function MarketPage() {
  return (
    <PageContainer title="Seleccion Aleatoria">
      <MarketView />
    </PageContainer>
  );
}
