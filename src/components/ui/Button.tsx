import { getColor } from '@app/styles/utils';
import styled, { css, type RuleSet } from 'styled-components';

type Variant = 'primary' | 'secondary';
type Size = 'sm' | 'lg';

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

const sizeStyles: Record<Size, RuleSet<object>> = {
  sm: css`
    font-size: 14px;
    padding: 0.5rem 1rem;
  `,
  lg: css`
    font-size: 16px;
    padding: 1rem 1.5rem;
  `,
};

type StyledButtonProps = {
  $variant?: Variant;
  $size?: Size;
};

const StyledButton = styled.button<StyledButtonProps>`
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.pill};
  cursor: pointer;
  display: flex;
  gap: 1rem;
  justify-content: center;

  ${({ $variant = 'primary' }) => variantStyles[$variant]}
  ${({ $size = 'lg' }) => sizeStyles[$size]}

  &:disabled {
    background: ${getColor('disabledBackground')};
    color: ${getColor('disabledText')};
    cursor: not-allowed;

    &:hover {
      background: ${getColor('disabledBackground')};
    }
  }
`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  iconStart?: React.ReactNode;
  size?: Size;
};

export const Button = ({ variant, iconStart, size, children, ...props }: ButtonProps) => {
  return (
    <StyledButton $variant={variant} $size={size} {...props}>
      {iconStart}
      {children}
    </StyledButton>
  );
};
