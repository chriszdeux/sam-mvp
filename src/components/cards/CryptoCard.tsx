'use client'
import { CryptoCardStyled } from "@/styled-components/cards.style";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import IMG from "../../assets/img/prisma.jpg";
import { animations } from "@/styles/animations";
import { useRouter } from "next/navigation";

interface Props {
  animationDelay?: number
}

export default function CryptoCard({
  animationDelay = 0.5
}: Props) {
  const {palette} = useTheme()
  const history = useRouter()
  const size = 300
  const {fadeIn} = animations

  const handleNav = () => history.push("/market/123232/chart")
  return (
    <CryptoCardStyled sx={{animationDelay: `${animationDelay}s`}} className={fadeIn} onClick={handleNav}>
      <Box width={size} height={size} position="absolute" sx={{
        borderRadius: '50%',
        overflow: "hidden",
        top: '50%',
        right: -80,
        transform: 'translateY(-50%)',
        zIndex: 0,
        border: `1px solid ${palette.primary.main}`
      }}>
        <Image src={IMG} alt="img image description" width={size} height={size} objectFit="cover" />
        <Image src={IMG} alt="img image description" width={size} height={size} objectFit="cover" style={{
          position: "absolute",
          top: 0,
          right: 0,
          filter: 'blur(10px)',
          opacity: 0.5,
          zIndex: -1
        }}/>
      </Box>
      <Stack sx={{zIndex: 1}}>
        <Typography variant="h4">Crypto Name</Typography>
        <Typography variant="body1">Symbol</Typography>
      </Stack>
      <Stack sx={{zIndex: 1}}>
        <Typography variant="h4">Crypto Price: 158</Typography>
        <Typography variant="body1">24h: 6.12%</Typography>
      </Stack>
    </CryptoCardStyled>
  );
}