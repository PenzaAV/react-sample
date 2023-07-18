import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().email().required('Email is a required field'),
  password: yup.string().required('Password is a required field'),
  repeat_password: yup.string().required('Repeat Password is a required field'),
  // INJECT
});
