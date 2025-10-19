'use client'
import React from 'react';
import { Box, IconButton, Stack } from '@mui/material';
import { KeyboardArrowUp, KeyboardArrowDown, KeyboardDoubleArrowUp } from '@mui/icons-material';
import { useScrollView } from '@/hooks/useScrollView';

interface Props {
  targetRef: React.RefObject<HTMLDivElement>; // Renombramos 'ref' a 'targetRef'
}
export const SlideControls = ({
  targetRef, // Usamos el nuevo nombre
}: Props) => {
    const { handleScrollDown, handleScrollUp, handleScrollToTop } = useScrollView(targetRef); // Pasamos el nuevo nombre al hook

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1000,
      }}
    >
      <Stack spacing={1}>
        <IconButton
          onClick={handleScrollToTop}
          aria-label="scroll to top"
          sx={{ backgroundColor: 'action.hover' }}
        >
          <KeyboardDoubleArrowUp />
        </IconButton>
        <IconButton
          onClick={handleScrollUp}
          aria-label="scroll up"
          sx={{ backgroundColor: 'action.hover' }}
        >
          <KeyboardArrowUp />
        </IconButton>
        <IconButton
          onClick={handleScrollDown}
          aria-label="scroll down"
          sx={{ backgroundColor: 'action.hover' }}
        >
          <KeyboardArrowDown />
        </IconButton>
      </Stack>
    </Box>
  );
};