import { useEffect, useMemo, useState } from 'react';

export const usePagination = <T>(data: T[], pageSize = 20) => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => setPage(0), 0);
    return () => clearTimeout(id);
  }, [data]);

  const paginatedData = useMemo(() => {
    const start = page * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, pageSize, page]);

  const nextPage = () => setPage((p) => p + 1);
  const prevPage = () => setPage((p) => p - 1);

  const disabledNext = (page + 1) * pageSize >= data.length;
  const disabledPrev = page === 0;

  return {
    paginatedData,
    nextPage,
    prevPage,
    disabledNext,
    disabledPrev,
    currentPage: page + 1,
  };
};
