import { Typography } from "@mui/material";
import { DividerContainer, DividerImg } from "@/styled-components/customDivider.styled";

interface Props {
  text: string;
  img: string;
  alt: string;
}
export default function BlockchainDiv({
  text,
  img,
  alt,
}: Props) {

  return (
    <DividerContainer >
      <Typography
        align="center"
        component="span"
        color="white"
        sx={{
          fontSize: ".9rem",
        }}
      >
       {text}
      </Typography>
      <DividerImg src={img} alt={alt}/>
    </DividerContainer>
  );
}
