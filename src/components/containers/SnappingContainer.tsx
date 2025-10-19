'use client'
import React, { ReactNode, forwardRef } from 'react';
import { BoxProps } from '@mui/material';
import { SnapSlide, SnapWrapper } from '@/styles/SnappingContainer.styles';

interface SnappingContainerProps extends BoxProps {
  children: ReactNode;
}

export const SnappingContainer = forwardRef<HTMLDivElement, SnappingContainerProps>(
  ({ children, ...rest }, ref) => {
    return (
      <SnapWrapper ref={ref} {...rest}>
        {React.Children.map(children, (child, index) => (
          <SnapSlide key={index}>{child}</SnapSlide>
        ))}
      </SnapWrapper>
    );
  }
);

SnappingContainer.displayName = 'SnappingContainer';