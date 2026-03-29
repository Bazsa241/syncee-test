import { Spinner } from '@app/components/ui';
import { useCurrencies } from '../hooks/useCurrencies';
import { CurrenciesTable } from './CurrenciesTable';
import { Header, SearchInput, Title, Wrapper } from './Currencies.styled';
import { SpinnerContainer } from './CurrenciesTable.styled.';

export const Currencies = () => {
  const { currencies, search, handleSearchChange, isLoading } = useCurrencies();

  return (
    <Wrapper>
      <Header>
        <Title>Currencies</Title>
        <SearchInput placeholder="Search" value={search} onChange={handleSearchChange} />
      </Header>

      {!isLoading && <CurrenciesTable currencies={currencies} />}

      {isLoading && (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
    </Wrapper>
  );
};
