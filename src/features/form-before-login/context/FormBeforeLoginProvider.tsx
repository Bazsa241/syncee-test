import type { LoginInput } from '@app/entities/auth';
import { FormBeforeLoginContext } from './FormBeforeLoginContext';
import { useState } from 'react';

type FormBeforeLoginProviderProps = {
  children: React.ReactNode;
};

export const FormBeforeLoginProvider = ({ children }: FormBeforeLoginProviderProps) => {
  const [formBeforeLogin, setFormBeforeLogin] = useState<LoginInput | null>(null);

  const value = { formBeforeLogin, setFormBeforeLogin };

  return (
    <FormBeforeLoginContext.Provider value={value}>{children}</FormBeforeLoginContext.Provider>
  );
};
