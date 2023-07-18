import { FORM_ERROR } from 'final-form';
import * as effects from 'redux-saga/effects';
import { api } from '@REST/api';
import { handleError } from '@bus/ui/saga/workers/handleError';
import { throwError } from '@bus/ui/saga/workers/throwError';
import { FinalFormTypes } from '@packages/evne-form';

import { projectsActions } from '../../actions';
import {
  AddGeneratorActionPayload,
  CreateGeneratorType,
  ProjectGenerator,
} from '../../typedefs';

export function* addGenerator({
  payload,
  meta: { resolve, reject },
}: FinalFormTypes.PayloadActionWithPromiseMeta<AddGeneratorActionPayload>) {
  try {
    yield effects.put(projectsActions.startFetching());
    const createGeneratorData: CreateGeneratorType = {
      name: payload.name,
      description: payload.description,
      form: {
        fields: payload?.generators ?? [],
      },
      templates: payload?.templates ?? [],
    };

    const body: string = yield effects.call(
      JSON.stringify,
      createGeneratorData,
    );
    const response: Response = yield effects.apply(api, api.post, [
      { endpoint: `generators/${payload.projectId}`, body },
    ]);
    if (!response.ok) {
      reject({
        [FORM_ERROR]: 'Submit failed',
      });
      yield throwError(response);
    }
    const data: ProjectGenerator = yield effects.call([response, 'json']);
    yield effects.put(projectsActions.fillGenerator(data));
    resolve();
  } catch (e) {
    yield handleError(e);
  } finally {
    yield effects.put(projectsActions.stopFetching());
  }
}
