import { Typography } from "@mui/material";
import LoadingCube from "../loadings/LoadingCube";
import CustomModal from "./CustomModal";
import { LineDetail } from "@/styled-components/global/loading.styled";
import { animations } from "@/styles/animations";

interface Props {
  open?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  title?: string;
  text?: string;
}
export default function LoadingModal({
  open=true,
  onClose = () => (console.log('test')),
  children,
  title,
  text = 'Cargando'
}: Props) {


  return (
    <CustomModal
      open={open}
      onClose={onClose}
      title={title}
      closeBtn
      className={animations.pulse}
      sxContent={{
        border: 'none', background: 'none',
        display: 'flex',
        flexDirection: 'column',  
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1
      }}
    >
      <LoadingCube />
      <Typography variant="h4">{text}</Typography>
      {/* <LineDetail width={200}/> */}
    </CustomModal>
  );
}