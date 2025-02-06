'use client'
import { styled } from "@mui/material";

export const FigureImage = styled("figure")(({ theme }) => {
  return {
    position: "relative",
    width: '100%',
    margin: '16px 0',
  }
})

export const FigCaption = styled("figcaption")(({ theme }) => ({
  backgroundColor: 'rgba(0,0,0,.5)',
  position: 'absolute',
  left: 0, bottom: 0,
  width: "100%",
  maxHeight: 130,
  padding: 16,
  color: 'white',
  zIndex: 2
}))