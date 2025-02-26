import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { CryptoPercentageBarContainer, CryptoPercentageBarIcons } from "@/styled-components/marketSection.style";
export const BuySellBar = () => {
  const { palette } = useTheme();
  return (
    <>
      <CryptoPercentageBarIcons isLeft>
        <Typography variant="caption" color={palette.primary.main}>
          Compra
        </Typography>
        <TrendingUpIcon color="success" />
      </CryptoPercentageBarIcons>
      <CryptoPercentageBarContainer>
        <Box
          sx={{
            width: "70%",
            backgroundColor: palette.success.main,
          }}
        ></Box>
        <Box
          sx={{
            width: "30%",
            backgroundColor: palette.error.main,
          }}
        ></Box>
      </CryptoPercentageBarContainer>
      <CryptoPercentageBarIcons>
        <Typography variant="caption" color={palette.primary.main}>
          Venta
        </Typography>
        <TrendingDownIcon color="error" />
      </CryptoPercentageBarIcons>
    </>
  );
};
