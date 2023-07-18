import { FORM_ERROR } from 'final-form';
import * as effects from 'redux-saga/effects';
import { api } from '@REST/api';
import { handleError } from '@bus/ui/saga/workers/handleError';
import { throwError } from '@bus/ui/saga/workers/throwError';
import { FinalFormTypes } from '@packages/evne-form';

import { projectsActions } from '../../actions';
import { CreateProjectActionPayload, Project } from '../../typedefs';

export function* createProject({
  payload,
  meta: { resolve, reject },
}: FinalFormTypes.PayloadActionWithPromiseMeta<CreateProjectActionPayload>) {
  try {
    yield effects.put(projectsActions.startFetching());
    const body: string = yield effects.call(JSON.stringify, payload);
    const response: Response = yield effects.apply(api, api.post, [
      { endpoint: 'projects', body },
    ]);
    if (!response.ok) {
      reject({
        [FORM_ERROR]: 'Submit failed',
      });
      yield throwError(response);
    }
    const data: Project = yield effects.call([response, 'json']);
    yield effects.put(projectsActions.fillProject(data));
    resolve();
  } catch (e) {
    yield handleError(e);
  } finally {
    yield effects.put(projectsActions.stopFetching());
  }
}
