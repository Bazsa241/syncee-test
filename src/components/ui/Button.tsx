import { getColor } from '@app/styles/utils';
import styled, { css, type RuleSet } from 'styled-components';

type Variant = 'primary' | 'secondary';

const variantStyles: Record<Variant, RuleSet<object>> = {
  primary: css`
    background: ${getColor('primary')};
    border: none;
    color: ${getColor('primaryText')};

    &:hover {
      background: ${getColor('primaryLight')};
    }

    &:active {
      background: ${getColor('primaryDark')};
    }
  `,
  secondary: css`
    background: ${getColor('background')};
    border: 1px solid ${({ theme }) => theme.colors.border};
    color: ${getColor('text')};

    &:hover {
      background: ${getColor('primaryLight')};
      color: ${getColor('primaryText')};
    }

    &:active {
      background: ${getColor('primaryDark')};
    }
  `,
};

type StyledButtonProps = {
  $variant?: Variant;
};

const StyledButton = styled.button<StyledButtonProps>`
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.pill};
  cursor: pointer;
  display: flex;
  font-size: 16px;
  gap: 1rem;
  justify-content: center;
  padding: 1rem 1.5rem;

  ${({ $variant = 'primary' }) => variantStyles[$variant]}
`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  iconStart?: React.ReactNode;
};

export const Button = ({ variant, iconStart, children, ...props }: ButtonProps) => {
  return (
    <StyledButton $variant={variant} {...props}>
      {iconStart}
      {children}
    </StyledButton>
  );
};
