import { ThemeProvider } from 'styled-components';
import { theme } from '@app/styles/theme';
import { GlobalStyles } from '@app/styles/GlobalStyles';
import { AuthProvider } from '@app/features/auth';
import { FormBeforeLoginProvider } from '@app/features/form-before-login';
import { QueryProvider } from './providers/QueryProvider';
import { SnackbarProvider } from './providers/SnackbarProvider';

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <SnackbarProvider>
      <QueryProvider>
        <AuthProvider>
          <FormBeforeLoginProvider>{children}</FormBeforeLoginProvider>
        </AuthProvider>
      </QueryProvider>
    </SnackbarProvider>
  </ThemeProvider>
);
