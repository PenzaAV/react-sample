import { createSelector } from 'reselect';

import { RootState } from '@setup/typedefs';
import { Project } from '@bus/projects/typedefs';

const projectsSelector = (state: RootState) => state.projects;

export const getIsProjectsFetching = createSelector(
  [projectsSelector],
  (result) => {
    return { isFetching: result.isFetching };
  },
);

export const getProjects = createSelector([projectsSelector], (result) => {
  return result.data as Project[];
});
export const getProject = (id: string) =>
  createSelector([projectsSelector], (result) => {
    return result.data.find((project) => {
      return project._id === id;
    });
  });
export const getProjectGenerators = (id: string) =>
  createSelector([getProject(id)], (result) => {
    return result?.generators;
  });

export const getGenerator = (id: string) =>
  createSelector([projectsSelector], (result) => {
    if (!id) return undefined;
    let indexOfGenerator = -1;
    const project = result?.data.find((project) => {
      const index = project.generators.findIndex(
        (generator) => generator._id === id,
      );
      if (index >= 0) {
        indexOfGenerator = index;

        return true;
      }

      return false;
    });

    return project?.generators?.[indexOfGenerator];
  });

export const getProjectGeneratorsMockups = (id: string) =>
  createSelector([getProject(id)], (result) => {
    return result?.mockups || [];
  });

export const getActiveTemplateId = createSelector(
  [projectsSelector],
  (result) => {
    return result.activeTemplateId;
  },
);

export const getActiveFormFieldId = createSelector(
  [projectsSelector],
  (result) => {
    return result.activeFormFieldId;
  },
);

export const getIsRunnedTesting = createSelector(
  [projectsSelector],
  (result) => {
    return result.isFetchingTestMicroservice;
  },
);
