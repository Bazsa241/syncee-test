import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import {
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '@app/features/auth/api/firebase';
import { useGoogleAuth } from './useGoogleAuth';

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { loading: googleLoading, error: googleError, handleGoogleAuth } = useGoogleAuth();

  const navigate = useNavigate();

  const handleEmailRegister = async (
    email: string,
    password: string,
    remember: boolean = false,
  ) => {
    setLoading(true);
    setError(null);

    try {
      await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence);
      await createUserWithEmailAndPassword(auth, email, password);
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
    handleEmailRegister,
    handleGoogleRegister: handleGoogleAuth,
  };
};
