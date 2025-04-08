import {
  CloseButton,
  ModalContent,
  ModalS,
} from "@/styled-components/global/modal.styled";
import CancelIcon from "@mui/icons-material/Cancel";
import { Stack, Typography } from "@mui/material";

interface Props {
  title?: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  autoClose?: boolean;
  duration?: number;
}
export default function CustomModal({
  open,
  onClose,
  children,
  title,
  autoClose = false,
  duration = 4000,
}: Props) {
  autoClose &&
    setTimeout(() => {
      onClose();
    }, duration);

  return (
    <ModalS
      open={open}
      onClose={onClose}
      aria-labelledby="modal-sam-desc"
      aria-describedby="modal-sam-desc"
    >
      <>
        <CloseButton size="large" onClick={onClose}>
          <CancelIcon />
        </CloseButton>
        <ModalContent>
          <Typography id="modal-sam-desc" variant="h3" component="h2">
            {title}
          </Typography>
          {children}
        </ModalContent>
      </>
    </ModalS>
  );
}
