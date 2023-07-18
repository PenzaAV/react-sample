import { apply } from 'redux-saga/effects';

import { api } from '@REST/api';
import { handleError } from '@bus/ui/saga/workers/handleError';
import { throwError } from '@bus/ui/saga/workers/throwError';
import { FinalFormTypes } from '@packages/evne-form';

import { ConfirmEmailPayload } from '../../typedefs';

export function* confirmEmail({
  payload,
  meta: { resolve, reject },
}: FinalFormTypes.PayloadActionWithPromiseMeta<ConfirmEmailPayload>) {
  try {
    const {
      values: { user_id, activation_token },
    } = payload;

    const response: Response = yield apply(api, api.get, [
      {
        endpoint: `auth/confirm-email/${user_id}/${activation_token}`,
        unsafe: true,
      },
    ]);

    if (!response.ok) {
      //TODO: add tooltips
      alert('confirm email - fail');
      reject('confirm email - fail');
      yield throwError(response);
    }

    resolve();
  } catch (e) {
    yield handleError(e);
  }
}
