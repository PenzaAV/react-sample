import * as effects from 'redux-saga/effects';

import { uiActions } from '../actions';
// eslint-disable-next-line prettier/prettier
import {
  fetchTheme,
  toggleDrawer,
} from './workers';

// IMPORTS
function* watchFetchTheme() {
  yield effects.takeEvery(uiActions.fetchTheme.type, fetchTheme);
}
// WATCHERS
export function* watchUi() {
  // eslint-disable-next-line prettier/prettier
  yield effects.all([
    effects.call(watchFetchTheme),
    // INJECT
  ]);
}
