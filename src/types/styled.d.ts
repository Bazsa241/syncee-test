import { theme } from '@app/styles/theme';

type Colors = (typeof theme)['colors'];
type Radius = (typeof theme)['radius'];

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    radius: Radius;
  }
}
