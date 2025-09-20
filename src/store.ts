import { create } from 'zustand'
import type { CryptoCurrency, Pair } from './types'
import { devtools } from 'zustand/middleware'
import { fetchCurrentCryptoPrice, getCryptos } from './services/CryptoServices'

type CryptoStore = {
  cryptoCurrencies: CryptoCurrency[],
  fetchCryptos: () => Promise<void>,
  fetchData: (pair : Pair) => Promise<void>
}



export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
  cryptoCurrencies: [],
  fetchCryptos: async () => {
    const cryptoCurrencies = await getCryptos()
    set(() => ({
      cryptoCurrencies
    }))
  },
  fetchData: async (pair) => {
    await fetchCurrentCryptoPrice(pair)
  }
})))
