import { useState } from 'react';
import { loginWithEmail } from '../utils/authHelpers';
import { FirebaseError } from 'firebase/app';
import { setPersistence, browserLocalPersistence, browserSessionPersistence } from 'firebase/auth';
import { auth } from '@app/features/auth/api/firebase';
import { useGoogleAuth } from './useGoogleAuth';
import type { LoginInput } from '@app/entities/auth';
import { useAuthErrorToast } from './useAuthErrorToast';

export const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const { setAuthToastError } = useAuthErrorToast();

  const { loading: googleLoading, handleGoogleAuth } = useGoogleAuth();

  const handleEmailLogin = async ({ email, password, remember = false }: LoginInput) => {
    setLoading(true);

    try {
      await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence);
      await loginWithEmail(email, password);
    } catch (err) {
      const firebaseError = err as FirebaseError;
      setAuthToastError(firebaseError.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading: loading || googleLoading,
    handleEmailLogin,
    handleGoogleLogin: handleGoogleAuth,
  };
};
