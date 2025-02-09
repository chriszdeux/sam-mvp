import { Typography, useMediaQuery, useTheme } from "@mui/material";
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

  // const theme = useTheme()
  // const sm = useMediaQuery(theme.breakpoints.down("sm"));
  // const md = useMediaQuery(theme.breakpoints.down("md"));
  // const lg = useMediaQuery(theme.breakpoints.down("lg"));


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
      <DividerImg src={src} alt={alt} width={1080} height={200}/>
    </DividerContainer>
  );
}
