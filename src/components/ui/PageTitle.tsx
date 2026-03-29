import { getColor } from '@app/styles/utils';
import styled from 'styled-components';

export const PageTitle = styled.h1`
  border-bottom: 2px solid ${getColor('primary')};
  width: min-content;
  white-space: nowrap;
`;
