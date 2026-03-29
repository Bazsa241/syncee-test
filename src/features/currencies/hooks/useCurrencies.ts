import { useMemo, useState } from 'react';
import { useGetCurrencies } from './useGetCurrencies';

export const useCurrencies = () => {
  const [search, setSearch] = useState('');
  const { data, isLoading } = useGetCurrencies();

  const processedCurrencies = useMemo(() => {
    if (!data) {
      return [];
    }

    let result = data;

    if (search) {
      result = result.filter(
        ({ id, name }) =>
          id.toLowerCase().includes(search.toLowerCase()) ||
          name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    return result;
  }, [data, search]);

  return {
    currencies: processedCurrencies,
    isLoading,
    search,
    setSearch,
  };
};
