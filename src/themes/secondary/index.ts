import React from 'react';

import { PaletteMode, useMediaQuery } from '@mui/material';
import { ThemeOptions, createTheme } from '@mui/material/styles';

import { breakpoints } from './breakpoints';
import { mixins } from './mixins';
import { dark } from './palette/dark';
import { light } from './palette/light';
import { typography } from './typography';
import { getLightComponents } from './components/light';
import { getDarkComponents } from './components/dark';

export const themeOptions: Partial<ThemeOptions> = {
  mixins,
  breakpoints,
  palette: light,
  typography,
};

export const getDesignTokens = (mode: PaletteMode) => ({
  ...themeOptions,
  components: mode === 'light' ? getLightComponents() : getDarkComponents(),
  palette: {
    mode,
    ...(mode === 'light' ? light : dark),
  },
});
export const useAppTheme = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return React.useMemo(
    () => createTheme(getDesignTokens(prefersDarkMode ? 'dark' : 'light')),
    [prefersDarkMode],
  );
};
