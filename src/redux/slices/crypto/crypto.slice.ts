import { CryptoCardInterface, CryptocurrencyInterface } from "@/redux/slices/crypto/Cryptocurrencies.interface";
import { createSlice } from "@reduxjs/toolkit";
import { getCryptosAction } from "./getCryptos.action";
import { setCryptosAction } from "./setCryptos.action";

export interface InitialState {
  cryptos: CryptoCardInterface[],
  cryptoSelected: CryptocurrencyInterface | null
}

const initialState: InitialState= {
  cryptos: [],
  cryptoSelected: null,
}

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setCryptoList: setCryptosAction,
    setCryptoInfo: getCryptosAction
  }

})

export const {
  setCryptoList,
  setCryptoInfo
} = cryptoSlice.actions