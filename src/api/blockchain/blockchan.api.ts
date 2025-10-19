import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { getBlockchainsQuery } from "./getBlockchainList.query";

const subRoute = '/blockchain/network'
const baseUrl = `${process.env.NEXT_PUBLIC_APP_URL}${subRoute}`

export const blockchainApi = createApi({
  reducerPath: 'blockchainApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    blockchains: builder.query<any, void>(getBlockchainsQuery()),
  })
})
export const { 
  useBlockchainsQuery
 } = blockchainApi