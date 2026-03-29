import { auth } from '@app/features/auth/api/firebase';
import type { FirebaseError } from 'firebase/app';
import { browserLocalPersistence, browserSessionPersistence, setPersistence } from 'firebase/auth';
import { useState } from 'react';
import { signInWithGoogle } from '../utils/authHelpers';
import { useAuthErrorToast } from './useAuthErrorToast';

export const useGoogleAuth = () => {
  const [loading, setLoading] = useState(false);

  const { setAuthToastError } = useAuthErrorToast();

  const handleGoogleAuth = async (remember: boolean = false) => {
    setLoading(true);

    try {
      await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence);
      await signInWithGoogle();
    } catch (err) {
      const firebaseError = err as FirebaseError;
      setAuthToastError(firebaseError.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, handleGoogleAuth };
};
