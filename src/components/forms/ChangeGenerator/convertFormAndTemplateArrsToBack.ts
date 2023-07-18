import { typeFormByIndex, typeTemplateByIndex } from './helpers';
import {
  ProjectGenerator,
  ProjectGeneratorFormField,
  ProjectGeneratorTemplate,
} from '@bus/projects/typedefs';

export const getInitialValueForGeneratorEditor = (
  generator?: ProjectGenerator,
): {
  generators: ProjectGeneratorFormField[];
  templates: ProjectGeneratorTemplate[];
  name?: string;
  description?: string;
} => {
  const templates: ProjectGeneratorTemplate[] = generator?.templates ?? [];

  if (!templates.length) {
    templates.push({
      template: '// comment',
      type: typeTemplateByIndex[0],
      path: 'bus',
      id: Date.now().toString(),
    });
  }

  const generators: ProjectGeneratorFormField[] = generator?.form?.fields ?? [];

  if (!generators.length) {
    generators.push({
      id: Date.now().toString(),
      name: '',
      type: typeFormByIndex[0],
      label: '',
    });
  }

  return {
    templates,
    generators,
    name: generator?.name,
    description: generator?.description,
  };
};
