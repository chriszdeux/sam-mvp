'use client'
import { styled, useMediaQuery } from "@mui/material";
import Image from "next/image";

export const BlockchainImage = styled(Image)(({theme}) => {
  const md = useMediaQuery(theme.breakpoints.up("md"));
  return {
    width: '100%',
    maxHeight: md ? 600 : 520,
    objectFit: 'cover',
    objectPosition: 'bottom',
  }
})