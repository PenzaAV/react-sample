import { PaletteOptions } from '@mui/material/styles/createPalette';

// colors
// error green info inherit primary secondary success warning

export const light: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#528CC7',
    light: '#97C3F3',
    dark: '#487EB8',
  },
  secondary: {
    main: '#C4C4C4',
    light: '#F2F2F2',
    dark: '#000000',
  },
  info: {
    main: '#FFFFFF',
    light: '#6E6E6E',
    dark: '#8C8C8C',
  },
  error: {
    main: '#CE3845',
  },
  common: {
    white: '#ffffff',
    red: '#FF6565',
    green: '#65FF74',
  },
};
// types
declare module '@mui/material/styles/createPalette' {
  export interface CommonColors {
    white: string;
    red: string;
    green: string;
  }
  export interface PaletteOptions {
    common?: Partial<CommonColors>;
  }
}
