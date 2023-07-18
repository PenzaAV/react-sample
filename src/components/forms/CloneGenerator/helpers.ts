import { Project } from '@bus/projects/typedefs';
import { IOption } from '@setup/typedefs';

export const convertProjectsToIOptions = (projects: Project[]): IOption[] => {
  return (projects ?? []).map((proj) => ({
    id: proj._id,
    label: proj.name,
  })) as unknown as IOption[];
};
