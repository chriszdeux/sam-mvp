import { Typography } from "@mui/material";
import LoadingCube from "../loadings/LoadingCube";
import CustomModal from "./CustomModal";
import { LineDetail } from "@/styled-components/global/loading.styled";
import { animations } from "@/styles/animations";
import { cubeStatus } from "@/enums/cubeStatus.enum";

interface Props {
  open?: boolean;
  isImg?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  title?: string;
  message?: string;
  status?: string;
}
export default function LoadingModal({
  open=true,
  onClose = () => (console.log('test')),
  isImg = true,
  children,
  title,
  message = 'Cargando',
  status
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
      { isImg && <LoadingCube status={status}/> }
      <Typography variant="h4">{message}</Typography>
      {/* <LineDetail width={200}/> */}
    </CustomModal>
  );
}