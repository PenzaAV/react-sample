import * as effects from 'redux-saga/effects';

import { projectsActions } from '../actions';
// eslint-disable-next-line prettier/prettier
import {
  fetchProjects,
  createProject,
  fetchProject,
  deleteProject,
  addGenerator,
  updateGenerator,
  fetchGenerator,
  deleteGenerator,
  toggleFavoriteGenerator,
  cloneGenerator,
  cloneProject,
  getMockupsFromGit,
  addMockupsFromGit,
  testingFunction,
} from './workers';

// IMPORTS
function* watchFetchProjects() {
  yield effects.takeEvery(projectsActions.fetchProjects.type, fetchProjects);
}
function* watchCreateProject() {
  yield effects.takeEvery(projectsActions.createProject.type, createProject);
}
function* watchFetchProject() {
  yield effects.takeEvery(projectsActions.fetchProject.type, fetchProject);
}
function* watchDeleteProject() {
  yield effects.takeEvery(projectsActions.deleteProject.type, deleteProject);
}
function* watchAddGenerator() {
  yield effects.takeEvery(projectsActions.addGenerator.type, addGenerator);
}
function* watchUpdateGenerator() {
  yield effects.takeEvery(
    projectsActions.updateGenerator.type,
    updateGenerator,
  );
}
function* watchFetchGenerator() {
  yield effects.takeEvery(projectsActions.fetchGenerator.type, fetchGenerator);
}
function* watchDeleteGenerator() {
  yield effects.takeEvery(
    projectsActions.deleteGenerator.type,
    deleteGenerator,
  );
}
function* watchToggleFavoriteGenerator() {
  yield effects.takeEvery(
    projectsActions.toggleFavoriteGenerator.type,
    toggleFavoriteGenerator,
  );
}
function* watchCloneGenerator() {
  yield effects.takeEvery(projectsActions.cloneGenerator.type, cloneGenerator);
}
function* watchCloneProject() {
  yield effects.takeEvery(projectsActions.cloneProject.type, cloneProject);
}
function* watchGetMockupsFromGit() {
  yield effects.takeEvery(
    projectsActions.getMockupsFromGit.type,
    getMockupsFromGit,
  );
}
function* watchAddMockupsFromGit() {
  yield effects.takeEvery(
    projectsActions.addMockupsFromGit.type,
    addMockupsFromGit,
  );
}
function* watchTestingFunction() {
  yield effects.takeEvery(
    projectsActions.testingFunction.type,
    testingFunction,
  );
}
// WATCHERS
export function* watchProjects() {
  // eslint-disable-next-line prettier/prettier
  yield effects.all([
    effects.call(watchFetchProjects),
    effects.call(watchCreateProject),
    effects.call(watchFetchProject),
    effects.call(watchDeleteProject),
    effects.call(watchAddGenerator),
    effects.call(watchUpdateGenerator),
    effects.call(watchFetchGenerator),
    effects.call(watchDeleteGenerator),
    effects.call(watchToggleFavoriteGenerator),
    effects.call(watchCloneGenerator),
    effects.call(watchCloneProject),
    effects.call(watchGetMockupsFromGit),
    effects.call(watchAddMockupsFromGit),
    effects.call(watchTestingFunction),
    // INJECT
  ]);
}
