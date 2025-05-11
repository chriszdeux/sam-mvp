'use client'
import { Typography } from "@mui/material";
import {
  DividerContainer,
  DividerImg,
} from "@/styled-components/customDivider.styled";
import { useView } from "@/hooks/useView.hook";
import { useRef } from "react";
interface Props {
  text: string;
  src: any;
  alt: string;
  sx: any;
  className: string;
}
export default function BlockchainDiv({
  text,
  src,
  alt,
  sx,
  className,
}: Props) {
  const ref = useRef(null);
  const visible = useView(ref);
  return (
        <DividerContainer   sx={sx} className={visible ? className : ''}>
          <Typography align="center" component="span" variant="body1" ref={ref}>
            { visible && text}
          </Typography>
          <DividerImg src={src} alt={alt} width={1080} height={200}/>
        </DividerContainer>
  );
}
