import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

type AppLayoutProps = {
  navbar: React.ReactNode;
};

const Main = styled.main`
  max-width: ${({ theme }) => theme.layout.appWidth};
  margin: auto;
  padding: 0 1rem;
`;

export const AppLayout = ({ navbar }: AppLayoutProps) => {
  return (
    <div>
      {navbar}
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};
