import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginWithEmail } from '../utils/authHelpers';
import { FirebaseError } from 'firebase/app';
import { setPersistence, browserLocalPersistence, browserSessionPersistence } from 'firebase/auth';
import { auth } from '@app/features/auth/api/firebase';
import { useGoogleAuth } from './useGoogleAuth';
import type { LoginInput } from '@app/entities/auth';

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { loading: googleLoading, error: googleError, handleGoogleAuth } = useGoogleAuth();

  const navigate = useNavigate();

  const handleEmailLogin = async ({ email, password, remember = false }: LoginInput) => {
    setLoading(true);
    setError(null);

    try {
      await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence);
      await loginWithEmail(email, password);
      navigate('/');
    } catch (err) {
      const firebaseError = err as FirebaseError;
      setError(firebaseError.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return {
    loading: loading || googleLoading,
    error: error || googleError,
    handleEmailLogin,
    handleGoogleLogin: handleGoogleAuth,
  };
};
