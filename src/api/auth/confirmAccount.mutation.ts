import { openSnackbar } from "@/redux/slices/snackbar/snackbarSlice.slice";

interface ConfirmInterface {
  code: string
}

export const confirmAccount = (url: string) => ({
  query: (form: ConfirmInterface) => ({
    url: `${url}/confirm-account`,
    method: 'PUT',
    body: form,
  }),
  onQueryStarted:
  async (arg:any, { dispatch, queryFulfilled }:any) => {
    try {
      const { data }:any = await queryFulfilled;
      dispatch(openSnackbar(data.message))
    } catch (error:any) {
      const { data } = error;
      console.log(data)

    }
  }
})