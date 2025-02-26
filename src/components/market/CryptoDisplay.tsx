import { Container, Stack } from "@mui/material";
import AvImage from "../../public/img/planet.jpg";
import CryptoItemDisplay from "./CryptoItemDisplay";
export default function CryptoDisplay() {
  return (
    <Container>
      <Stack
        mt={5}
        direction="row"
        flexWrap="wrap"
        justifyContent="space-between"
        sx={{ gap: 2 }}
      >
        <CryptoItemDisplay src={AvImage.src} isUp />
        <CryptoItemDisplay src={AvImage.src} />
        <CryptoItemDisplay src={AvImage.src} />
      </Stack>
    </Container>
  );
}
