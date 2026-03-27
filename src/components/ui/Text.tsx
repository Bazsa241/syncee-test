import { getColor } from '@app/styles/utils';
import styled, { css } from 'styled-components';

type TextVariant = 'subtitle' | 'helper' | 'footer';

interface TextProps {
  $variant?: TextVariant;
}

export const Text = styled.p<TextProps>`
  color: ${getColor('text')};
  font-size: 16px;

  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'subtitle':
        return css`
          color: ${theme.colors.textSecondary};
        `;

      case 'helper':
        return css`
          font-size: 14px;
        `;

      case 'footer':
        return css`
          font-size: 14px;
          color: ${theme.colors.textSecondary};
        `;
    }
  }}
`;
