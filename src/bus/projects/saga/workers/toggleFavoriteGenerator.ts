import * as effects from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { api } from '@REST/api';
import { handleError } from '@bus/ui/saga/workers/handleError';
import { throwError } from '@bus/ui/saga/workers/throwError';

import { projectsActions } from '../../actions';
import { ProjectGenerator } from '../../typedefs';

export function* toggleFavoriteGenerator({
  payload,
}: PayloadAction<ProjectGenerator>) {
  try {
    yield effects.put(projectsActions.startFetching());
    const body: string = yield effects.call(JSON.stringify, payload);
    const response: Response = yield effects.apply(api, api.patch, [
      { endpoint: `generators/${payload._id}`, body },
    ]);
    if (!response.ok) {
      yield throwError(response);
    }
    const data: ProjectGenerator = yield effects.call([response, 'json']);
    yield effects.put(projectsActions.fillGenerator(data));
  } catch (e) {
    yield handleError(e);
  } finally {
    yield effects.put(projectsActions.stopFetching());
  }
}
