import { TypographyOptions } from '@mui/material/styles/createTypography';

export const typography: TypographyOptions = {
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
};