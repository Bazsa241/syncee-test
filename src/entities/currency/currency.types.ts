export type Currency = {
  id: string;
  name: string;
  min_size: string;
};

export type CurrencyResponse = {
  data: Currency[];
};
