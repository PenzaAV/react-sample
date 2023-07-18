import { apply, call, put } from 'redux-saga/effects';

import { api } from '@REST/api';
import { handleError } from '@bus/ui/saga/workers/handleError';
import { throwError } from '@bus/ui/saga/workers/throwError';
import { FinalFormTypes, getServerFormErrors } from '@packages/evne-form';

import { authActions } from '../../actions';
import { ForgotPasswordPayload } from '../../typedefs';

export function* forgotPassword({
  payload,
  meta: { resolve, reject },
}: FinalFormTypes.PayloadActionWithPromiseMeta<ForgotPasswordPayload>) {
  try {
    const body: string = yield call(JSON.stringify, payload);

    const response: Response = yield apply(api, api.post, [
      { endpoint: `auth/reset-password-request/`, body, unsafe: true },
    ]);

    if (response.status === 400) {
      const errors: FinalFormTypes.ServerFormErrors = yield call([
        response,
        'json',
      ]);
      const formErrors: FinalFormTypes.FormErrors = yield call(
        getServerFormErrors,
        errors,
      );
      reject(formErrors);
      yield throwError(response);
    }

    if (!response.ok) {
      //TODO: add tooltips
      alert('forgot password - fail');
      reject();
      // throw new Error('forgot password - fail');
      yield throwError(response);
    }

    yield put(authActions.allowCountdown(true));

    resolve();
  } catch (e) {
    yield handleError(e);
  }
}
