import { Box, styled } from '@mui/material';

type GradientDirection = 'to top' | 'to bottom' | 'to left' | 'to right';

export const ImageWrapper = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
  // border: '1px solid red',
  // display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'center',
  // alignItems: 'center',
  // height: '100dvh',
  // Width and height are now set by props, not fixed at 100%
});

export const GradientOverlay = styled(Box)<{ gradientDirection: GradientDirection }>(
  ({ gradientDirection }) => ({
    position: 'absolute',
    inset: 0,
    // The gradient direction is now dynamic based on the prop
    background: `linear-gradient(${gradientDirection}, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 30%, transparent 100%)`,
    zIndex: 1,
  })
);

export const CaptionWrapper = styled(Box)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '1rem',
  zIndex: 2,
  color: 'white',
});