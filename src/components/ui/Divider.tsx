import { getColor } from '@app/styles/utils';
import styled from 'styled-components';

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
  color: ${getColor('divider')};
  font-size: 12px;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${getColor('divider')};
  }

  &::before {
    margin-right: 12px;
  }

  &::after {
    margin-left: 12px;
  }
`;
