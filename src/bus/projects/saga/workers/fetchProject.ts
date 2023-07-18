import * as effects from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { api } from '@REST/api';
import { handleError } from '@bus/ui/saga/workers/handleError';
import { throwError } from '@bus/ui/saga/workers/throwError';

import { projectsActions } from '../../actions';
import { FetchProjectActionPayload, Project } from '../../typedefs';

export function* fetchProject({
  payload,
}: PayloadAction<FetchProjectActionPayload>) {
  try {
    yield effects.put(projectsActions.startFetching());
    const response: Response = yield effects.apply(api, api.get, [
      { endpoint: `projects/${payload}` },
    ]);
    if (!response.ok) {
      yield throwError(response);
    }
    const data: Project = yield effects.call([response, 'json']);
    yield effects.put(projectsActions.fillProject(data));
  } catch (e) {
    yield handleError(e);
  } finally {
    yield effects.put(projectsActions.stopFetching());
  }
}
