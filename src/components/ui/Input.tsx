import { getColor } from '@app/styles/utils';
import { useId } from 'react';
import styled from 'styled-components';

type ErrorProp = { $error: boolean };

const StyledInput = styled.input<ErrorProp>`
  border: 1px solid ${({ theme, $error }) => ($error ? theme.colors.error : theme.colors.border)};
  border-radius: ${({ theme }) => theme.radius.pill};
  color: ${({ theme, $error }) => ($error ? theme.colors.error : theme.colors.text)};
  padding: 1rem 1.5rem;
  margin-top: 0.5rem;
  width: 100%;

  &::placeholder {
    color: ${getColor('textSecondary')};
  }

  &:focus {
    border-color: ${getColor('borderFocus')};
  }

  &:focus-visible {
    border-color: ${getColor('borderFocus')};
  }
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
`;

const Error = styled.small<ErrorProp>`
  color: #da4343;
  display: block;
  font-size: 12px;
  visibility: ${({ $error }) => ($error ? 'visible' : 'hidden')};
`;

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export const Input = ({ label, error, name, id, ...props }: InputProps) => {
  const autoId = useId();
  const inputId = id ?? name ?? autoId;
  const hasError = Boolean(error);

  return (
    <div>
      <Label htmlFor={inputId}>{label}</Label>
      <StyledInput $error={hasError} id={inputId} name={name || label?.toLowerCase()} {...props} />
      <Error $error={hasError}>{error}</Error>
    </div>
  );
};
