export interface CryptoCardInterface {
  id: string;
  identification: {
    name: string;
    symbol: string;
    image128: string;
    image256: string;
  },
  financial: {
    price: number;
    change24h: number;
  },
  additionalInfo?: any
}

export interface Financial {
  isInfiniteSupply?: boolean;
  totalSupply: number;
  circulatingSupply: number;
  maxSupply: number;
  marketCap: number;
  limitMarketCap: number;
  price: number;
  volume24h?: number;
  change24h?: number;
  allTimeHigh: number;
  allTimeHighDate: Date;
  allTimeLow: number;
  allTimeLowDate: Date;
  decimals?: number;
  contractAddress?: string; //need to explain
  tokenType?: string;  //need to explain
  candlesID: string;
}

export interface CryptocurrencyInterface {
  id: string;  
  identification: {
    name: string;
    symbol: string;
    image128?: string;
    image256?: string;
  };
  financial: Financial;
  network: {
    id: string;
    name: string;
  };
  additionalInfo?: {
    pColor: string;
    sColor: string;
    description: string[];
    dateCreated: Date;
    lastModified?: Date;
    developers: string[];
  };
}

export interface RandomCryptocurrencyInterface {
  id: string;
  identification: {
    name: string;
    symbol: string;
    image128?: string;
    image256?: string;
  };
  financial: { 
    price: number;
    change24h: number;
   };
  additionalInfo?: {
    pColor: string;
    sColor: string;
  };
}