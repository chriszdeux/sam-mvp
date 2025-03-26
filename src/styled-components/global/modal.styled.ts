import { Box, Modal, styled } from "@mui/material";
import { IconButton } from "@mui/material";

export const ModalS = styled(Modal)(({theme}) => ({
  // position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backdropFilter: 'blur(8px)',
}))

export const ModalContent = styled(Box)(({theme}) => ({
  width: '90%',
  padding: 8,
  margin: 1,
  borderRadius: 8,
  // boxShadow: `0px 4px 16px ${theme.palette.customColors.lightGreen}`,
  border: `1px solid ${theme.palette.customColors.lightGreen}`,
  // backgroundColor: theme.palette.customColors.darkGreen,
  [theme.breakpoints.up('md')]: {
    width: '80%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '50%',
  }
}))

export const CloseButton = styled(IconButton)(({theme}) => ({
  position: 'absolute',
  top: 10,
  right: 10,
  color: theme.palette.customColors.white,
  '&:hover': {
    color: theme.palette.primary.dark,
  },
}))