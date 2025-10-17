import { setCryptoList } from "@/redux/slices/crypto/crypto.slice";
import { CryptoCardInterface } from "@/redux/slices/crypto/Cryptocurrencies.interface";


export const getCryptosQuery = ():any => ({
  query: () => ({
    url: `/`,
    method: 'GET',
    credentials: 'include'
  }),
  onQueryStarted: async (arg:any, { dispatch, queryFulfilled }:any) => {
    try {
      const { data }: {data:CryptoCardInterface[]} = await queryFulfilled;
      
     dispatch(setCryptoList(data))
    } catch (error:any) {
      const { data } = error;
      console.log(data)
    }
  }
})