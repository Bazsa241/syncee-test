import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CurrenciesPage, HomePage, LoginPage } from '@app/pages';
import { AuthGuard } from '@app/features/auth';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route element={<AuthGuard />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/currencies" element={<CurrenciesPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
