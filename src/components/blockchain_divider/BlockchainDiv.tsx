import { Typography } from "@mui/material";
import { DividerContainer, DividerImg } from "@/styled-components/customDivider.styled";

interface Props {
  text: string;
  src: any;
  alt: string;
}
export default function BlockchainDiv({
  text,
  src,
  alt,
}: Props) {

  return (
    <DividerContainer >
      <Typography
        align="center"
        component="span"
        // color="white"
        variant="caption"
      >
       {text}
      </Typography>
      <DividerImg src={src} alt={alt} width={1080} height={200}/>
    </DividerContainer>
  );
}
