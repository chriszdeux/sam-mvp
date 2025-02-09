"use client";
import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { cyan } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

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
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const bgColor = isUp
    ? theme.palette.customColors.lightGreen
    : theme.palette.customColors.lightRed;
  const whiteC = theme.palette?.success?.light 
  return (
    <Box
      p={1}
      // pt={md ? 0 : mt}
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        wrap: "no-wrap",
        alignItems: "center",
        width: `${md ? 100 : 32}%`,
        border: `1px solid ${bgColor}`,
        // boxShadow: `0 0 10px -3px ${cyan[200]}`,
        borderRadius: 2.5,
        backgroundColor: bgColor,
        // backgroundColor: theme.palette.customColors.lightBlue
      }}
    >
      <Avatar
        alt="Remy Sharp"
        src={src}
        sx={{
          boxShadow: `0 0 10px -3px ${cyan[200]}`,
          width: 55,
          height: 55,
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // alignItems: '',
        }}
      >
        <Typography variant="caption">Kanto</Typography>
        <Typography variant="body2">Kt</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Typography variant="body2" color={theme.palette.success.dark}>
          $ 3.1416
        </Typography>
        <Typography variant="caption" color={theme.palette.error.main}>
          44.5%
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isUp ? (
          <TrendingUpIcon color="success" />
        ) : (
          <TrendingDownIcon color="error" />
        )}
        <IconButton >
          <MoreVertIcon sx={{
            color: whiteC
          }}/>
        </IconButton>
      </Box>
    </Box>
  );
}
