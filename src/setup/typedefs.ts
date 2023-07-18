import { ProjectsState } from '@bus/projects/typedefs';
// IMPORTS

import React from 'react';

import { AuthState } from '@bus/auth/typedefs';
import { OptionsState } from '@bus/options/typedefs';
import { ProfileState } from '@bus/profile/typedefs';
import { UiState } from '@bus/ui/typedefs';
import { ModalState } from '@core/Modal/types';

export type RootState = {
  ui: UiState;
  options: OptionsState;
  auth: AuthState;
  profile: ProfileState;
  modal: ModalState;
  projects: ProjectsState;
  // INJECT
};

export type Subset<K> = {
  [attr in keyof K]?: K[attr] extends object ? Subset<K[attr]> : K[attr];
};

export enum HttpStatus {
  OK = 200,
  FOUND = 302,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  SERVER_ERROR = 500,
}

export type ServerSideActionPayload<T> = {
  type: string;
  payload: T;
  meta: {
    token: string;
  };
};

export type ServerSideMeta = {
  token?: string;
};

/////////////////////////

export const emptyPaginationState: unknown = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

export interface IOption {
  label: string;
  id: number;
}

export type AppRoute<P> = {
  path: string;
  Component: React.ReactElement;
  Layout: React.FC<P>;
  layoutProps: P;
  forRole?: string;
  title?: string;
  exact?: boolean;
};
