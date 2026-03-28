import { Spinner } from '@app/components/ui';
import styled from 'styled-components';

const FullPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const PageLoading = () => {
  return (
    <FullPage>
      <Spinner />
    </FullPage>
  );
};
