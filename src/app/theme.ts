// src/theme.ts
"use client";
import { Goldman } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { teal, red, blue, orange } from "@mui/material/colors";

const nColor = 500;
const hoverColor = 300;
const light = 50;
const white = "#f7f7f7";
const bgColor = "rgba(0, 0, 0, 1)";
// const bgColor = "#070707";

const goldman = Goldman({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: `${goldman.style.fontFamily}, sans-serif`,
  },
  palette: {
    background: {
      default: bgColor,
    },
    primary: {
      main: blue[nColor],
      light: blue[light],
      dark: blue[hoverColor],
      contrastText: white,
    },
    secondary: {
      main: teal[nColor],
      light: teal[light],
      dark: teal[hoverColor],
      contrastText: white,
    },
    error: {
      main: red[nColor],
      light: red[light],
      dark: red[hoverColor],
      contrastText: white,
    },
    warning: {
      main: orange[nColor],
      light: orange[light],
      dark: orange[hoverColor],
      contrastText: white,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 430,
      md: 768,
      lg: 1440,
      xl: 1920,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: blue[50],
        },
        h1: {
          fontSize: "4rem",
          fontWeight: 700,
        },
        h2: {
          fontSize: "2.8rem",
          fontWeight: 700,
        },
        h3: {
          fontSize: "2.2rem",
          fontWeight: 700,
        },
        body1: {
          fontSize: "2.2rem",
        },
        body2: {
          fontSize: "1.6rem",
        },
        caption: {
          fontSize: "1rem",
        },
        overline: {
          fontSize: "1rem",
        },
        
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: 348,
          height: 48
        },
        fullWidth: {
          width: "100%",
        },
        contained: {
          "&.MuiButton-primary": {
            backgroundColor: blue[nColor],
            "&:hover": {
              backgroundColor: blue[hoverColor],
            },
          },
          "&.MuiButton-secondary": {
            backgroundColor: teal[nColor],
            "&:hover": {
              backgroundColor: teal[hoverColor],
            },
          },
          "&.MuiButton-error": {
            backgroundColor: red[nColor],
            "&:hover": {
              backgroundColor: red[hoverColor],
            },
          },
          "&.MuiButton-warning": {
            backgroundColor: orange[nColor],
            "&:hover": {
              backgroundColor: orange[hoverColor],
            },
          },
        },
        outlined: {
          "&.MuiButton-primary": {
            borderColor: blue[nColor],
            color: blue[nColor],
            "&:hover": {
              borderColor: blue[hoverColor],
              backgroundColor: blue[light],
            },
          },
          "&.MuiButton-secondary": {
            borderColor: teal[nColor],
            color: teal[nColor],
            "&:hover": {
              borderColor: teal[hoverColor],
              backgroundColor: teal[light],
            },
          },
          "&.MuiButton-error": {
            borderColor: red[nColor],
            color: red[nColor],
            "&:hover": {
              borderColor: red[hoverColor],
              backgroundColor: red[light],
            },
          },
          "&.MuiButton-warning": {
            borderColor: orange[nColor],
            color: orange[nColor],
            "&:hover": {
              borderColor: orange[hoverColor],
              backgroundColor: orange[light],
            },
          },
        },
        text: {
          "&.MuiButton-primary": {
            color: blue[nColor],
            "&:hover": {
              color: blue[hoverColor],
            },
          },
          "&.MuiButton-secondary": {
            color: teal[nColor],
            "&:hover": {
              color: teal[hoverColor],
            },
          },
          "&.MuiButton-error": {
            color: red[nColor],
            "&:hover": {
              color: red[hoverColor],
            },
          },
          "&.MuiButton-warning": {
            color: orange[nColor],
            "&:hover": {
              color: orange[hoverColor],
            },
          },
        },
      },
    },
  },
});

export default theme;
