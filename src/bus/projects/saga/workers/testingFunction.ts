import * as effects from 'redux-saga/effects';
import { api } from '@REST/api';
import { handleError } from '@bus/ui/saga/workers/handleError';
import { throwError } from '@bus/ui/saga/workers/throwError';

import { projectsActions } from '../../actions';
import {
  TestingFunctionActionPayload,
  TestingFunctionResponse,
} from '../../typedefs';
import { FinalFormTypes } from '@packages/evne-form';

export function* testingFunction({
  payload,
  meta: { resolve, reject },
}: FinalFormTypes.PayloadActionWithPromiseMeta<TestingFunctionActionPayload>) {
  try {
    yield effects.put(projectsActions.startTesting());
    const body: string = yield effects.call(JSON.stringify, payload);
    const response: Response = yield effects.apply(api, api.post, [
      { endpoint: 'generators/testing', body },
    ]);

    if (!response.ok) {
      yield throwError(response);
    }
    const data: TestingFunctionResponse = yield effects.call([
      response,
      'json',
    ]);
    resolve(data);
  } catch (e: any) {
    yield reject(e?.cause);
    yield handleError(e);
  } finally {
    yield effects.put(projectsActions.finishTesting());
  }
}
