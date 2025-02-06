'use client'
import { styled } from "@mui/material";

export const LeftFade = styled("div")(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: -5,
  bottom: 0,
  width: '25%',
  pointerEvents: 'none',
  background: `linear-gradient(to right, ${theme.palette.background.default}, transparent)`,
  zIndex: 1
}));

export const RightFade = styled("div")(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: -5,
  bottom: 0,
  width: '25%',
  pointerEvents: 'none',
  background: `linear-gradient(to left, ${theme.palette.background.default}, transparent)`,
  zIndex: 1
}));

export const TopFade = styled("div")(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: -5,
  width: '100%',
  height: '25%',
  pointerEvents: 'none',
  background: `linear-gradient(to bottom, ${theme.palette.background.default}, transparent)`,
  zIndex: 1
}));

export const BottomFade = styled("div")(({ theme }) => ({
  position: 'absolute',
  right: -5,
  bottom: 0,
  width: '100%',
  height: '25%',
  pointerEvents: 'none',
  background: `linear-gradient(to top, ${theme.palette.background.default}, transparent)`,
  zIndex: 1
}));

