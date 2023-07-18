import createSagaMiddleware from 'redux-saga';

import { Middleware, configureStore } from '@reduxjs/toolkit';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

const middleware: Middleware[] = [sagaMiddleware];

export const Store = (initialState: any) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
    middleware,
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export const createStore = (initialState = {}) => Store(initialState);
