import { auth } from '@app/features/auth/api/firebase';
import type { FirebaseError } from 'firebase/app';
import { browserLocalPersistence, browserSessionPersistence, setPersistence } from 'firebase/auth';
import { useState } from 'react';
import { signInWithGoogle } from '../utils/authHelpers';

export const useGoogleAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleAuth = async (remember: boolean = false) => {
    setLoading(true);
    setError(null);

    try {
      await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence);
      await signInWithGoogle();
    } catch (err) {
      const firebaseError = err as FirebaseError;
      setError(firebaseError.message || 'Google login failed');
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, handleGoogleAuth };
};
