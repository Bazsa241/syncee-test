import { registerSchema, type RegisterInput } from '@app/entities/auth';
import { useRegister } from '@app/features/auth';
import { useState } from 'react';
import { z } from 'zod';

const DEFAULT_FORM: RegisterInput = { email: '', password: '', confirmPassword: '' };

export const useRegisterForm = () => {
  const [formState, setFormState] = useState<RegisterInput>(DEFAULT_FORM);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof RegisterInput, string>>>({});

  const setField = <K extends keyof RegisterInput>(field: K, value?: RegisterInput[K]) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const { handleEmailRegister, handleGoogleRegister, loading } = useRegister();

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    setFieldErrors({});

    const result = registerSchema.safeParse(formState);

    if (!result.success) {
      const errors = z.treeifyError(result.error).properties;

      setFieldErrors({
        email: errors?.email?.errors[0],
        password: errors?.password?.errors[0],
        confirmPassword: errors?.confirmPassword?.errors[0],
      });

      return;
    }

    handleEmailRegister(formState);
  };

  return {
    handleSubmit,
    formState,
    setField,
    handleGoogleRegister,
    loading,
    fieldErrors,
  };
};
