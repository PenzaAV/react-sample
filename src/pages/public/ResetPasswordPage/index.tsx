import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Box, Typography, useTheme } from '@mui/material';

import { authActions } from '@bus/auth/actions';
import { ResetPasswordPayload } from '@bus/auth/typedefs';
import ResetPassword from '@components/forms/ResetPassword';
import { schema } from '@components/forms/ResetPassword/schema';
import { EvneFinalForm } from '@packages/evne-form';
import { book } from '@routes/book';

const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const { user_id, reset_token } = useParams();
  const theme = useTheme();
  const navigate = useNavigate();

  const onSubmit = (values: Partial<ResetPasswordPayload>) => {
    return new Promise((resolve, reject) => {
      user_id &&
        reset_token &&
        dispatch(
          authActions.resetPassword({
            values: { values, params: { user_id, reset_token } },
            resolve,
            reject,
          }),
        );
    })
      .then(() => {
        navigate(book.signIn);
      })
      .catch((errors) => {
        return errors;
      });
  };

  return (
    <>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Typography variant={'title'}>Reset Password</Typography>
        <Typography mt={1.5} variant={'h5'} color={theme.palette.grey['50']}>
          Email
        </Typography>
        <Typography variant={'h5'}>longNameForEmail@email.com</Typography>
        <Box mt={4}>
          <EvneFinalForm
            component={ResetPassword}
            onSubmit={onSubmit}
            schema={schema}
          />
        </Box>
      </Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        mt={4}
        mb={10}>
        <Typography mb={1} variant={'h6'} color={theme.palette.grey['50']}>
          Don`t have an account?
        </Typography>
        <Link to={book.signUp}>Sign Up</Link>
      </Box>
    </>
  );
};

export default ResetPasswordPage;
