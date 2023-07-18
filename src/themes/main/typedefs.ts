import React from 'react';

import { Color, PaletteMode } from '@mui/material';
import {
  CommonColors,
  PaletteAugmentColorOptions,
  PaletteColor,
  PaletteTonalOffset,
  TypeAction,
  TypeBackground,
  TypeDivider,
  TypeText,
} from '@mui/material/styles/createPalette';
import { CSSProperties } from '@mui/material/styles/createMixins';

declare module '@mui/material/styles/createTheme' {
  interface Theme {
    palette: {
      common: CommonColors;
      mode: PaletteMode;
      contrastThreshold: number;
      tonalOffset: PaletteTonalOffset;
      primary: PaletteColor;
      secondary: PaletteColor;
      error: PaletteColor;
      warning: PaletteColor;
      info: PaletteColor;
      success: PaletteColor;
      grey: Color;
      text: TypeText;
      divider: TypeDivider;
      action: TypeAction;
      background: TypeBackground;
      getContrastText: (background: string) => string;
      augmentColor: (options: PaletteAugmentColorOptions) => PaletteColor;
    };
    drawerWidth: number;
    mixins: {
      drawerOpen: CSSProperties;
      drawerClosed: CSSProperties;
      toolbar: CSSProperties;
    };
  }
}
declare module '@mui/material/styles/createPalette' {
  export interface CommonColors {
    red: string;
    green: string;
  }

  export interface PaletteOptions {
    common?: Partial<CommonColors>;
  }
}

declare module '@mui/material/styles' {
  export interface TypographyVariantsOptions {
    title?: React.CSSProperties;
  }
  export interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

declare module '@mui/material/Typography' {
  export interface TypographyPropsVariantOverrides {
    title: true;
  }
}
declare module '@mui/material/styles/createMixins' {
  export interface MixinsOptions {
    drawerOpen: CSSProperties;
    drawerClosed: CSSProperties;
  }
  export interface Mixins {
    drawerOpen: CSSProperties;
    drawerClosed: CSSProperties;
  }
}
declare module '@mui/material/Button' {
  export interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    tertiary: true;
  }
  export interface ButtonPropsColorOverrides {
    green: true;
  }
}
declare module 'notistack' {
  interface VariantOverrides {
    infoSnackbar: true;
  }
}

export type ButtonVariants = 'primary' | 'secondary' | 'tertiary';

export type ButtonColors = 'green';
