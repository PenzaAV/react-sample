// eslint-disable-next-line @typescript-eslint/no-unused-vars,prettier/prettier
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// eslint-disable-next-line prettier/prettier
import {
  ProfileState,
  FillProfileActionPayload,
  FillGitSettingsActionPayload,
} from './typedefs';

const initialState: ProfileState = {
  isFetching: false,
  git: {},
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    startFetching(state) {
      state.isFetching = true;
    },
    stopFetching(state) {
      state.isFetching = false;
    },
    fillProfile(state, action: PayloadAction<FillProfileActionPayload>) {
      // modify state here
    },
    fillGitSettings(
      state,
      action: PayloadAction<FillGitSettingsActionPayload>,
    ) {
      state.git = action.payload;
    },
    // INJECT
  },
});

export default profileSlice;
