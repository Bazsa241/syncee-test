import { useContext } from 'react';
import { FormBeforeLoginContext } from '../context/FormBeforeLoginContext';

export const useFormBeforeLogin = () => {
  const context = useContext(FormBeforeLoginContext);

  if (!context) {
    throw new Error('useFormBeforeLogin must be used within FormBeforeLoginProvider');
  }

  return context;
};
