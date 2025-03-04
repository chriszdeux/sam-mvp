import { Typography } from "@mui/material";
import CryptoLayout from "../CryptoLayout";
import DescriptionBlockA from "@/components/crypto_description/DescriptionBlockA";
import ContinueDescription from "@/components/crypto_description/ContinueDescription";
import DescriptionPoints from "@/components/crypto_description/DescriptionPoints";

export default function DescriptionPage() {
  return (
    <CryptoLayout title="Kanto: El Núcleo de la Economía Galáctica">
      <DescriptionBlockA />
      <ContinueDescription />
      <DescriptionPoints />
    </CryptoLayout>
  ); 
}
