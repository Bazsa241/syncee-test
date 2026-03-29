import { useState } from 'react';
import { FirebaseError } from 'firebase/app';
import {
  setPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '@app/features/auth/api/firebase';
import { useGoogleAuth } from './useGoogleAuth';
import type { RegisterInput } from '@app/entities/auth';
import { useAuthErrorToast } from './useAuthErrorToast';

export const useRegister = () => {
  const [loading, setLoading] = useState(false);

  const { setAuthToastError } = useAuthErrorToast();

  const { loading: googleLoading, handleGoogleAuth } = useGoogleAuth();

  const handleEmailRegister = async ({ email, password }: RegisterInput) => {
    setLoading(true);

    try {
      await setPersistence(auth, browserSessionPersistence);
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      const firebaseError = err as FirebaseError;
      setAuthToastError(firebaseError.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading: loading || googleLoading,
    handleEmailRegister,
    handleGoogleRegister: handleGoogleAuth,
  };
};
