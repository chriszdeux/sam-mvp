import { Box, Paper, styled } from '@mui/material';

export const CardWrapper = styled(Paper)<{ width?: number | string }>(({ theme, width }) => ({
  position: 'relative',
  maxWidth: width || 320,
  padding: theme.spacing(3),
  backgroundColor: '#1E1E1E', // Un fondo oscuro, puedes usar theme.palette.background.paper
  borderRadius: theme.shape.borderRadius,
  border: '2px solid transparent', // Borde base para mantener el tamaño
  overflow: 'hidden',
  zIndex: 1,
  paddingRight: 8,
  // Barra de acento superior
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '35%',
    height: '8px',
    backgroundColor: theme.palette.primary.main,
    zIndex: 2,
  },

  // Borde exterior
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: theme.shape.borderRadius,
    border: `2px solid ${theme.palette.primary.main}`,
    zIndex: -1,
  },
}));

export const IconWrapper = styled(Box)({
  position: 'absolute',
  bottom: '1rem',
  right: '1rem',
  opacity: 0.8,
});