import * as effects from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { handleError } from '@bus/ui/saga/workers/handleError';
import { throwError } from '@bus/ui/saga/workers/throwError';

import { uiActions } from '../../actions';
import { ToggleDrawerActionPayload } from '../../typedefs';

export function* toggleDrawer({
  payload,
}: PayloadAction<ToggleDrawerActionPayload>) {
  try {
    /*
     * fn implementation here
     * */
  } catch (e) {
    yield handleError(e);
  }
}
