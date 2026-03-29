import { useToast } from '@app/hooks/useToast';
import { getErrorMessage } from '../utils/getErrorMessage';

export const useAuthErrorToast = () => {
  const { setToastError } = useToast();

  const setAuthToastError = (error: string) => {
    const errorMessage = getErrorMessage(error);
    setToastError(errorMessage);
  };

  return {
    setAuthToastError,
  };
};
