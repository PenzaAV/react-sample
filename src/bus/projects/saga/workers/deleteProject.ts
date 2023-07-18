import * as effects from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { api } from '@REST/api';
import { handleError } from '@bus/ui/saga/workers/handleError';
import { throwError } from '@bus/ui/saga/workers/throwError';

import { projectsActions } from '../../actions';
import { DeleteProjectActionPayload } from '../../typedefs';

export function* deleteProject({
  payload,
}: PayloadAction<DeleteProjectActionPayload>) {
  try {
    yield effects.put(projectsActions.startFetching());
    const response: Response = yield effects.apply(api, api.delete, [
      { endpoint: `projects/${payload}` },
    ]);
    if (!response.ok) {
      yield throwError(response);
    }

    yield effects.put(projectsActions.removeProject(payload));
  } catch (e) {
    yield handleError(e);
  } finally {
    yield effects.put(projectsActions.stopFetching());
  }
}
