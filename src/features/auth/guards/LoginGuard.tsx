import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { PageLoading } from '@app/components/layout';

export const LoginGuard = () => {
  const { user, loading } = useAuth();

  if (loading) return <PageLoading />;

  if (user) return <Navigate to="/" replace />;

  return <Outlet />;
};
