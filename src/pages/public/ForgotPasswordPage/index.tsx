import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Typography, useTheme } from '@mui/material';

import { authActions } from '@bus/auth/actions';
import ForgotPassword from '@components/forms/ForgotPassword';
import { schema } from '@components/forms/ForgotPassword/schema';
import { EvneFinalForm } from '@packages/evne-form';
import { book } from '@routes/book';

const ForgotPasswordPage = () => {
  const theme = useTheme();

  return (
    <>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Typography variant={'title'}>Forgot Password</Typography>
        <Box mt={5}>
          <EvneFinalForm
            component={ForgotPassword}
            sagaAction={authActions.forgotPassword}
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

export default ForgotPasswordPage;
