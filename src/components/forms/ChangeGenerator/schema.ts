import * as yup from 'yup';

export const schema = yup.object().shape({
  generators: yup.array().of(
    yup.object().shape({
      name: yup.string().required('Name is required'),
      type: yup.string().required('Type is required'),
      // INJECT_ARRAY_RENDER_FIELD_ARRAY_GENERATOR
    }),
  ),
  templates: yup.array().of(
    yup.object().shape({
      path: yup.string().required('Path is required'),
      type: yup.string().required('Type is required'),
      template: yup.string().required('Template is required'),
      // INJECT_ARRAY_RENDER_FIELD_ARRAY_TEMPLATES
    }),
  ),
  name: yup.string().required('Name is a required field'),
  description: yup.string().required('Description is a required field'),
  // INJECT
});
