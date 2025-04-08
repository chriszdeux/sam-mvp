// store/rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "@/redux/slices/auth/auth.slice";
import { snackbarSlice } from "@/redux/slices/snackbar/snackbarSlice.slice";
import { authApi } from "@/api/auth/auth";

const combinedReducer = combineReducers({
  auth: authSlice.reducer,
  snackbar: snackbarSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default rootReducer;
