import * as effects from 'redux-saga/effects';

import { api } from '@REST/api';
import { handleError } from '@bus/ui/saga/workers/handleError';
import { throwError } from '@bus/ui/saga/workers/throwError';
import { PayloadAction } from '@reduxjs/toolkit';

import { profileActions } from '../../actions';
import { FetchProfileActionPayload } from '../../typedefs';

export function* fetchProfile({
  payload,
}: PayloadAction<FetchProfileActionPayload>) {
  try {
    yield effects.put(profileActions.startFetching());
    const response: Response = yield effects.apply(api, api.get, [
      { endpoint: '' },
    ]);
    if (!response.ok) {
      yield throwError(response);
    }
    const data: unknown = yield effects.call([response, 'json']);
    yield effects.put(profileActions.fillProfile(data));
  } catch (e) {
    yield handleError(e);
  } finally {
    yield effects.put(profileActions.stopFetching());
  }
}
