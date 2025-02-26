"use client";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import {
  CryptoDisplayContainer,
  CryptoDisplayImage,
} from "@/styled-components/marketSection.style";

interface Props {
  width?: number;
  src: string;
  main?: boolean;
  isChart?: boolean;
  mt?: number;
  isUp?: boolean;
}

export default function CryptoItemDisplay({ src, isUp = false }: Props) {
  const theme = useTheme();
  const whiteC = theme.palette?.success?.light;

  return (
    <CryptoDisplayContainer isUp={isUp} p={1}>
      <CryptoDisplayImage alt="Crypto Logo" src={src} />
      
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="body2">Kanto</Typography>
        <Typography variant="body1">Kt</Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
        <Typography variant="body1" color={theme.palette.success.dark}>
          $ 3.1416
        </Typography>
        <Typography variant="body2" color={theme.palette.error.main}>
          44.5%
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {isUp ? (
          <TrendingUpIcon color="success" />
        ) : (
          <TrendingDownIcon color="error" />
        )}
        <IconButton>
          <MoreVertIcon sx={{ color: whiteC }} />
        </IconButton>
      </Box>
    </CryptoDisplayContainer>
  );
}
