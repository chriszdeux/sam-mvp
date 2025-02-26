import {
  Avatar,
  Box,
  Container,
  IconButton,
  TextField,
  styled,
} from "@mui/material";
import { cyan } from "@mui/material/colors";

export const FilterContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: 4,
  marginTop: 24,
  marginBottom: 24,
}));

export const FilterInput = styled(TextField)(({ theme }) => ({
  width: "70%",
  [theme.breakpoints.up("md")]: {
    width: "30%",
  },
}));

interface CryptoDisplayContainerProps {
  isUp?: boolean;
}

export const CryptoDisplayContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isUp",
})<CryptoDisplayContainerProps>(({ theme, isUp }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  alignItems: "center",
  width: "32%",
  border: `1px solid ${
    isUp
      ? theme.palette.customColors.lightGreen
      : theme.palette.customColors.lightRed
  }`,
  borderRadius: 2.5,
  backgroundColor: isUp
    ? theme.palette.customColors.lightGreen
    : theme.palette.customColors.lightRed,
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const CryptoDisplayImage = styled(Avatar)({
  boxShadow: `0 0 10px -3px ${cyan[200]}`,
  width: 55,
  height: 55,
});



export const CryptoPercentageBarContainer = styled(Box)(({ theme }) => ({
  width: "70%",
  height: 10,
  display: "flex",
  overflow: "hidden",
  borderRadius: 8,
}));

interface CryptoPercentageBarProps {
  isLeft?: boolean;
}
export const CryptoPercentageBarIcons = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isLeft",
})<CryptoPercentageBarProps>(({ isLeft = false }) => ({
  textAlign: isLeft ? "left" : "right",
}));
