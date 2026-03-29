import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.layout.contentWidth};
  margin: auto;
`;

export const Header = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  white-space: nowrap;
  column-gap: 1rem;
`;
