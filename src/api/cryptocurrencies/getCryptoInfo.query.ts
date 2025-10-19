import { setCryptoInfo } from "@/redux/slices/crypto/crypto.slice";

export const getCryptoInfoQuery = ():any => ({
  query: (id:string) => ({
    url: `/${id}`,
    method: 'GET',
    credentials: 'include'
  }),
  onQueryStarted: async (arg:any, { dispatch, queryFulfilled }:any) => {
    try {
      const { data } = await queryFulfilled;
      dispatch(setCryptoInfo(data))
    } catch (error:any) {
      const { data } = error;
      console.log(data)
    }
  }
})