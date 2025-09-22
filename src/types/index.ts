import {z} from 'zod'
import { CurrencySchema, CryptpResponseSchema, PairSchema, CryptoPriceSchema } from "../schema/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CryptpResponseSchema>
export type Pair = z.infer<typeof PairSchema>
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>
