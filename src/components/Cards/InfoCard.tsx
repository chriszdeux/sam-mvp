'use client'
import React, { ReactNode } from 'react';
import { Stack, Typography } from '@mui/material';
import { CardWrapper, IconWrapper } from './InfoCard.styles';

interface InfoCardProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  children: ReactNode;
  width?: number | string;
}

export const InfoCard = ({
  title,
  subtitle,
  icon,
  children,
  width,
}: InfoCardProps) => {
  return (
    <CardWrapper elevation={1} width={width}>
      <Stack spacing={1}>
        <Typography variant="h5" component="h2" fontWeight="bold">
          {title}
        </Typography>

        {subtitle && (
          <Typography variant="body1" color="text.secondary">
            {subtitle}
          </Typography>
        )}

        <Typography variant="body2" component="div" sx={{ pt: 1 }}>
          {children}
        </Typography>
      </Stack>

      {icon && <IconWrapper>{icon}</IconWrapper>}
    </CardWrapper>
  );
};