import prepareActions from '@helpers/prepareActions';
import { createAction } from '@reduxjs/toolkit';

import projectsSlice from './slice';
import {
  GetMockupsFromGitActionPayload,
  ProjectGenerator,
  ActiveTemplateGeneratorPayload,
  ActiveFormFieldGeneratorPayload,
} from './typedefs';

export const projectsActions = {
  ...projectsSlice.actions,
  fetchProjects: createAction('projects/fetchProjects'),
  createProject: createAction(
    'projects/createProject',
    prepareActions.movePromiseToMeta,
  ),
  fetchProject: createAction('projects/fetchProject', (args: string) => ({
    payload: args,
  })),
  deleteProject: createAction('projects/deleteProject', (payload: string) => {
    return {
      payload,
    };
  }),
  addGenerator: createAction(
    'projects/addGenerator',
    prepareActions.movePromiseToMeta,
  ),
  updateGenerator: createAction(
    'projects/updateGenerator',
    prepareActions.movePromiseToMeta,
  ),
  fetchGenerator: createAction('projects/fetchGenerator', (args: string) => ({
    payload: args,
  })),
  deleteGenerator: createAction(
    'projects/deleteGenerator',
    //TODO: remove this function if you don't need to modify payload for saga
    (payload: ProjectGenerator) => {
      // modify payload place
      return { payload };
    },
  ),
  toggleFavoriteGenerator: createAction(
    'projects/toggleFavoriteGenerator',
    //TODO: remove this function if you don't need to modify payload for saga
    (payload: ProjectGenerator) => {
      // modify payload place
      return { payload: { ...payload, isFavorite: !payload.isFavorite } };
    },
  ),
  cloneGenerator: createAction(
    'projects/cloneGenerator',
    prepareActions.movePromiseToMeta,
  ),
  cloneProject: createAction(
    'projects/cloneProject',
    prepareActions.movePromiseToMeta,
  ),
  activeTemplateGenerator: createAction(
    'projects/activeTemplateGenerator',
    (args: ActiveTemplateGeneratorPayload) => ({ payload: args }),
  ),
  activeFormFieldGenerator: createAction(
    'projects/activeFormFieldGenerator',
    (args: ActiveFormFieldGeneratorPayload) => ({ payload: args }),
  ),
  testingFunction: createAction(
    'projects/testingFunction',
    prepareActions.movePromiseToMeta,
  ),
  getMockupsFromGit: createAction(
    'projects/getMockupsFromGit',
    prepareActions.movePromiseToMeta,
  ),
  addMockupsFromGit: createAction(
    'projects/addMockupsFromGit',
    (payload: any) => ({ payload }),
  ),
  // INJECT
};
