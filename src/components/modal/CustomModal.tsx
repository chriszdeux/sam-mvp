import {
  CloseButton,
  ModalContent,
  ModalS,
} from "@/styled-components/global/modal.styled";
import { animations } from "@/styles/animations";
import CancelIcon from "@mui/icons-material/Cancel";
import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface Props {
  title?: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  autoClose?: boolean;
  duration?: number;
  sx?: object;
  sxContent?: object;
  closeBtn?: boolean;
  props?: any;
  className?: string;
}

export default function CustomModal({
  open,
  onClose,
  children,
  title,
  autoClose = false,
  duration = 4000,
  sx,
  sxContent,
  closeBtn = false,
  props,
  className,
}: Props) {
  const [internalOpen, setInternalOpen] = useState(open);
  const [anim, setAnim] = useState(animations.fadeIn);

  useEffect(() => {
    if (open) {
      setInternalOpen(true);
      setAnim(animations.fadeIn);
    } else {
      setAnim(animations.fadeOut);
      const timeout = setTimeout(() => {
        setInternalOpen(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  const handleClose = () => {
    setAnim(animations.fadeOut);
    setTimeout(() => {
      onClose(); 
    }, 300);
  };

  useEffect(() => {
    if (autoClose && open) {
      setTimeout(() => {
        handleClose();
      }, duration);
    }
  }, [autoClose, open, duration]);

  if (!internalOpen) return null;

  return (
    <ModalS
      open={internalOpen}
      onClose={handleClose}
      aria-labelledby="modal-loading"
      className={anim}
      {...props}
      sx={sx}
    >
      <>
        {!closeBtn && (
          <CloseButton size="large" onClick={handleClose}>
            <CancelIcon />
          </CloseButton>
        )}
        <ModalContent sx={sxContent}>
          <Typography id="modal-sam-desc" variant="h3" component="h2">
            {title}
          </Typography>
          {children}
        </ModalContent>
      </>
    </ModalS>
  );
}
