import { Box } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

export default function RowsGrow() {
  return (
    <Box
        sx={{
          width: "100%",
          position: "absolute",
          left: 0,
          top: 128,
          display: 'flex',
          justifyContent: 'space-around'
          // transform: "translate(-50%)",
        }}
      >
        <KeyboardDoubleArrowUpIcon
          color="info"
          fontSize="large"
        />
        <KeyboardDoubleArrowUpIcon
          color="info"
          fontSize="large"
        />
        <KeyboardDoubleArrowUpIcon
          color="info"
          fontSize="large"
        />
        <KeyboardDoubleArrowUpIcon
          color="info"
          fontSize="large"
        />
        <KeyboardDoubleArrowUpIcon
          color="info"
          fontSize="large"
        />
      </Box>
  );
}