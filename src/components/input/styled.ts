import { TextField, styled } from '@mui/material';

export const StyledInput = styled(TextField)<{ info?: boolean }>(({ theme, error, info }) => ({
  '& .MuiFilledInput-root': {
    backgroundColor: '#2A2A2A',
    transition: 'background-color 200ms ease-in-out',
    '&::before, &::after': {
      borderBottom: 'none',
    },
    '&:hover': {
      backgroundColor: '#3A3A3A',
    },
    '&.Mui-focused': {
      backgroundColor: error
        ? theme.palette.error.main
        : info
        ? theme.palette.info.main
        : theme.palette.primary.main,
    },
  },
  '& .MuiInputBase-input': {
    color: theme.palette.common.white,
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: error || info ? theme.palette.common.white : theme.palette.primary.contrastText,
  },
  '& .MuiInputLabel-root.Mui-error': {
    color: theme.palette.error.main,
  },
}));