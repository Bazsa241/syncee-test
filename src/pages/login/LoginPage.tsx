import { AuthPageLayout } from '@app/components/layout';
import { Login } from '@app/features/login';

export const LoginPage = () => {
  return (
    <AuthPageLayout title="Login" subtitle="See your growth and get consulting support!">
      <Login />
    </AuthPageLayout>
  );
};
