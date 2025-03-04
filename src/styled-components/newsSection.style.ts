'use client'
import { Box, Stack, styled } from "@mui/material";
import Image from "next/image";

export const NewsContainer = styled(Stack)(({theme}) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    gap: 12,
    // justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap"
  }
}))

interface NewsCardProps {
  isGrid?: boolean;
}

export const NewsCard = styled(Stack,
  {
    shouldForwardProp: (prop) => prop !== "isGrid",
  }
)<NewsCardProps>(({theme, isGrid}) => ({
  backgroundColor: theme.palette.customColors.lightBlue,
  borderRadius: 2,
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    width: isGrid ? "32%" : '48%',
    minHeight: 250,
    // height: 'auto',
    justifyContent: 'space-between',
    alignItems: 'space-between'
  }
}))

export const NewsCardImage = styled(Image)(({theme}) => ({
  width: '100%',
  height: 200,
  objectFit: 'cover',
  [theme.breakpoints.up("lg")]: {
    width: '40%',
    height: '100%',
  }
}))

export const NewsCardText = styled(Stack)(({theme}) => ({
  width: '100%',
  padding: theme.spacing(1),
  [theme.breakpoints.up("lg")]: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    
  }
}))