import { ThemeProvider } from 'styled-components';
import { theme } from '@app/styles/theme';
import { GlobalStyles } from '@app/styles/GlobalStyles';
import { AuthProvider } from '@app/features/auth';
import { FormBeforeLoginProvider } from '@app/features/form-before-login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type ProvidersProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <FormBeforeLoginProvider>{children}</FormBeforeLoginProvider>
      </AuthProvider>
    </QueryClientProvider>
  </ThemeProvider>
);
