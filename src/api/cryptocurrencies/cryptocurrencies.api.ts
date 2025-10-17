import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { getCryptosQuery } from "./getCryptocurrencies.query"
import { getCryptoInfoQuery } from "./getCryptoInfo.query"
import { getRandomCryptocurrencies } from "./getRandomCurrencies.query"


const subRoute = '/blockchain'
const subRoute2 = '/crypto'
const baseUrl = `${process.env.NEXT_PUBLIC_APP_URL}${subRoute}${subRoute2}`

export const cryptoAPI = createApi({
  reducerPath: 'cryptocurrenciesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    randomCryptos: builder.query<any, void>(getRandomCryptocurrencies()),
    cryptos: builder.query<any, void>(getCryptosQuery()),
    cryptoInfo: builder.query<any, void>(getCryptoInfoQuery())
  }),
})
export const { 
  useRandomCryptosQuery,
  useCryptosQuery,
  useLazyCryptoInfoQuery
 }:any = cryptoAPI