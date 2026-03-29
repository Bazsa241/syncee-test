import { Routes, Route } from 'react-router-dom';
import { CurrenciesPage, HomePage, LoginPage, RegisterPage } from '@app/pages';
import { AuthGuard, LoginGuard } from '@app/features/auth';
import { Navigation } from '@app/features/navigation';
import { AppLayout } from '@app/components/layout';
import { HashRouter } from 'react-router-dom';

export const AppRouter = () => (
  <HashRouter>
    <Routes>
      <Route element={<LoginGuard />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<AuthGuard />}>
        <Route element={<AppLayout navbar={<Navigation />} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/currencies" element={<CurrenciesPage />} />
        </Route>
      </Route>
    </Routes>
  </HashRouter>
);
