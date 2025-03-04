// src/theme/components/textField.ts

import { blue, teal } from '@mui/material/colors';

const inputBgColor = "#121212";

export const textFieldStyles: any = {
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          backgroundColor: inputBgColor,
          '& fieldset': {
            borderColor: blue[500],
          },
          '&:hover fieldset': {
            borderColor: blue[300],
          },
          '&.Mui-focused fieldset': {
            borderColor: teal[500],
          },
        },
        '& .MuiInputBase-input': {
          backgroundColor: inputBgColor,
          color: '#f7f7f7',
          fontSize: '1.4rem',
        },
        '& .MuiInputLabel-root': {
          color: blue[300],
          fontSize: '1.4rem',
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: teal[500],
        },
      },
    },
  },
};
