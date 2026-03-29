import { useSnackbar } from 'notistack';

export const useToast = () => {
  const { enqueueSnackbar } = useSnackbar();

  const setToastError = (message: string) => {
    enqueueSnackbar(message, {
      variant: 'error',
      key: message,
      preventDuplicate: true,
    });
  };

  return {
    setToastError,
  };
};
