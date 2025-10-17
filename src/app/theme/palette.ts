// palette.ts
import { PaletteOptions } from "@mui/material/styles";
import { teal, red, blue, orange } from "@mui/material/colors";

const nColor = 500;
const hoverColor = 300;
const light = 50;
const white = "#f7f7f7";
const bgColor = "rgba(0, 0, 0, 1)";
const inputBgColor = "#121212";

export const palette: PaletteOptions = {
  mode: "dark", // 👈 si quieres tema oscuro
  background: {
    default: bgColor,
    paper: "#1e1e1e",
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
  customColors: {
    white: white,
    lightBlue: "rgba(5, 143, 207, 0.14)",
    lightRed: "rgba(255, 98, 98, 0.14)",
    lightGreen: "rgba(113, 247, 184, 0.15)",
    transparentBlue: "rgba(5, 143, 207, 0.48)",
    transparent: "rgba(0, 0,0, 0.48)",
    inputBgColor: inputBgColor,
  },
};
