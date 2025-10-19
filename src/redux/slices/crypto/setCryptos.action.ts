import { CryptoCardInterface } from '@/redux/slices/crypto/Cryptocurrencies.interface';
import { InitialState } from './crypto.slice';

export const setCryptosAction = (
  state: InitialState,
  { payload }: { payload: CryptoCardInterface[] }
) => {
  state.cryptos = payload;
};
