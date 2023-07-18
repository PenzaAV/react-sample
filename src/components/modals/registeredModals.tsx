import React from 'react';

import { ModalTypes } from '@core/Modal/types';

import { ConfirmOrCancel } from './ConfirmOrCancel';

import { DeleteGenerator } from './DeleteGenerator';

import { CopyGenerator } from './CopyGenerator';

import { CloneProjectModal } from './CloneProjectModal';

// IMPORTS
export const registeredModals: ModalTypes.RegisteredModals = {
  ConfirmOrCancel,
  DeleteGenerator,
  CopyGenerator,
  CloneProjectModal,
  // INJECT
};
