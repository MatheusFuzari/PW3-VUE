import axios from "axios"

export type Coin = {
  data: {
    open: string;
    high: string;
    low: string;
  }
}

export const getSolana = (): Promise<Coin> => {
  return axios.get('https://api.gemini.com/v2/ticker/solusd');
}

export const getBitcoin = (): Promise<Coin> => {
  return axios.get('https://api.gemini.com/v2/ticker/btcusd');
}

export const getEthereum = (): Promise<Coin> => {
  return axios.get('https://api.gemini.com/v2/ticker/ethusd');
}

export const getAvalanche = (): Promise<Coin> => {
  return axios.get('https://api.gemini.com/v2/ticker/avaxusd');
}