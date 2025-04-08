import { createSlice } from "@reduxjs/toolkit";

export interface AuthInitialState {
  user: any;
  isLogin: boolean;
}

const initialState:AuthInitialState = {
  user: null,
  isLogin: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.user = payload;
      state.isLogin = true;
    },
  },
})

export const logout = () => ({type: "LOGOUT"})

export const { setCredentials } = authSlice.actions;