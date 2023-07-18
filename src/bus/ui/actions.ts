// eslint-disable-next-line @typescript-eslint/no-unused-vars,prettier/prettier
import prepareActions from '@helpers/prepareActions';
import { createAction } from '@reduxjs/toolkit';

import uiSlice from './slice';

const actions = {
  ...uiSlice.actions,
  fetchTheme: createAction('ui/fetchTheme'),
  fetchTests: createAction('ui/fetchTests'),
  // INJECT
};

export const uiActions: typeof actions = actions;
