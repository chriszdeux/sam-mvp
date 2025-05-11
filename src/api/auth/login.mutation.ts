import { localStorageList } from "@/enums/localStorage";
import { setCredentials } from "@/redux/slices/auth/auth.slice";
import { openSnackbar } from "@/redux/slices/snackbar/snackbarSlice.slice";
import { setLocalStorage } from "@/utils/localStorage.util";
import { decodeToken } from "@/utils/token.util";

export const loginUser = (url:string) => ({
  query: (form: {
    email: string;
    password: string;
  }) => {
    console.log(url)
    console.log("form", form)
    return {
      url: `${url}/login`,
      method: 'POST',
      body: form,
    }
  },
  onQueryStarted: async (arg:any, { dispatch, queryFulfilled }:any) => {
    try {
      const { data }:any = await queryFulfilled;
      const { id, authToken } = data.data;
      const decode = await decodeToken(authToken);
      if (decode.id !== id) {
        dispatch(openSnackbar("Error decoding token"));
        return;
      }
      setLocalStorage(localStorageList.token, authToken);
      dispatch(setCredentials(data.data));
  
    } catch (error:any) {
      const { data } = error;
      console.log(data)
      
    }
  }
})
