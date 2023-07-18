import { put } from 'redux-saga/effects';

import { authActions } from '@bus/auth/actions';
import { book } from '@routes/book';
import { removeAccessToken } from '@REST/api';

export function* handleError(error: any) {
  if (error.cause?.statusCode === 401) {
    yield put(authActions.clearData());
    removeAccessToken();
    window.location.pathname = book.signIn;
  }
}
