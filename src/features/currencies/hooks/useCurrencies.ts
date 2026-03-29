import { useEffect, useMemo, useState } from 'react';
import { useGetCurrencies } from './useGetCurrencies';
import { useDebounce } from '@app/hooks';
import { useToast } from '@app/hooks/useToast';

export const useCurrencies = () => {
  const [search, setSearch] = useState('');
  const { data, isLoading, error, isError } = useGetCurrencies();

  const { setToastError } = useToast();

  const debouncedSearch = useDebounce(search);

  const processedCurrencies = useMemo(() => {
    if (!data) {
      return [];
    }

    let result = data;

    if (debouncedSearch) {
      result = result.filter(
        ({ id, name }) =>
          id.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
          name.toLowerCase().includes(debouncedSearch.toLowerCase()),
      );
    }

    return result;
  }, [data, debouncedSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (isError && error) {
      setToastError(error.message);
    }
  }, [error, isError, setToastError]);

  return {
    currencies: processedCurrencies,
    isLoading,
    search,
    handleSearchChange,
  };
};
