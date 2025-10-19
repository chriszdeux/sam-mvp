import { Theme, alpha } from '@mui/material/styles';

export const glassmorphismEffect = (theme: Theme) => ({
  backgroundColor:'rgba(0,0,0,0.9)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)', // Soporte para Safari,
  border: 'none',
  padding: 0
  // border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
});