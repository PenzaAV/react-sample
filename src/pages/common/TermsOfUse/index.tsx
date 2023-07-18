import React from 'react';

import { Box, Typography } from '@mui/material';

import { styles } from './styles';

export const TermsOfUse: React.FC = () => {
  return (
    <Box sx={styles.root}>
      <Box display={'flex'} alignItems={'center'}>
        <Typography variant={'title'}>Terms Of Use</Typography>
      </Box>
    </Box>
  );
};

export default TermsOfUse;
