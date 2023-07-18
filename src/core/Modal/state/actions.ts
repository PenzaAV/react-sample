import modalSlice from './slice';

const actions = {
  ...modalSlice.actions,
};

export const modalActions: typeof actions = actions;
