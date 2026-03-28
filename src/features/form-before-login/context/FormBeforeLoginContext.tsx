import type { LoginInput } from '@app/entities/auth';
import { createContext } from 'react';

type SetFormState = React.Dispatch<React.SetStateAction<LoginInput | null>>;

export type FormBeforeLoginContextType = {
  formBeforeLogin: LoginInput | null;
  setFormBeforeLogin: SetFormState;
};

export const FormBeforeLoginContext = createContext<FormBeforeLoginContextType | undefined>(
  undefined,
);
