import { ThemeProvider } from 'styled-components';
import { theme } from '@app/styles/theme';
import { GlobalStyles } from '@app/styles/GlobalStyles';
import { AuthProvider } from '@app/features/auth';
import { FormBeforeLoginProvider } from '@app/features/form-before-login';

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AuthProvider>
      <FormBeforeLoginProvider>{children}</FormBeforeLoginProvider>
    </AuthProvider>
  </ThemeProvider>
);
