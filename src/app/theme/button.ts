import { blue, teal, red, orange } from "@mui/material/colors";

export const buttonStyles: any = {
  MuiButton: {
    styleOverrides: {
      root: {
        fontSize: "1.3rem",
        height: 48,
        "&.Mui-loading": {
          position: "relative",
          pointerEvents: "none",
          opacity: 0.7,
        },
      },
      fullWidth: {
        width: "100%",
      },
      contained: {
        "&.MuiButton-primary": {
          backgroundColor: blue[500],
          "&:hover": {
            backgroundColor: blue[300],
          },
        },
        "&.MuiButton-secondary": {
          backgroundColor: teal[500],
          "&:hover": {
            backgroundColor: teal[300],
          },
        },
        "&.MuiButton-error": {
          backgroundColor: red[500],
          "&:hover": {
            backgroundColor: red[300],
          },
        },
        "&.MuiButton-warning": {
          backgroundColor: orange[500],
          "&:hover": {
            backgroundColor: orange[300],
          },
        },
      },
      outlined: {
        "&.MuiButton-primary": {
          borderColor: blue[500],
          color: blue[500],
          "&:hover": {
            borderColor: blue[300],
            backgroundColor: blue[50],
          },
        },
        "&.MuiButton-secondary": {
          borderColor: teal[500],
          color: teal[500],
          "&:hover": {
            borderColor: teal[300],
            backgroundColor: teal[50],
          },
        },
        "&.MuiButton-error": {
          borderColor: red[500],
          color: red[500],
          "&:hover": {
            borderColor: red[300],
            backgroundColor: red[50],
          },
        },
        "&.MuiButton-warning": {
          borderColor: orange[500],
          color: orange[500],
          "&:hover": {
            borderColor: orange[300],
            backgroundColor: orange[50],
          },
        },
      },
    },
  },
};
