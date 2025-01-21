import { Box, Modal } from "@mui/material";

interface Props {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}
export default function CustomModal({ open, handleClose, children }: Props) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-sam-desc"
      aria-describedby="modal-sam-desc"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          background: 'white',
          padding: 18
        }}
      >{children}</Box>
    </Modal>
  );
}
