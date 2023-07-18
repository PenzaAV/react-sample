// eslint-disable-next-line @typescript-eslint/no-unused-vars,prettier/prettier
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// eslint-disable-next-line prettier/prettier
import {FillThemeActionPayload, ThemeVariant, UiState,} from './typedefs';

const xlScreenDown = window.innerWidth < 1690;

const initialState: UiState = {
  isFetching: false,
  theme: ThemeVariant.dark,
  isSidebarOpen: !xlScreenDown,
  isMobileSidebarOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    startFetching(state) {
      state.isFetching = true;
    },
    stopFetching(state) {
      state.isFetching = false;
    },
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleMobileSidebar(state) {
      state.isMobileSidebarOpen = !state.isMobileSidebarOpen;
    },
    fillTheme(state, action: PayloadAction<FillThemeActionPayload>) {
      state.theme = action.payload;
    },
    toggleDrawer(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    // INJECT
  },
});

export default uiSlice;
