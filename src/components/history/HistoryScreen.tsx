import { MainContainer } from "@/styled-components/global/global.styled";
import HistorySideA from "./HisotySideA";
import HistorySideB from "./HistorySideB";

export default function HistoryScreen() {

  return (
    <MainContainer id="history">
      <HistorySideA />
      <HistorySideB />
    </MainContainer>
  );
}
