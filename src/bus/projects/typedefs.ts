import { IOption } from '@setup/typedefs';

//state type____________________________________
export type ProjectsState = {
  isFetching: boolean;
  data: Project[];
  activeTemplateId: string;
  activeFormFieldId: string;
  isFetchingTestMicroservice: boolean;
};

//payload types_________________________________
export type ActiveTemplateGeneratorPayload = string;
export type ActiveTemplatePayloadIdActionPayload = string;
export type ActiveFormFieldGeneratorPayload = string;
export type ActiveFormFieldPayloadIdActionPayload = string;
export type FillProjectsActionPayload = Project[];
export type FetchProjectsActionPayload = unknown;
export type CreateProjectActionPayload = unknown;
export type FillProjectActionPayload = Project;
export type FillClonedActionPayload = Project;
export type RemoveProjectActionPayload = string;
export type FetchProjectActionPayload = string;
export type DeleteProjectActionPayload = string;
export type AddGeneratorActionPayload = {
  name: string;
  projectId: string;
  description: string;
  generators?: ProjectGeneratorFormField[];
  templates?: ProjectGeneratorTemplate[];
};
export type FillGeneratorActionPayload = unknown;
export type UpdateGeneratorActionPayload = {
  id: string;
  name: string;
  description: string;
  generators?: ProjectGeneratorFormField[];
  templates?: ProjectGeneratorTemplate[];
};

export type ChangeGeneratorActionPayload = unknown;
export type FetchGeneratorActionPayload = unknown;
export type FillNewGeneratorDataActionPayload = ProjectGenerator;
export type DeleteGeneratorActionPayload = ProjectGenerator;
export type RemoveGeneratorActionPayload = ProjectGenerator;
export type ToggleFavoriteGeneratorActionPayload = unknown;
export type CloneGeneratorActionPayload = {
  generatorId: string;
  project: IOption;
  generator_name: string;
};
export type CloneProjectActionPayload = {
  projectId: string;
  name: string;
};
export type TestingFunctionActionPayload = {
  functionCode: string;
  fileContent: string;
  language: string;
  expectedValues?: string;
};
export type TestingFunctionResponse = {
  expected_value_status: boolean;
  results: string[];
};
export type GetMockupsFromGitActionPayload = string;
export type FillMockupsFromGitActionPayload = {
  projectId: string;
  data: NodeFromGit[];
};
export type AddMockupsFromGitActionPayload = {
  projectId: string;
  data: GitNodeForApi[];
};
export type FillGeneratorsFromGitActionPayload = {
  projectId: string;
  data: ProjectGenerator[];
};
// INJECT

//common types__________________________________
export type Project = {
  _id: string;
  name: string;
  userId: string;
  generators: ProjectGenerator[];
  mockups: NodeFromGit[];
};

export type ProjectGenerator = {
  _id: string;
  name: string;
  description: string;
  projectId: string;
  userId: string;
  templates: ProjectGeneratorTemplate[];
  form: {
    fields: ProjectGeneratorFormField[];
  };
  isFavorite: boolean;
};

export type ISettingsPopupFields = {
  depends_on_form_field?: boolean;
  depends_on_field?: IOption;
  condition?: string;
  condition_field_value?: string;
};

export type ProjectGeneratorFormField = ISettingsPopupFields & {
  id: string;
  name: string;
  type: string;
  label: string;
  path?: string;
  format?: IOption;
  filter?: string;
  function?: string;
  is_required?: boolean;
};

export type ProjectGeneratorTemplate = ISettingsPopupFields & {
  id: string;
  template: string;
  type: string;
  path: string;
  relative?: boolean;
  anchor?: string;
  open_in_editor?: boolean;
};

export type CreateGeneratorType = {
  name?: string;
  projectId?: string;
  description?: string;
  form: {
    fields: ProjectGeneratorFormField[];
  };
  templates: ProjectGeneratorTemplate[];
};

export type NodeFromGit = {
  id: string;
  name: string;
  type: 'blob' | 'tree';
  path: string;
  mode: string;
};

export type GitNodeForApi = {
  path: string;
  folder: string;
};
