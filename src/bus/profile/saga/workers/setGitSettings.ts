import { FORM_ERROR } from 'final-form';
import * as effects from 'redux-saga/effects';
import { api } from '@REST/api';
import { handleError } from '@bus/ui/saga/workers/handleError';
import { throwError } from '@bus/ui/saga/workers/throwError';
import { FinalFormTypes } from '@packages/evne-form';

import { profileActions } from '../../actions';
import { GitSettings, SetGitSettingsActionPayload } from '../../typedefs';

export function* setGitSettings({
  payload,
  meta: { resolve, reject },
}: FinalFormTypes.PayloadActionWithPromiseMeta<SetGitSettingsActionPayload>) {
  try {
    yield effects.put(profileActions.startFetching());
    const body: string = yield effects.call(JSON.stringify, payload);
    const response: Response = yield effects.apply(api, api.post, [
      { endpoint: 'profiles/settings/git', body },
    ]);
    if (!response.ok) {
      reject({
        [FORM_ERROR]: 'Submit failed',
      });
      yield throwError(response);
    }
    const data: GitSettings = yield effects.call([response, 'json']);
    yield effects.put(profileActions.fillGitSettings(data));
    resolve();
  } catch (e) {
    yield handleError(e);
  } finally {
    yield effects.put(profileActions.stopFetching());
  }
}
