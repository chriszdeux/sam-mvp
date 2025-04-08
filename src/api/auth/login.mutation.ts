import { localStorageList } from "@/enums/localStorage";
import { setCredentials } from "@/redux/slices/auth/auth.slice";
import { openSnackbar } from "@/redux/slices/snackbar/snackbarSlice.slice";
import { setLocalStorage } from "@/utils/localStorage.util";
import { decodeToken } from "@/utils/token.util";

export const loginHandler = async (
  dispatch: any,
  queryFulfilled: any
) => {
  try {
    const { data } = await queryFulfilled;
    const { id, authToken } = data.data;
    const decode = await decodeToken(authToken);

    if (decode.id !== id) {
      dispatch(openSnackbar("Error decoding token"));
      return;
    }

    setLocalStorage(localStorageList.token, authToken);
    dispatch(setCredentials(data.data));
  } catch (error) {
    console.error(error);
    dispatch(openSnackbar("Error en el login"));
  }
};
