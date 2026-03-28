import { useAuth } from '@app/features/auth';

export const HomePage = () => {
  const { logout } = useAuth();
  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={logout}>logout</button>
    </div>
  );
};
