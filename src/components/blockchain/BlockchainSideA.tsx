import { Box, Stack, Typography } from "@mui/material";
import BlockchainImg from "../../public/img/blockchain_cube.jpg";
import { BlockchainImage } from "@/styled-components/blockchainSection.style";
import FadeComponent from "@/components/fades/FadeComponent";

export default function BlockchainSideA() {
  return (
    <Box>
      <Typography variant="h4"  textAlign="center" mb={2}>
        La Espina Dorsal del Universo Digital
      </Typography>
      <Stack spacing={2} alignItems="center">
        <Typography variant="body1"  mb={1}>
          El blockchain es la base de la vida interestelar, con bloques que
          registran datos inmutables en un sistema descentralizado. Los nodos
          representan planetas y estaciones, mientras las recompensas impulsan
          la cooperación, conectando colonias en expansión.
        </Typography>
        {/* <CubeComponent
          size={40}
          arrSize={9}
          colors={[blue[300]]}
        /> */}
        <FadeComponent all caption="El poder de blockchain">
          <BlockchainImage 
            src={BlockchainImg}
            alt="blockchain configurations"
          />
        </FadeComponent>
      </Stack>
    </Box>
  );
}
