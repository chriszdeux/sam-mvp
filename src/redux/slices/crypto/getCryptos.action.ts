import { InitialState } from "./crypto.slice";
import { CryptocurrencyInterface, Financial } from "./Cryptocurrencies.interface";

export const getCryptosAction = (
  state: InitialState,
  { payload }: { payload: CryptocurrencyInterface }
) => {
  const cryptoFound = state.cryptos.find((c) => c.id === payload.id);

  if (!cryptoFound) return;
  
  const { financial } = payload;

  const {
    totalSupply,
    circulatingSupply,
    maxSupply,
    marketCap,
    limitMarketCap,
    allTimeHigh,
    allTimeHighDate,
    allTimeLow,
    allTimeLowDate,
    candlesID,
    contractAddress,
    volume24h,
  } = financial;
  
  const financialData: Financial = {
    price: cryptoFound.financial.price,
    change24h: cryptoFound.financial.change24h,
    totalSupply,
    circulatingSupply,
    maxSupply,
    marketCap,
    limitMarketCap,
    allTimeHigh,
    allTimeHighDate,
    allTimeLow,
    allTimeLowDate,
    candlesID,
    contractAddress,
    volume24h,
  };

  const cryptoFull: CryptocurrencyInterface = {
    id: cryptoFound.id,
    identification: { ...cryptoFound.identification },
    financial: {...cryptoFound.financial, ...financialData},
    network: payload.network,
    additionalInfo: payload.additionalInfo
  };
  
  state.cryptoSelected = cryptoFull;
};
