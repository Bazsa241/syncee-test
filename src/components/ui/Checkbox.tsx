import { getColor } from '@app/styles/utils';
import { useId } from 'react';
import styled from 'styled-components';

const CheckboxWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
`;

const StyledCheckbox = styled.input`
  accent-color: ${getColor('primary')};
  color: ${getColor('border')};
  cursor: pointer;
  width: 16px;
  height: 16px;

  &:hover {
    background: ${getColor('primaryLight')};
  }

  &:active {
    background: ${getColor('primaryDark')};
  }
`;

const Label = styled.label`
  cursor: pointer;
  font-size: 14px;
`;

type CheckboxProps = React.ButtonHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const Checkbox = ({ label, id, ...props }: CheckboxProps) => {
  const autoId = useId();
  const inputId = id ?? autoId;

  return (
    <CheckboxWrapper>
      <StyledCheckbox id={inputId} type="checkbox" {...props}></StyledCheckbox>
      <Label htmlFor={inputId}>{label}</Label>
    </CheckboxWrapper>
  );
};
