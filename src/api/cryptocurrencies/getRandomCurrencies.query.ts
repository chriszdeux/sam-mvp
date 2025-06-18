import { localStorageList } from "@/enums/localStorage";
import { getLocalStorage } from "@/utils/localStorage.util";

export const getRandomCryptocurrencies = () => ({
  query: () => ({
    url: `/random`,
    headers: {
      'authorization': `${getLocalStorage(localStorageList.token)}`,
    }
  }),
  onQueryStarted: async (arg:any, { dispatch, queryFulfilled }:any) => {
    try {
      const { data }:any = await queryFulfilled;
      console.log(data)
    } catch (error:any) {
      const { data } = error;
      console.log(data)
    }
  }
})