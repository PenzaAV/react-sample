import { FORM_ERROR } from 'final-form';
import * as effects from 'redux-saga/effects';
import { api } from '@REST/api';
import { handleError } from '@bus/ui/saga/workers/handleError';
import { throwError } from '@bus/ui/saga/workers/throwError';
import { FinalFormTypes } from '@packages/evne-form';

import { projectsActions } from '../../actions';
import { CloneGeneratorActionPayload } from '../../typedefs';

export function* cloneGenerator({
  payload,
  meta: { resolve, reject },
}: FinalFormTypes.PayloadActionWithPromiseMeta<CloneGeneratorActionPayload>) {
  try {
    yield effects.put(projectsActions.startFetching());
    const { generatorId, generator_name, project } = payload;
    const dataToBackend = {
      newProjectId: project.id,
      generatorName: generator_name,
    };
    const body: string = yield effects.call(JSON.stringify, dataToBackend);
    const response: Response = yield effects.apply(api, api.post, [
      { endpoint: `generators/${generatorId}/clone`, body },
    ]);
    if (!response.ok) {
      reject({
        [FORM_ERROR]: 'Submit failed',
      });
      yield throwError(response);
    }
    resolve();
  } catch (e) {
    yield handleError(e);
  } finally {
    yield effects.put(projectsActions.stopFetching());
  }
}
