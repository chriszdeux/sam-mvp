'use client'
import React from 'react';
import { Box, IconButton, Stack } from '@mui/material';
import { KeyboardArrowUp, KeyboardArrowDown, KeyboardDoubleArrowUp } from '@mui/icons-material';
import { useScrollView } from '@/hooks/useScrollView';

interface Props {
  ref: React.RefObject<HTMLDivElement>;
}
export const SlideControls = ({
  ref,
}: Props) => {
    const { handleScrollDown, handleScrollUp, handleScrollToTop } = useScrollView(ref);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1000, // Asegura que esté por encima de otros elementos
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