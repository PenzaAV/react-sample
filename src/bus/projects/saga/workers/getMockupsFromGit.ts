import * as effects from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { api } from '@REST/api';
import { handleError } from '@bus/ui/saga/workers/handleError';
import { throwError } from '@bus/ui/saga/workers/throwError';

import { projectsActions } from '../../actions';
import { GetMockupsFromGitActionPayload, NodeFromGit } from '../../typedefs';
import { FinalFormTypes } from '@packages/evne-form';

export function* getMockupsFromGit({
  payload,
  meta: { resolve, reject },
}: FinalFormTypes.PayloadActionWithPromiseMeta<GetMockupsFromGitActionPayload>) {
  try {
    yield effects.put(projectsActions.startFetching());
    const response: Response = yield effects.apply(api, api.get, [
      { endpoint: 'generators/mockups/getList' },
    ]);
    if (!response.ok) {
      const error: { message: string; statusCode: number } = yield effects.call(
        [response, 'json'],
      );
      reject(error.message);
      yield throwError(error.message);
    }
    const data: NodeFromGit[] = yield effects.call([response, 'json']);
    yield effects.put(
      projectsActions.fillMockupsFromGit({
        projectId: payload,
        data,
      }),
    );
  } catch (e) {
    yield handleError(e);
  } finally {
    yield effects.put(projectsActions.stopFetching());
  }
}
