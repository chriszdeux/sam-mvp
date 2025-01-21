"use client";
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";

export default function CallToActionButtons() {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: md ? "column" : "row",
        justifyContent: !md ? "flex-end" : "center",
        alignItems: !md ? "flex-end" : "center",
        gap: 2,
        marginTop: 4,
      }}
    >
      {md ? (
        <>
          <Button variant="contained" color="primary">
            Ver el mercado
          </Button>
          <Button sx={{ color: "white" }}>Mas información</Button>
        </>
      ) : (
        <>
          <Button sx={{ color: "white" }}>Mas información</Button>
          <Button variant="contained" color="primary">
            Ver el mercado
          </Button>
        </>
      )}
    </Box>
  );
}
