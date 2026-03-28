import { useAuth } from '@app/features/auth';
import { FormBeforeLogin } from '@app/features/form-before-login';

export const HomePage = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={logout}>logout</button>
      <FormBeforeLogin />
    </div>
  );
};
