import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CurrenciesPage, HomePage, LoginPage } from '@app/pages';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/currencies" element={<CurrenciesPage />} />
    </Routes>
  </BrowserRouter>
);
