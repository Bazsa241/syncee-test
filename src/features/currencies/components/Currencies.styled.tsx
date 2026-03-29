import { Input } from '@app/components/ui';
import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.layout.contentWidth};
  margin: auto;
  padding-bottom: 2rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const SearchInput = styled(Input)`
  border-radius: 1rem;
`;
