'use client'
import { createTheme, alpha } from '@mui/material/styles';

const primaryColor = '#00E8C7';
const secondaryColor = '#FF8C00';
const errorColor = '#FF4D4D';

export const theme = createTheme({
  palette: {
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
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    h4: {
      fontWeight: 700,
      letterSpacing: '0.05em',
    },
    body1: {
      fontSize: '0.9rem',
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
            borderRadius: '4px',
            padding: '8px 16px',
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '2px',
          border: '1px solid #333333',
          padding: '16px',
        },
      },
    },
    MuiTextField: {
        styleOverrides: {
            root: ({ ownerState, theme }) => ({
                '& .MuiInputBase-root': {
                    backgroundColor: ownerState.color && theme.palette[ownerState.color]
                        // Si el color existe en la paleta (e.g., 'primary', 'info'),
                        // usa una versión de ese color con baja opacidad como fondo.
                        ? alpha(theme.palette[ownerState.color].main, 0.1)
                        // Si no, usa el color de fondo por defecto.
                        : '#2A2A2A',
                },
            }),
        }
    }
  },
});