// theme.ts
"use client";

import { createTheme } from "@mui/material/styles";
import { Goldman } from "next/font/google";
import { palette } from "./palette";
import { typography } from "./typography";
import { buttonStyles } from "./button";
import { textFieldStyles } from "./textfield";
import { checkboxStyles } from "./checkbox";
import { breakpoints } from "./breakpoints";

// 👇 Extiende el tipado de Palette para customColors
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
      transparentBlue?: string;
      inputBgColor?: string;
      transparent?: string;
    };
  }
}

const goldman = Goldman({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const theme = createTheme({
  typography: {
    fontFamily: `${goldman.style.fontFamily}, sans-serif`,
  },
  palette,
  breakpoints,
  components: {
    ...typography,
    ...buttonStyles,
    ...textFieldStyles,
    ...checkboxStyles,
  },
});

export default theme;
