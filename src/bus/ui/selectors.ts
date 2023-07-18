import { createSelector } from 'reselect';

import { RootState } from '@setup/typedefs';

const uiSelector = (state: RootState) => state.ui;

export const getIsMobileSidebarOpen = createSelector([uiSelector], (result) => {
  return result.isMobileSidebarOpen;
});

export const getIsSidebarOpen = createSelector([uiSelector], (result) => {
  return result.isSidebarOpen;
});
