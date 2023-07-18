// eslint-disable-next-line @typescript-eslint/no-unused-vars,prettier/prettier
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// eslint-disable-next-line prettier/prettier
import {
	AuthState,
	FillProfileActionPayload,
} from './typedefs';

const initialState: AuthState = {
  isFetching: false,
  profile: null,
  isAuthenticated: false,
  allowCountdown: false,
  isInitialised: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startFetching(state) {
      state.isFetching = true;
    },
    stopFetching(state) {
      state.isFetching = false;
    },
    isAuthenticatedTrue(state) {
      state.isAuthenticated = true;
    },
    isAuthenticatedFalse(state) {
      state.isAuthenticated = false;
    },
    fillProfile(state, action: PayloadAction<FillProfileActionPayload>) {
      state.profile = action.payload;
    },
    allowCountdown(state, action: PayloadAction<boolean>) {
      state.allowCountdown = action.payload;
    },
    clearData(state) {
      state.profile = null;
      state.isAuthenticated = false;
      state.allowCountdown = false;
      localStorage.clear();
      sessionStorage.clear();
    },
    initialize(state) {
      state.isInitialised = true;
    },
    // INJECT
  },
});

export default authSlice;
