import * as effects from 'redux-saga/effects';

import { profileActions } from '../actions';
// eslint-disable-next-line prettier/prettier
import {
  fetchProfile,
  setGitSettings,
  getGitSettings,
  updateAvatar,
} from './workers';

// IMPORTS
function* watchFetchProfile() {
  yield effects.takeEvery(profileActions.fetchProfile.type, fetchProfile);
}
function* watchSetGitSettings() {
  yield effects.takeEvery(profileActions.setGitSettings.type, setGitSettings);
}
function* watchGetGitSettings() {
  yield effects.takeEvery(profileActions.getGitSettings.type, getGitSettings);
}
function* watchUpdateAvatar() {
  yield effects.takeEvery(profileActions.updateAvatar.type, updateAvatar);
}
// WATCHERS
export function* watchProfile() {
  // eslint-disable-next-line prettier/prettier
  yield effects.all([
    effects.call(watchFetchProfile),
    effects.call(watchSetGitSettings),
    effects.call(watchGetGitSettings),
    effects.call(watchUpdateAvatar),
    // INJECT
  ]);
}
