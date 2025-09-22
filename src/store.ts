import { create } from 'zustand'
import type { CryptoCurrency, CryptoPrice, Pair } from './types'
import { devtools } from 'zustand/middleware'
import { fetchCurrentCryptoPrice, getCryptos } from './services/CryptoServices'

type CryptoStore = {
  cryptoCurrencies: CryptoCurrency[],
  result: CryptoPrice,
  fetchCryptos: () => Promise<void>,
  fetchData: (pair : Pair) => Promise<void>
}



export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
  cryptoCurrencies: [],
  result: {} as CryptoPrice,
  fetchCryptos: async () => {
    const cryptoCurrencies = await getCryptos()
    set(() => ({
      cryptoCurrencies
    }))
  },
  fetchData: async (pair) => {
    const result = await fetchCurrentCryptoPrice(pair)
    set(() => ({
      result
    }))
  }
})))
