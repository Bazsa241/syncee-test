import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppRouter } from '@app/app/Routes';
import { Providers } from './app/Providers';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <AppRouter />
    </Providers>
  </StrictMode>,
);
