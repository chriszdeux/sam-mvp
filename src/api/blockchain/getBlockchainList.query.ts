import { localStorageList } from "@/enums/localStorage";
import { getLocalStorage } from "@/utils/localStorage.util";

export const getBlockchainsQuery = ():any => ({
  query: () => ({
    url: `/`,
    method: 'GET',
    credentials: 'include'
  }),
  onQueryStarted: async (arg:any, { dispatch, queryFulfilled }:any) => {
    try {
      const { data }:any = await queryFulfilled;
    } catch (error:any) {
      const { data } = error;
      console.log(data)
    }
  }
})