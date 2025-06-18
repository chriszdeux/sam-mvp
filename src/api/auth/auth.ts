
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { loginUser } from './login.mutation'
import { registerUser } from './register.mutation'
import { confirmAccount } from './confirmAccount.mutation'
import { resendConfirmCode } from './resendCode.mutation'

const subRoute = '/auth'
const baseUrl = `${process.env.NEXT_PUBLIC_APP_URL}${subRoute}`

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    login: builder.mutation(loginUser(baseUrl)),
    register: builder.mutation(registerUser(baseUrl)),
    confirmAccount: builder.mutation(confirmAccount(baseUrl)),
    resendCode: builder.mutation(resendConfirmCode(baseUrl))
  }),
})
export const { 
  useLoginMutation,
  useRegisterMutation,
  useConfirmAccountMutation,
  useResendCodeMutation
 }:any = authApi