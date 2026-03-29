import { getCurrencies, type Currency } from '@app/entities/currency';
import { useQuery } from '@tanstack/react-query';

export const useGetCurrencies = () =>
  useQuery<Currency[]>({
    queryKey: ['currencies'],
    queryFn: getCurrencies,
    staleTime: Infinity, // currencies list is static → no refetch needed
  });
