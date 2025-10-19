// Este import es necesario para que la extensión funcione
import '@mui/material/styles';

declare module '@mui/material/styles' {
  // Permitir una nueva clave en la paleta
  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  // Permitir que la prop 'color' del Button acepte 'neutral'
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

// Puedes hacer lo mismo para otros componentes como IconButton, TextField, etc.
declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    neutral: true;
  }
}