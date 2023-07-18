import { call, put } from 'redux-saga/effects';

import {
  getAccessToken,
  refreshToken,
  saveAccessToken,
  verifyToken,
} from '@REST/api';
import { handleError } from '@bus/ui/saga/workers/handleError';

import { authActions } from '../../actions';

export function* authenticate() {
  try {
    const tokenAccess: string = yield call(getAccessToken);

    if (tokenAccess) {
      const valid: boolean = yield call(verifyToken, tokenAccess);
      if (!valid) {
        const newToken: string = yield call(refreshToken);
        if (newToken) {
          yield call(saveAccessToken, newToken);
          yield put(authActions.isAuthenticatedTrue());
        } else {
          localStorage.setItem('target_pathname', window.location.pathname);
          yield put(authActions.clearData());
          throw new Error('Your session is expired.');
        }
      } else {
        yield put(authActions.isAuthenticatedTrue());
      }
    }
  } catch (e) {
    yield handleError(e);
  } finally {
    yield put(authActions.initialize());
  }
}
