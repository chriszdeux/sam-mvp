// src/theme/components/checkbox.ts

import { blue } from '@mui/material/colors';

export const checkboxStyles: any = {
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: blue[300],
        '&.Mui-checked': {
          color: blue[500],
        },
        '&:not(.Mui-checked)': {},
      },
    },
  },
};
