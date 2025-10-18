'use client'
import React from 'react';
import { TextFieldProps, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useToggle } from '@/hooks';
import { StyledInput } from './styled';

export const MainInput = ({
  isPassword = false,
  variant = 'filled',
  info = false,
  ...rest
}: any) => {
  const [showPassword, togglePassword] = useToggle(false);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const currentType = isPassword ? (showPassword ? 'text' : 'password') : rest.type;

  return (
    <StyledInput
      variant={variant}
      fullWidth
      type={currentType}
      info={info}
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        ...rest.InputProps,
        endAdornment: isPassword ? (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={togglePassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ) : rest.InputProps?.endAdornment,
      }}
      {...rest}
    />
  );
};