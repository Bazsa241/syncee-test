import { Center } from '@app/components/layout';
import { getColor } from '@app/styles/utils';
import styled from 'styled-components';

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  justify-items: center;
  padding: 12px;
  border-bottom: 1px solid ${getColor('border')};
`;

export const TableHeaderRow = styled(TableRow)`
  background: ${getColor('surface')};
  border-width: 2px;
  border-color: ${getColor('primaryLight')};
  font-weight: 600;
`;

export const TableContentRow = styled(TableRow)`
  &:nth-child(odd) {
    background: ${getColor('surface')};
  }
`;

export const SpinnerContainer = styled(Center)`
  margin-top: 3rem;
`;
