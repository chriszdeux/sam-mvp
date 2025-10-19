import React from 'react';
import { Button, ButtonProps, CircularProgress } from '@mui/material';

interface MainButtonProps extends ButtonProps {
  children: React.ReactNode;
  loading?: boolean;
  dataCy?: string;
}

const MainButton: React.FC<MainButtonProps> = ({
  children,
  loading = false,
  dataCy,
  disabled,
  ...rest
}) => {
  return (
    <Button
      color="primary"
      variant="contained"
      data-cy={dataCy}
      disabled={disabled || loading}
      {...rest}
      sx={{
        minWidth: 100,
        position: 'relative',
      }}
    >
      {loading ? (
        <CircularProgress 
          size={24} 
          sx={{ color: 'primary.contrastText', position: 'absolute' }} 
        />
      ) : (
        children
      )}
    </Button>
  );
};

export default MainButton;