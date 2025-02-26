'use client'
import { styled } from "@mui/material";
import Image from "next/image";

export const BlockchainImage = styled(Image)(({theme}) => ({
  width: '100%',
  maxHeight: 520,
  objectFit: 'cover',
  objectPosition: 'bottom',
  [theme.breakpoints.up("md")]: {
    maxHeight: 600,
  }
}))