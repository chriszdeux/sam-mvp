import { ContainerCallToActionButtons } from "@/styled-components/mainSection.styled";
import { animations } from "@/styles/animations";
import { Button } from "@mui/material";

export default function CallToActionButtons() {
  return (
    <ContainerCallToActionButtons className={animations.fadeIn}>
      <Button sx={{ color: "white" }}>Mas información</Button>
      <Button variant="contained">
        Ver el mercado
      </Button>
    </ContainerCallToActionButtons>
  );
}
