
import { Autocomplete, styled } from "@mui/material";

export const AutocompleteStyled = styled(Autocomplete)(({ theme }) => ({
  "& .MuiFilledInput-root": {
    backgroundColor: theme.palette.customColors.inputBgColor,
    borderRadius: "4px",
    transition: "background-color 0.3s ease",

    "&:hover": {
      backgroundColor: theme.palette.customColors.inputBgColor, // Mantiene negro en hover
    },

    "&.Mui-focused": {
      backgroundColor: theme.palette.customColors.inputBgColor, // Mantiene negro en focus
      boxShadow: `0 0 5px ${theme.palette.primary.main}`,
    },
  },

  "& .MuiAutocomplete-inputRoot": {
    backgroundColor: theme.palette.customColors.inputBgColor, // Fondo negro para el input
    color: theme.palette.customColors.white,

    "&:hover": {
      backgroundColor: theme.palette.customColors.inputBgColor,
    },

    "&.Mui-focused": {
      backgroundColor: theme.palette.customColors.inputBgColor,
    },
  },

  "& .MuiPaper-root": {
    backgroundColor: theme.palette.customColors.inputBgColor, // Fondo negro en la lista desplegable
    color: theme.palette.customColors.white, // Texto blanco en la lista
  },

  "& .MuiAutocomplete-option": {
    backgroundColor: theme.palette.customColors.inputBgColor, // Fondo negro en las opciones
    color: theme.palette.customColors.white,

    "&:hover": {
      backgroundColor: theme.palette.primary.dark, // Azul oscuro en hover
    },
  },
}));
