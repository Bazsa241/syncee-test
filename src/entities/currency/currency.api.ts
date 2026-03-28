import type { Currency, CurrencyResponse } from './currency.types';
import { currencyClient } from './curreny.client';

export const getCurrencies = async (): Promise<Currency[]> => {
  const res = await currencyClient.get<CurrencyResponse>('/currencies');

  return res.data.data ?? [];
};
