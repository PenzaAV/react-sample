import * as yup from 'yup';

export const schema = yup.object().shape({
  project: yup.object().shape({
    id: yup.string().required('Project is a required field'),
  }),
  generator_name: yup.string().required('Generator Name is a required field'),
  // INJECT
});
