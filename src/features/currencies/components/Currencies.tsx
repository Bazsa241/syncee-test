import styled from 'styled-components';
import { getColor } from '@app/styles/utils';
import { Input } from '@app/components/ui';
import { useCurrencies } from '../hooks/useCurrencies';

const Title = styled.h1`
  border-bottom: 2px solid ${getColor('primary')};
  width: min-content;
`;

const SearchInput = styled(Input)`
  border-radius: 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  max-width: 800px;
  margin: auto;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  justify-items: center;
  padding: 12px;
  border-bottom: 1px solid ${getColor('border')};
`;

const TableHeaderRow = styled(TableRow)`
  background: ${getColor('surface')};
  border-width: 2px;
  border-color: ${getColor('primaryLight')};
  font-weight: 600;
`;

const TableContentRow = styled(TableRow)`
  &:nth-child(odd) {
    background: ${getColor('surface')};
  }
`;

export const Currencies = () => {
  const { currencies, search, handleSearchChange } = useCurrencies();

  return (
    <Wrapper>
      <Header>
        <Title>Currencies</Title>
        <SearchInput placeholder="Search" value={search} onChange={handleSearchChange} />
      </Header>
      <div>
        <TableHeaderRow>
          <div>Id</div>
          <div>Name</div>
          <div>Min size</div>
        </TableHeaderRow>
        {currencies.map(({ id, name, min_size }) => (
          <TableContentRow key={id}>
            <div>{id}</div>
            <div>{name}</div>
            <div>{min_size}</div>
          </TableContentRow>
        ))}
      </div>
    </Wrapper>
  );
};
