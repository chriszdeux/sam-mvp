import { ContainerPage } from "@/styled-components/global/global.styled";
import { Container, Typography } from "@mui/material";
interface Props {
  title?: string;
  children?: React.ReactNode;
  sx?: any;
}
export default function PageContainer({
  title,
  children,
  sx
}: Props) {

  return (
    <ContainerPage sx={sx}>
      <Typography variant="h4" mb={2}>{title}</Typography>
      {children}
    </ContainerPage>
  );
}