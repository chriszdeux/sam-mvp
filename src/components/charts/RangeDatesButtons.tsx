"use client";
import { PaginationButtons } from "@/styled-components/table.style";
import {
  Autocomplete,
  Button,
  IconButton,
  Stack,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function RangeDatesButtons() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Stack
      mb={4}
      direction={isMobile ? "column" : "row"}
      justifyContent="flex-end"
      alignItems="center"
      spacing={2}
    >
      <PaginationButtons
        sx={{
          width: isMobile ? "100%" : "25%",
          margin: 0
        }}
      >
        <IconButton color="info">1d</IconButton>
        <IconButton color="info">1w</IconButton>
        <IconButton color="info">1m</IconButton>
        <IconButton color="info">1y</IconButton>
      </PaginationButtons>
      <Autocomplete
        options={[]}
        renderInput={(params) => (
          <TextField {...params} label="Comparar" size="small" />
        )}
        noOptionsText="No hay opciones"
        sx={{ width: isMobile ? "100%" : "30%" }}
      />
    </Stack>
  );
}
