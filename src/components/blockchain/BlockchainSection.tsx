
import { MainContainer } from "@/styled-components/global/global.styled";
import BlockchainSideA from "./BlockchainSideA";
import BlockchainSideB from "./BlockchainSideB";

export default function BlockchainSection() {
  return (
    <MainContainer id="blockchain">
      <BlockchainSideA />
      <BlockchainSideB />
    </MainContainer>
  );
}