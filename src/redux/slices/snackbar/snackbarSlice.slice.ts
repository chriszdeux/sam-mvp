import { extractErrorMessage } from "@/utils/extractError.util";
import { createSlice } from "@reduxjs/toolkit";

interface SnackbarState {
  open: boolean;
  message: string | null;
  severity: "success" | "info" | "warning" | "error";
}
export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState:<SnackbarState>{
    open: false,
    message: "",
    severity: "warning",
  },
  reducers: {
    openSnackbar: (state, action) => {
      const message = extractErrorMessage(action.payload);
      state.open = true;
      state.message = message
      state.severity = action.payload.severity;
    },
    closeSnackbar: (state) => {
      state.open = false;
      state.message = "";
      state.severity = "success";
    },
  },
})

export const { openSnackbar, closeSnackbar } = snackbarSlice.actions;