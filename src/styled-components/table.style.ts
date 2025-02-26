import { ButtonGroup, IconButton, styled, TextField } from "@mui/material";

export const PaginationButtons = styled(ButtonGroup)(({ theme }) => ({
  width: '100%',
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: 80,
  marginTop: 16,
  [theme.breakpoints.up("md")]: {
    width: "25%",
    float: 'right'
  }
}));

export const PaginationButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.customColors.white,
}));

export const PaginationInput = styled(TextField)(({ theme }) => ({
  width: "20%",
  "& .MuiInputBase-input": {
    textAlign: "center",
  },
}));
