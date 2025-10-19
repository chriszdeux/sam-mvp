import { Box, styled } from '@mui/material';

export const SnapWrapper = styled(Box)({
  height: '100dvh',
  width: '100%',
  overflowY: 'auto',
  scrollSnapType: 'y mandatory',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

// Le enseñamos al componente a aceptar una nueva prop para la imagen
export const SnapSlide = styled(Box)<{ backgroundImage?: string, isBlurred?: boolean}>(({ backgroundImage, isBlurred = true }) => ({
  height: '100dvh',
  width: '100%',
  scrollSnapAlign: 'start',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  // alignItems: 'center',
  position: 'relative', // Necesario para posicionar el fondo
  overflow: 'hidden',   // Asegura que el blur no se salga de los bordes

  // Pseudo-elemento que actuará como nuestro fondo
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0, // Abarca todo el componente (top, right, bottom, left)
    zIndex: -1, // Se coloca detrás del contenido

    // Aplicamos la imagen de fondo dinámicamente
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    // Aquí aplicamos los efectos de opacidad y desenfoque
    opacity: 0.25,
    filter: isBlurred ? 'blur(8px)' : 'none',
  },
}));