import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { book } from '@routes/book';

const ThankYouPage = () => {
  return (
    <>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Typography variant={'title'} textAlign={'center'} zIndex={1}>
          First you need <br /> <Link to={book.signUp}>Sign Up</Link>
        </Typography>
      </Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        mt={4}
        mb={10}>
        <Typography mb={1} variant={'h5'} color={`grey.120`}>
          Already have an account?
        </Typography>
        <Link to={book.signIn}>Sign In</Link>
      </Box>
    </>
  );
};

export default ThankYouPage;
