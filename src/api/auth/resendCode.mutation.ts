export const resendConfirmCode = (url:string) => ({
   query: ({email}:{ email: string }) => ({
      url: `${url}/resend-code/`,
      method: 'POST',
      body: {email}
    }),
    onQueryStarted:
    async (arg:any, { dispatch, queryFulfilled }:any) => {
      
      try {
        const { data }:any = await queryFulfilled;
        // dispatch(openSnackbar(data.message))
        return data
      } catch (error:any) {
        const { data } = error;
        console.log(data)
      }
    }
})