import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppRouter } from '@app/app/Routes';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
);
