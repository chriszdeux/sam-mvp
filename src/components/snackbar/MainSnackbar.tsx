'use client'
import { closeSnackbar } from "@/redux/slices/snackbar/snackbarSlice.slice";
import { Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function MainSnackbar() {
  const {
    open,
    message,
    severity,
  } = useSelector(({ snackbar }: any) => snackbar)
  const dispatch = useDispatch();
  return (
    <Snackbar
  open={open}
  autoHideDuration={6000}
  onClose={() => dispatch(closeSnackbar())}
  message={message}
  // action={action}
/>
  );
}