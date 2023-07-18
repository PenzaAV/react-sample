import * as effects from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { api } from '@REST/api';
import { handleError } from '@bus/ui/saga/workers/handleError';
import { throwError } from '@bus/ui/saga/workers/throwError';

import { profileActions } from '../../actions';
import { UpdateAvatarActionPayload } from '../../typedefs';

export function* updateAvatar({
  payload,
}: PayloadAction<UpdateAvatarActionPayload>) {
  try {
    yield effects.put(profileActions.startFetching());
    const body: string = yield effects.call(JSON.stringify, payload);
    const response: Response = yield effects.apply(api, api.put, [
      { endpoint: '', body },
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
