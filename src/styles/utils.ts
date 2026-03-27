import type { DefaultTheme } from 'styled-components/dist/types';

export const getColor =
  (key: keyof DefaultTheme['colors']) =>
  ({ theme }: { theme: DefaultTheme }) =>
    theme.colors[key];
