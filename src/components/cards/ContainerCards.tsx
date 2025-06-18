'use client'
import { MainContainer } from "@/styled-components/global/global.styled";
import GridCards from "./GridCards";
import { Stack, Typography } from "@mui/material";
import { useRef } from "react";
import { useView } from "@/hooks/useView.hook";
import { delayAnimation } from "@/utils/delayAnimation.utils";
import { animations } from "@/styles/animations";
import { useRandomCurrenciesQuery } from "@/api/cryptocurrencies/cryptocurrencies";

export default function ContainerCards() {
  const ref = useRef(null);
  const { data, error, isLoading } = useRandomCurrenciesQuery();
  const isVisible = useView(ref);
  const { fadeLeft } = animations;
  console.log(data)
  return (
    <MainContainer id="crytpos" ref={ref}>
      {
        isVisible && 
        <Stack spacing={6}>
        <Typography variant="h2" className={fadeLeft} sx={delayAnimation(1)}>
            El amanecer de la red universal
          </Typography>
        <GridCards />
        </Stack>
      
      }
    </MainContainer>
  );
}
