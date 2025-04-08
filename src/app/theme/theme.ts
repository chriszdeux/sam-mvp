"use client";
import { Goldman } from "next/font/google";
import "@mui/material/styles";
import { createTheme } from "@mui/material";
import { typography } from "./typography";
import { buttonStyles } from "./button";
import { textFieldStyles } from "./textfield";
import { palette } from "./palette";
import { breakpoints } from "./breakpoints";
import { checkboxStyles } from "./checkbox";

declare module "@mui/material/styles" {
  interface Palette {
    customColors: {
      white: string;
      lightBlue: string;
      lightRed: string;
      lightGreen: string;
      transparentBlue: string;
      inputBgColor: string;
      transparent: string;
    };
  }

  interface PaletteOptions {
    customColors?: {
      white?: string;
      lightBlue?: string;
      lightRed?: string;
      lightGreen?: string;
      transparentBlue: string;
      inputBgColor: string;
      transparent: string;
    };
  }
}

const goldman = Goldman({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: `${goldman.style.fontFamily}, sans-serif`,
  },
  palette,
  breakpoints,
  components: {
    ...typography,
    ...buttonStyles,
    ...textFieldStyles,
    ...checkboxStyles
  },
});

export default theme;
