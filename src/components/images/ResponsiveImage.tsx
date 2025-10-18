'use client'
import React, { ReactNode } from 'react';
import Image, { ImageProps } from 'next/image';
import { CssBaselineProps, Typography } from '@mui/material';
import {
  ImageWrapper,
  GradientOverlay,
  CaptionWrapper,
} from './ImageWithGradient.styles';

type GradientDirection = 'to top' | 'to bottom' | 'to left' | 'to right';

interface ImageWithGradientProps extends Omit<ImageProps, 'alt' | 'width' | 'height'> {
  alt: string;
  caption?: ReactNode;
  width?: number | string;
  height?: number | string;
  gradientDirection?: GradientDirection;
  sx?: any
}

export const ResponsiveImage = ({
  caption,
  src,
  alt,
  width = '100%', // Default width
  height = '100%', // Default height
  gradientDirection = 'to top', // Default direction
  sx={},
  ...rest
}: ImageWithGradientProps) => {
  const useFill = width === '100%' && height === '100%';

  return (
    <ImageWrapper sx={{ width, height, ...sx }}>
      <Image
        src={src}
        alt={alt}
        fill={useFill}
        width={useFill ? undefined : Number(width)}
        height={useFill ? undefined : Number(height)}
        style={{ objectFit: 'cover' }}
        {...rest}
      />
      <GradientOverlay gradientDirection={gradientDirection} />
      {caption && (
        <CaptionWrapper>
          <Typography variant="caption">{caption}</Typography>
        </CaptionWrapper>
      )}
    </ImageWrapper>
  );
};