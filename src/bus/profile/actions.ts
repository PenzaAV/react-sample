import prepareActions from '@helpers/prepareActions';
import { createAction } from '@reduxjs/toolkit';

import profileSlice from './slice';

export const profileActions = {
  ...profileSlice.actions,
  fetchProfile: createAction('profile/fetchProfile'),
  setGitSettings: createAction(
    'profile/setGitSettings',
    prepareActions.movePromiseToMeta,
  ),
  getGitSettings: createAction('profile/getGitSettings'),
  updateAvatar: createAction(
    'profile/updateAvatar',
    //TODO: remove this function if you don't need to modify payload for saga
    (payload: any) => {
      // modify payload place
      return payload;
    },
  ),
  // INJECT
};
