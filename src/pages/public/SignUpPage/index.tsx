import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Typography, useTheme, Link } from '@mui/material';

import { authActions } from '@bus/auth/actions';
import SignUp from '@components/forms/SignUp';
import { schema } from '@components/forms/SignUp/schema';
import { EvneFinalForm } from '@packages/evne-form';
import { book } from '@routes/book';

const SignUpPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const onSubmitSuccess = () => {
    navigate(book.signIn);
  };

  return (
    <>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Typography variant={'h1'}>Create your account</Typography>
        <Typography variant={'h5'}>
          Everything will start after you Sign In
        </Typography>
        <Box mt={5}>
          <EvneFinalForm
            component={SignUp}
            onSubmitSuccess={onSubmitSuccess}
            sagaAction={authActions.signUp}
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
        <Typography mb={1} variant={'h5'}>
          Already have an account?
        </Typography>
        <Link href={book.signIn}>Sign in</Link>
      </Box>
    </>
  );
};

export default SignUpPage;
