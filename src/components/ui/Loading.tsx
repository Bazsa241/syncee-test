import { getColor } from '@app/styles/utils';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const FullPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Spinner = styled.div`
  border: 4px solid ${getColor('border')};
  border-top: 4px solid ${getColor('primary')};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

export const Loading = () => {
  return (
    <FullPage>
      <Spinner />
    </FullPage>
  );
};
