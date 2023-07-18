import { PaletteOptions } from '@mui/material/styles/createPalette';
export const dark: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#528CC7',
    light: '#97C3F3',
    dark: '#487EB8',
  },
  // background colors
  secondary: {
    // box back
    main: '#3C3F41',
    //inputs back
    light: '#4C5052',
    dark: '#000000',
  },
  info: {
    // text main(using for text)
    main: '#BBBBBB',
    // border
    light: '#646464',
    // disabled dark text
    dark: '#777777',
  },
  success: {
    main: '#50A661',
    // white color use for text
    light: '#FFFFFF',
  },
  error: {
    main: '#CE3845',
  },
  common: {
    white: 'rgb(255, 255, 255)',
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
