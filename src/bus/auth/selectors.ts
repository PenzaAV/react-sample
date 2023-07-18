import { createSelector } from 'reselect';

import { UserRole } from '@bus/auth/typedefs';
import { RootState } from '@setup/typedefs';

const authSelector = (state: RootState) => state.auth;

export const getIsAuthFetching = createSelector([authSelector], (result) => {
  return { isFetching: result.isFetching };
});

export const getAllowCountdown = createSelector([authSelector], (result) => {
  return result.allowCountdown;
});

export const getIsAuthenticated = createSelector([authSelector], (result) => {
  return result.isAuthenticated;
});

export const getIsInitialize = createSelector([authSelector], (result) => {
  return result.isInitialised;
});

export const getCurrentUserProfile = createSelector(
  [authSelector],
  (result) => {
    return result.profile
      ? {
          ...result.profile,
          role: result.profile?.is_admin ? UserRole.admin : UserRole.user,
        }
      : null;
  },
);
export const getCurrentUserId = createSelector([authSelector], (result) => {
  return result.profile?.id;
});
