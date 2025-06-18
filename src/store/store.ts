// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { authApi } from "@/api/auth/auth";
import { setupListeners } from "@reduxjs/toolkit/query";
import { cryptocurrenciesApi } from "@/api/cryptocurrencies/cryptocurrencies";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(cryptocurrenciesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
