import type { Currency } from '@app/entities/currency';
import { Pagination } from './Pagination';
import { TableContentRow, TableHeaderRow } from './CurrenciesTable.styled.';
import { usePagination } from '@app/hooks';

type CurrenciesTableProps = {
  currencies: Currency[];
};

export const CurrenciesTable = ({ currencies }: CurrenciesTableProps) => {
  const { paginatedData, ...paginationProps } = usePagination(currencies);

  return (
    <div>
      <TableHeaderRow>
        <div>Id</div>
        <div>Name</div>
        <div>Min size</div>
      </TableHeaderRow>
      {paginatedData.map(({ id, name, min_size }) => (
        <TableContentRow key={id}>
          <div>{id}</div>
          <div>{name}</div>
          <div>{min_size}</div>
        </TableContentRow>
      ))}
      <Pagination {...paginationProps} />
    </div>
  );
};
