// store/api/authApi.ts
import { localStorageList } from '@/enums/localStorage'
import { setCredentials } from '@/redux/slices/auth/auth.slice'
import { openSnackbar } from '@/redux/slices/snackbar/snackbarSlice.slice'
import { setLocalStorage } from '@/utils/localStorage.util'
import { decodeToken } from '@/utils/token.util'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { loginHandler } from './login.mutation'

const subRoute = '/auth'
const baseUrl = `${process.env.NEXT_PUBLIC_APP_URL}${subRoute}`

interface LoginRequest {
  email: string
  password: string
}

interface Decode {
  iat: number;
  id: string;
}

interface Wallet {
  label: string;
  walletAddress: string;
}

interface Transactions {
  id: string;
}
// interface RewardUser {
//   id: string;
//   reward: Reward;
// }

export interface UserInterface  {
  id: string;
  email: string;
  username: string;
  balance: number;
  profileURL: string;
  transactions: Transactions[] | [];
  referralCode: string;
  wallets: Wallet[];
  laboratoriesID?: any[];
  rewards?: any
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<any, LoginRequest>({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        await loginHandler(dispatch, queryFulfilled)
      },
    }),
  }),
})

export const { useLoginMutation } = authApi
