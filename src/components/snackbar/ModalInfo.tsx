'use client'
import CustomModal from "../modal/CustomModal";
import { useDispatch, useSelector } from "react-redux";
import { closeSnackbar } from "@/redux/slices/snackbar/snackbarSlice.slice";

export default function ModalInfo() {
  const { open, message, severity } = useSelector(
    ({ snackbar }: any) => snackbar
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeSnackbar());
  };

  return (
    <CustomModal
      open={open}
      onClose={handleClose}
      title={message}
      autoClose
    >
      <h2>{JSON.stringify(message)}</h2>
    </CustomModal>
  );
}
