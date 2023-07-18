import { call } from 'redux-saga/effects';

type ErrorType = {
  message: string;
  statusCode: number;
};

export function* throwError(response: any) {
  const error: ErrorType = yield call([response, 'json']);
  throw new Error(error.message, { cause: error as unknown as Error });
}
