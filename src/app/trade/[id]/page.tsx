import PageContainer from "@/components/containers/PageContainer";
import TabsContainer from "@/components/containers/TabsContainer";
import { tradeRoutes } from "./tradeRoutes";

export default function TradePage() {
  return (
    <PageContainer>
      <TabsContainer data={tradeRoutes}/>
    </PageContainer>
  );
}