// eslint-disable-next-line @typescript-eslint/no-unused-vars,prettier/prettier
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// eslint-disable-next-line prettier/prettier
import {
  ProjectsState,
  FillProjectsActionPayload,
  FillProjectActionPayload,
  FillGeneratorActionPayload,
  ChangeGeneratorActionPayload,
  FillNewGeneratorDataActionPayload,
  RemoveGeneratorActionPayload,
  RemoveProjectActionPayload,
  FillClonedActionPayload,
  ProjectGenerator,
  FillMockupsFromGitActionPayload,
  FillGeneratorsFromGitActionPayload,
  ActiveTemplatePayloadIdActionPayload,
} from './typedefs';

const initialState: ProjectsState = {
  isFetching: false,
  data: [],
  activeTemplateId: '',
  activeFormFieldId: '',
  isFetchingTestMicroservice: false,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    startFetching(state) {
      state.isFetching = true;
    },
    stopFetching(state) {
      state.isFetching = false;
    },
    fillProjects(state, action: PayloadAction<FillProjectsActionPayload>) {
      state.data = action.payload;
    },
    fillProject(state, action: PayloadAction<FillProjectActionPayload>) {
      const currentProjectIndex = state.data.findIndex(
        (proj) => proj._id === action.payload._id,
      );

      if (currentProjectIndex > -1) {
        state.data[currentProjectIndex] = action.payload;
      } else {
        state.data = [...state.data, action.payload];
      }
    },
    fillClonedProject(state, action: PayloadAction<FillClonedActionPayload>) {
      state.data = [...state.data, action.payload];
    },
    removeProject(state, action: PayloadAction<RemoveProjectActionPayload>) {
      const projectIndex = state.data.findIndex(
        (proj) => proj._id === action.payload,
      );

      state.data.splice(projectIndex, 1);
    },
    fillGenerator(state, action: PayloadAction<ProjectGenerator>) {
      const index = state.data.findIndex(
        (project) => project._id === action.payload.projectId,
      );
      const { generators } = state.data[index];
      state.data[index].generators = generators.map((project, index) => {
        return project._id === action.payload._id ? action.payload : project;
      });
    },
    changeGenerator(
      state,
      action: PayloadAction<ChangeGeneratorActionPayload>,
    ) {
      // modify state here
    },
    fillNewGeneratorData(
      state,
      action: PayloadAction<FillNewGeneratorDataActionPayload>,
    ) {
      const projectIndex = state.data.findIndex(
        (project) => project._id === action.payload?.projectId,
      );
      if (projectIndex > -1) {
        const project = state.data[projectIndex];
        const generatorIndex = project.generators.findIndex(
          (generator) => generator._id === action.payload._id,
        );
        if (generatorIndex > -1) {
          state.data[projectIndex].generators[generatorIndex] = action.payload;
        }
      }
    },
    removeGenerator(
      state,
      action: PayloadAction<RemoveGeneratorActionPayload>,
    ) {
      const projectIndex = state.data.findIndex(
        (proj) => proj._id === action.payload.projectId,
      );

      if (projectIndex > -1) {
        const generatorIndex = state.data[projectIndex].generators.findIndex(
          (gen) => gen._id === action.payload._id,
        );
        if (generatorIndex > -1)
          state.data[projectIndex].generators.splice(generatorIndex, 1);
      }
    },
    fillMockupsFromGit(
      state,
      action: PayloadAction<FillMockupsFromGitActionPayload>,
    ) {
      const index = state.data.findIndex(
        (project) => project._id === action.payload.projectId,
      );

      state.data[index].mockups = action.payload.data;
    },
    fillGeneratorsFromGit(
      state,
      action: PayloadAction<FillGeneratorsFromGitActionPayload>,
    ) {
      const index = state.data.findIndex(
        (project) => project._id === action.payload.projectId,
      );
      const { generators } = state.data[index];
      state.data[index].generators = [...generators, ...action.payload.data];
    },
    activeTemplateGenerator(
      state,
      action: PayloadAction<ActiveTemplatePayloadIdActionPayload>,
    ) {
      state.activeTemplateId = action.payload;
    },
    activeFormFieldGenerator(
      state,
      action: PayloadAction<ActiveTemplatePayloadIdActionPayload>,
    ) {
      state.activeFormFieldId = action.payload;
    },
    startTesting(state) {
      state.isFetchingTestMicroservice = true;
    },
    finishTesting(state) {
      state.isFetchingTestMicroservice = false;
    },
    // INJECT
  },
});

export default projectsSlice;
