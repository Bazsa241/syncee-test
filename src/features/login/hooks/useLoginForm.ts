import { loginSchema, type LoginInput } from '@app/entities/auth';
import { useLogin } from '@app/features/auth';
import { useFormBeforeLogin } from '@app/features/form-before-login';
import { useState } from 'react';
import { z } from 'zod';

const DEFAULT_FORM: LoginInput = { email: '', password: '', remember: false };

export const useLoginForm = () => {
  const [formState, setFormState] = useState<LoginInput>(DEFAULT_FORM);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof LoginInput, string>>>({});

  const { setFormBeforeLogin } = useFormBeforeLogin();

  const setField = <K extends keyof LoginInput>(field: K, value?: LoginInput[K]) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const { handleEmailLogin, handleGoogleLogin: loginWithGoogle, loading, error } = useLogin();

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    setFieldErrors({});

    const result = loginSchema.safeParse(formState);

    if (!result.success) {
      const errors = z.treeifyError(result.error).properties;

      setFieldErrors({
        email: errors?.email?.errors[0],
        password: errors?.password?.errors[0],
      });

      return;
    }

    handleEmailLogin(formState);
    setFormBeforeLogin(formState);
  };

  const handleGoogleLogin = () => {
    loginWithGoogle(formState.remember);
    setFormBeforeLogin(formState);
  };

  return {
    handleSubmit,
    formState,
    setField,
    handleGoogleLogin,
    loading,
    error,
    fieldErrors,
  };
};
