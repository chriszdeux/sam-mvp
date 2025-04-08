import { ContainerPage } from "@/styled-components/global/global.styled";
import { Container, Typography } from "@mui/material";
import MainImageBG from "../image-background/MainImageBG";
import { animations } from "@/styles/animations";
interface Props {
  title?: string;
  children?: React.ReactNode;
  img?: any;
  sx?: any;
}
export default function PageContainer({
  title,
  children,
  img,
  sx
}: Props) {

  return (
    <ContainerPage sx={sx} className={animations.fadeIn}>
      <Typography variant="h4" mb={2}>{title}</Typography>
      {children}
      { img && <MainImageBG img={img}/>}
    </ContainerPage>
  );
}