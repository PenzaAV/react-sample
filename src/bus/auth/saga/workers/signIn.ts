import { FORM_ERROR } from 'final-form';
import { apply, call, put } from 'redux-saga/effects';

import { api } from '@REST/api';
import { handleError } from '@bus/ui/saga/workers/handleError';
import { throwError } from '@bus/ui/saga/workers/throwError';
import { FinalFormTypes } from '@packages/evne-form';
import Cookies from 'js-cookie';

import { authActions } from '../../actions';
import { SignInActionPayload } from '../../typedefs';

export function* signIn({
  payload,
  meta: { resolve, reject },
}: FinalFormTypes.PayloadActionWithPromiseMeta<SignInActionPayload>) {
  try {
    const { remember, password, email } = payload;
    const body: string = yield call(JSON.stringify, { password, email });

    const response: Response = yield apply(api, api.post, [
      { endpoint: `auth/sign-in`, body, unsafe: true },
    ]);

    if (response.status === 400) {
      reject({
        [FORM_ERROR]: 'Please check you credentials',
      });
      yield throwError(response);
    }

    if (response.status === 401) {
      reject({
        [FORM_ERROR]: 'Please check you credentials',
      });
      yield throwError(response);
    }

    const { accessToken } = yield call([response, 'json']);
    console.log(accessToken);
    yield put(authActions.isAuthenticatedTrue());

    if (remember) {
      Cookies.set('accessToken', JSON.stringify(accessToken));
    } else {
      Cookies.set('accessToken', JSON.stringify(accessToken));
    }

    resolve();
  } catch (e) {
    yield handleError(e);
  }
}
