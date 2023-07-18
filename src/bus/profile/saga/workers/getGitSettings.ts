import * as effects from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { api } from '@REST/api';
import { handleError } from '@bus/ui/saga/workers/handleError';
import { throwError } from '@bus/ui/saga/workers/throwError';

import { profileActions } from '../../actions';
import { GitSettings } from '@bus/profile/typedefs';

export function* getGitSettings() {
  try {
    yield effects.put(profileActions.startFetching());
    const response: Response = yield effects.apply(api, api.get, [
      { endpoint: 'profiles/settings/git' },
    ]);
    if (!response.ok) {
      yield throwError(response);
    }
    const data: GitSettings = yield effects.call([response, 'json']);
    yield effects.put(profileActions.fillGitSettings(data));
  } catch (e) {
    yield handleError(e);
  } finally {
    yield effects.put(profileActions.stopFetching());
  }
}
