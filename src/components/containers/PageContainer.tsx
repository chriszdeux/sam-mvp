import { ContainerPage } from "@/styled-components/global/global.styled";
import { Container, Typography } from "@mui/material";
import MainImageBG from "../image-background/MainImageBG";
import { animations } from "@/styles/animations";
interface Props {
  title?: string;
  tAlign?: 'left' | 'center' |'right';
  children?: React.ReactNode;
  img?: any;
  sx?: any;
  fixWidth?: boolean
}
export default function PageContainer({
  title,
  tAlign,
  children,
  img,
  sx,
  fixWidth = false
}: Props) {

  return (
    <ContainerPage sx={sx} className={animations.fadeIn} fixWidth={fixWidth}>
      <Typography variant="h1" mb={2} align={tAlign}>{title}</Typography>
      {children}
      { img && <MainImageBG img={img}/>}
    </ContainerPage>
  );
}