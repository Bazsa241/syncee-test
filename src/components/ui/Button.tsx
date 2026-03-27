import { getColor } from '@app/styles/utils';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${getColor('primary')};
  border: none;
  border-radius: ${({ theme }) => theme.radius.pill};
  color: ${getColor('primaryText')};
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 1rem 1.5rem;

  &:hover {
    background: ${getColor('primaryLight')};
  }

  &:active {
    background: ${getColor('primaryDark')};
  }
`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {};

export const Button = ({ ...props }: ButtonProps) => <StyledButton {...props}></StyledButton>;
