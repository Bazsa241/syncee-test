import { Spinner } from '@app/components/ui';
import { useCurrencies } from '../hooks/useCurrencies';
import { CurrenciesTable } from './CurrenciesTable';
import { Header, SearchInput, Wrapper } from './Currencies.styled';
import { SpinnerContainer } from './CurrenciesTable.styled.';
import { PageTitle } from '@app/components/ui/PageTitle';

export const Currencies = () => {
  const { currencies, search, handleSearchChange, isLoading } = useCurrencies();

  return (
    <Wrapper>
      <Header>
        <PageTitle>Currencies</PageTitle>
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
