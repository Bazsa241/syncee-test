import { ThemeProvider } from 'styled-components';
import { theme } from '@app/styles/theme';
import { GlobalStyles } from '@app/styles/GlobalStyles';
import { AuthProvider } from '@app/features/auth';

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AuthProvider>{children}</AuthProvider>
  </ThemeProvider>
);
