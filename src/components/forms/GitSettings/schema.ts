import * as yup from 'yup';

export const schema = yup.object().shape({
  domainUrl: yup.string(),
  projectId: yup.number().typeError('Must be a number value'),
  accessToken: yup.string(),
  // INJECT
});
