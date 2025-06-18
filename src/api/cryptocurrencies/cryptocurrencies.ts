import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { getRandomCryptocurrencies } from "./getRandomCurrencies.query"


const subRoute = '/blockchain'
const subRoute2 = '/cryptocurrency'
const baseUrl = `${process.env.NEXT_PUBLIC_APP_URL}${subRoute}${subRoute2}`

export const cryptocurrenciesApi = createApi({
  reducerPath: 'cryptocurrenciesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    randomCurrencies: builder.query<any, void>(getRandomCryptocurrencies())
  }),
})
export const { useRandomCurrenciesQuery }:any = cryptocurrenciesApi