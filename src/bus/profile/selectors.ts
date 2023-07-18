import { createSelector } from 'reselect';

import { RootState } from '@setup/typedefs';

const profileSelector = (state: RootState) => state.profile;

export const getIsProfileFetching = createSelector(
  [profileSelector],
  (result) => {
    return { isFetching: result.isFetching };
  },
);

export const getGitSettings = createSelector([profileSelector], (result) => {
  return result.git;
});
