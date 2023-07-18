import * as effects from 'redux-saga/effects';

import { authActions } from '../actions';
// eslint-disable-next-line prettier/prettier
import {
  authenticate,
  confirmEmail,
  forgotPassword,
  resetPassword,
  setPassword,
  signIn,
  signUp,
} from './workers';

// IMPORTS

function* watchSignIn() {
  yield effects.takeEvery(authActions.signIn.type, signIn);
}

function* watchSignUp() {
  yield effects.takeEvery(authActions.signUp.type, signUp);
}

function* watchConfirmEmail() {
  yield effects.takeEvery(authActions.confirmEmail.type, confirmEmail);
}

function* watchForgotPassword() {
  yield effects.takeEvery(authActions.forgotPassword.type, forgotPassword);
}

function* watchResetPassword() {
  yield effects.takeEvery(authActions.resetPassword.type, resetPassword);
}

function* watchSetPassword() {
  yield effects.takeEvery(authActions.setPassword.type, setPassword);
}

function* watchAuthenticate() {
  yield effects.takeEvery(authActions.authenticate.type, authenticate);
}
// WATCHERS
export function* watchAuth() {
  // eslint-disable-next-line prettier/prettier
  yield effects.all([
    effects.call(watchAuthenticate),
    effects.call(watchSignIn),
    effects.call(watchSignUp),
    effects.call(watchConfirmEmail),
    effects.call(watchForgotPassword),
    effects.call(watchResetPassword),
    effects.call(watchSetPassword),
    // INJECT
  ]);
}
