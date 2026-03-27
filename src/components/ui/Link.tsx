import { getColor } from '@app/styles/utils';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

type LinkProps = {
  $size?: number;
};

export const Link = styled(RouterLink)<LinkProps>`
  color: ${getColor('primary')};
  text-decoration: none;
  font-size: ${({ $size }) => $size ?? 14}px;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    color: ${getColor('primaryLight')};
  }

  &:active {
    color: ${getColor('primaryDark')};
  }
`;
