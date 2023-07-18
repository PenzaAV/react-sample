import { apply, call } from 'redux-saga/effects';

import { api } from '@REST/api';
import { handleError } from '@bus/ui/saga/workers/handleError';
import { throwError } from '@bus/ui/saga/workers/throwError';
import { FinalFormTypes, getServerFormErrors } from '@packages/evne-form';

import { ResetPasswordPayload } from '../../typedefs';

export function* resetPassword({
  payload,
  meta: { resolve, reject },
}: FinalFormTypes.PayloadActionWithPromiseMeta<ResetPasswordPayload>) {
  try {
    const {
      values: { values, params },
    } = payload;

    const body: string = yield call(JSON.stringify, values);

    const response: Response = yield apply(api, api.post, [
      {
        endpoint: `auth/reset-password/${params.user_id}/${params.reset_token}/`,
        body,
        unsafe: true,
      },
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
      alert('reset password - fail');
      reject();
      // throw new Error('reset password - fail');
      yield throwError(response);
    }

    resolve();
  } catch (e) {
    yield handleError(e);
  }
}
