import { AuthPageLayout } from '@app/components/layout';
import { Register } from '@app/features/register';

export const RegisterPage = () => {
  return (
    <AuthPageLayout title="Create Account" subtitle="Join Syncee and grow your business!">
      <Register />
    </AuthPageLayout>
  );
};
