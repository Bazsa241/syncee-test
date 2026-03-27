import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthContext, type AuthContextType } from './AuthContext';
import { auth } from '../api/firebase';

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<AuthContextType['user']>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value: AuthContextType = { user, loading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
