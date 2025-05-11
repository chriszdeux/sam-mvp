'use client'
import { Box, Stack, Typography } from "@mui/material";
import BlockchainImg from "../../public/img/blockchain_cube.jpg";
import { BlockchainImage } from "@/styled-components/blockchainSection.style";
import FadeComponent from "@/components/fades/FadeComponent";
import { useRef } from "react";
import { useView } from "@/hooks/useView.hook";
import { animations } from "@/styles/animations";
import { delayAnimation } from "@/utils/delayAnimation.utils";

export default function BlockchainSideA() {
  const ref = useRef(null);
  const isVisible = useView(ref);

  const {fadeLeft, pulse} = animations
  return (
    <Box ref={ref}>
      {isVisible && (
        <>
          <Typography variant="h2" mb={2} className={fadeLeft} sx={delayAnimation(1)}>
            La Espina Dorsal del Universo Digital
          </Typography>
          <Stack spacing={2} alignItems="center">
            <Typography variant="body1" mb={1} className={fadeLeft} sx={delayAnimation(2)}>
              El blockchain es la base de la vida interestelar, con bloques que
              registran datos inmutables en un sistema descentralizado. Los
              nodos representan planetas y estaciones, mientras las recompensas
              impulsan la cooperación, conectando colonias en expansión.
            </Typography>
            {/* <CubeComponent
          size={40}
          arrSize={9}
          colors={[blue[300]]}
        /> */}
            <FadeComponent all caption="El poder de blockchain" className={fadeLeft} sx={delayAnimation(3)}>
              <BlockchainImage
                src={BlockchainImg}
                alt="blockchain configurations"
                // className={pulse}
              />
            </FadeComponent>
          </Stack>
        </>
      )}
    </Box>
  );
}
