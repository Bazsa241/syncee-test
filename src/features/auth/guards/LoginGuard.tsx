import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Loading } from '@app/components/ui';

export const LoginGuard = () => {
  const { user, loading } = useAuth();

  if (loading) return <Loading />;

  if (user) return <Navigate to="/" replace />;

  return <Outlet />;
};
