"use client";
import { Goldman } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { teal, red, blue, orange } from "@mui/material/colors";
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    customColors: {
      white: string;
      lightBlue: string;
      lightRed: string;
      lightGreen: string;
      transparentBlue: string;
    };
  }

  interface PaletteOptions {
    customColors?: {
      white?: string;
      lightBlue?: string;
      lightRed?: string;
      lightGreen?: string;
      transparentBlue: string;
    };
  }
}

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
    success: {
      main: teal[nColor],
      light: teal[light],
      dark: teal[hoverColor],
      contrastText: white,
    },
    primary: {
      main: blue[nColor],
      light: blue[light],
      dark: blue[hoverColor],
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
    customColors: {
      white: white,
      lightBlue: 'rgba(5, 143, 207, 0.14)',
      lightRed: 'rgba(255, 98, 98, 0.14)',
      lightGreen: 'rgba(113, 247, 184, 0.15)',
      transparentBlue: 'rgba(5, 143, 207, 0.48)'
    }
  },
  breakpoints: {
    values: {
      xs: 375,
      sm: 390,
      md: 932,
      lg: 1440,
      xl: 1920,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          body1: "p",
          body2: "p",
          caption: "span",
          overline: "span",
        },
      },
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
          fontSize: "1.6rem",
        },
        body2: {
          fontSize: "1.4rem",
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
          height: 48,
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
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: blue[nColor], // Color del borde normal
            },
            "&:hover fieldset": {
              borderColor: blue[hoverColor], // Color del borde al pasar el mouse
            },
            // "&.Mui-focused fieldset": {
            //   borderColor: teal[nColor], // Color cuando está enfocado
            // },
          },
          "& .MuiInputBase-input": {
            color: white, // Color del texto
          },
          "& .MuiInputLabel-root": {
            color: blue[hoverColor], // Color de la etiqueta
          },
          // "& .MuiInputLabel-root.Mui-focused": {
          //   color: teal[nColor], // Color de la etiqueta cuando está enfocado
          // },
        },
      },
    },    
  },
});

export default theme;
