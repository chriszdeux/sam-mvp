import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { openSnackbar, closeSnackbar } from "@/redux/slices/snackbar/snackbarSlice.slice"

export const useGeneralHooks = () => {
  const dispatch = useDispatch()

  const setOpenSnackbar = useCallback((message: string) => {
    dispatch(openSnackbar(message))
  }, [])

  const setCloseSnackbar = useCallback(() => {
    dispatch(closeSnackbar())
  }, [])

  return {
    setOpenSnackbar,
    setCloseSnackbar
  }
}

