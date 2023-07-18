import * as effects from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { api } from '@REST/api';
import { handleError } from '@bus/ui/saga/workers/handleError';
import { throwError } from '@bus/ui/saga/workers/throwError';

import { FinalFormTypes } from '@packages/evne-form';
import { projectsActions } from '../../actions';
import {
  CreateGeneratorType,
  UpdateGeneratorActionPayload,
} from '../../typedefs';

export function* updateGenerator({
  payload,
  meta,
}: FinalFormTypes.PayloadActionWithPromiseMeta<UpdateGeneratorActionPayload>) {
  try {
    yield effects.put(projectsActions.startFetching());

    const createGeneratorData: CreateGeneratorType = {
      name: payload.name,
      description: payload.description,
      form: {
        fields: payload.generators ?? [],
      },
      templates: payload.templates ?? [],
    };

    const body: string = yield effects.call(
      JSON.stringify,
      createGeneratorData,
    );
    const response: Response = yield effects.apply(api, api.patch, [
      { endpoint: `generators/${payload.id}`, body },
    ]);
    if (!response.ok) {
      yield throwError(response);
      meta.reject();
    }
    //  todo answer from backend
    const data: unknown = yield effects.call([response, 'json']);
    //  use fill generator
    yield effects.put(projectsActions.changeGenerator(data));
    meta.resolve();
  } catch (e) {
    yield handleError(e);
  } finally {
    yield effects.put(projectsActions.stopFetching());
  }
}
