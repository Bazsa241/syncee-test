import { SnackbarProvider as NotistackProvider } from 'notistack';

export const SnackbarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NotistackProvider
      maxSnack={3}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      autoHideDuration={4000}
    >
      {children}
    </NotistackProvider>
  );
};
