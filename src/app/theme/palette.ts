import { PaletteOptions } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const primaryColor = '#00E8C7';
const secondaryColor = '#FF8C00';
const errorColor = '#FF4D4D';

export const palette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: primaryColor,
    light: '#4dffdd',
    dark: '#00b59b',
    contrastText: '#000000',
  },
  secondary: {
    main: secondaryColor,
    contrastText: '#000000',
  },
  // Nueva variante de color "neutral"
  neutral: {
    main: grey[500],
    contrastText: '#fff',
  },
  background: {
    default: '#121212',
    paper: '#1E1E1E',
  },
  text: {
    primary: '#E0E0E0',
    secondary: '#A0A0A0',
  },
  error: {
    main: errorColor,
  },
  info: { 
    main: '#4A90E2',
  }
};