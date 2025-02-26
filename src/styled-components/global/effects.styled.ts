"use client";
import { styled } from "@mui/material";

const commonStyles:any = {
  position: 'absolute',
  pointerEvents: 'none',
  zIndex: 0,
  background: (theme: any) => `linear-gradient(to right, ${theme.palette.background.default}, transparent)`,
};

export const LeftFade = styled("div")(({ theme }) => ({
  ...commonStyles,
  top: 0,
  left: 0,
  bottom: 0,
  width: '25%',
  background: `linear-gradient(to right, ${theme.palette.background.default}, transparent)`,
}));

export const RightFade = styled("div")(({ theme }) => ({
  ...commonStyles,
  top: 0,
  right: 0,
  bottom: 0,
  width: '25%',
  background: `linear-gradient(to left, ${theme.palette.background.default}, transparent)`,
}));

export const TopFade = styled("div")(({ theme }) => ({
  ...commonStyles,
  top: 0,
  right: 0,
  width: '100%',
  height: '25%',
  background: `linear-gradient(to bottom, ${theme.palette.background.default}, transparent)`,
}));

export const BottomFade = styled("div")(({ theme }) => ({
  ...commonStyles,
  right: 0,
  bottom: 0,
  width: '100%',
  height: '25%',
  background: `linear-gradient(to top, ${theme.palette.background.default}, transparent)`,
}));
