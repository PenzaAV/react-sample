import authSlice from '@bus/auth/slice';
import optionsSlice from '@bus/options/slice';
import profileSlice from '@bus/profile/slice';
import uiSlice from '@bus/ui/slice';
import modalSlice from '@core/Modal/state/slice';
import { combineReducers } from '@reduxjs/toolkit';
import projectsSlice from '@bus/projects/slice';

// IMPORTS

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  options: optionsSlice.reducer,
  ui: uiSlice.reducer,
  profile: profileSlice.reducer,
  modal: modalSlice.reducer,
  projects: projectsSlice.reducer,
  // INJECT
});
