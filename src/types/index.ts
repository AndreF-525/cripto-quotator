import {z} from 'zod'
import { CurrencySchema, CryptpResponseSchema } from "../schema/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CryptpResponseSchema>
