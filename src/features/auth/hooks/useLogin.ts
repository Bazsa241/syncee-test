import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginWithEmail, signInWithGoogle } from '../utils/authHelpers';
import { FirebaseError } from 'firebase/app';

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleEmailLogin = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      await loginWithEmail(email, password);
      navigate('/');
    } catch (err) {
      const firebaseError = err as FirebaseError;
      setError(firebaseError.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (err) {
      const firebaseError = err as FirebaseError;
      setError(firebaseError.message || 'Google login failed');
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    handleEmailLogin,
    handleGoogleLogin,
  };
};
