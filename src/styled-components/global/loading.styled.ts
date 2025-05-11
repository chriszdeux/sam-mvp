import { styled } from "@mui/material";
import Image from "next/image";
interface ImageLoadingBlurProps {
  opacity?: number;
  rotate?: number;
}

export const ImageLoadingBlur = styled(Image)<ImageLoadingBlurProps>(
  ({ theme, opacity, rotate }) => ({
    position: "absolute",
    // filter: "blur(20px)",
    zIndex: -1,
    animationIterationCount: "infinite",
    animationDuration: "2s",
    animationTimingFunction: "linear",
    opacity: opacity || 1,
    transform: `rotate(${rotate || 0}deg)`,
  })
);

interface LineDetail {
  width?: number;
}

export const LineDetail = styled("div")<LineDetail>(({ theme, width }) => ({
  width: width || 500,
  height: 5,
  borderRadius: 8,
  zIndex: -1,
  animation: `zoom_animation 5.5s infinite`,
  background: `linear-gradient(90deg, rgba(255, 255, 255, 0.91) 0%, rgba(120, 219, 255, 0.49) 100%)`,
  opacity: 0,
  "@keyframes zoom_animation": {
    "0%": {
      // width: '0%',
      opacity: 0,
    },
    "25%": {
      opacity: 0.2,
    },
    "50%": {
      opacity: 0.5,
    },
    "75%": {
      opacity: 0.2,
    },
    "100%": {
      opacity: 0,
    },
  },
}));
