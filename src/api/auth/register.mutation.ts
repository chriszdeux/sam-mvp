import { openSnackbar } from "@/redux/slices/snackbar/snackbarSlice.slice";
import { setLocalStorage } from "@/utils/localStorage.util";

interface RegisterUser {
  name: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
  birthday: string;
}

export const registerUser = (url:string) => ({
  query: (form: RegisterUser) => ({
    url: `${url}`,
    method: 'POST',
    body: form,
  }),
  onQueryStarted: async (arg:any, { dispatch, queryFulfilled }:any) => {
    try {
      const { data }:any = await queryFulfilled;
      setLocalStorage("user-temp", {
        email: arg.email,
        password: arg.password
      })
      dispatch(openSnackbar(data.message))
    } catch (error:any) {
      const { data } = error;
      console.log(data)

    }
  }
})