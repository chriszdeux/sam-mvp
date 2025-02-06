import { CSSProperties, ReactNode } from "react";
import styles from "../../styles/index.module.scss";
import { BottomFade, LeftFade, RightFade, TopFade } from "@/styled-components/global/effects.styled";
import { FigCaption, FigureImage } from "@/styled-components/global/images.styled";

interface Props {
  children: ReactNode;
  left?: boolean;
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  all?: boolean;
  caption?: string;
  sx?: CSSProperties;
  // className?: string;
}

export default function FadeComponent({
  children,
  left,
  top,
  right,
  bottom,
  all,
  caption,
  sx,
}: // className,
Props) {
  return (
    <FigureImage
      style={sx}
    >
      { left && <LeftFade></LeftFade> }
      {top && <TopFade></TopFade>}
      {right && <RightFade></RightFade>}
      {bottom && <BottomFade></BottomFade>}
      
      {all && (
        <>
          <LeftFade></LeftFade>
          <TopFade></TopFade>
          <RightFade></RightFade>
          <BottomFade></BottomFade>
        </>
      )}
      {children}
      {caption && (
        <FigCaption
        >
          {caption}
        </FigCaption>
      )}
    </FigureImage>
  );
}
