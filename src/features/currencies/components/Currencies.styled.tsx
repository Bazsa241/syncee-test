import { Input } from '@app/components/ui';
import { getColor } from '@app/styles/utils';
import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 800px;
  margin: auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  border-bottom: 2px solid ${getColor('primary')};
  width: min-content;
`;

export const SearchInput = styled(Input)`
  border-radius: 1rem;
`;
