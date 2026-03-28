import { theme } from '@app/styles/theme';

type Colors = (typeof theme)['colors'];
type Radius = (typeof theme)['radius'];
type Breakpoints = (typeof theme)['breakpoints'];
type Layout = (typeof theme)['layout'];

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    radius: Radius;
    breakpoints: Breakpoints;
    layout: Layout;
  }
}
