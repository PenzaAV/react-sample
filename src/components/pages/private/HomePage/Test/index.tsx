import React, { FC } from 'react';

import { Box } from '@mui/material';

import { styles } from './styles';

type TestProps = {};

export const Test: FC<TestProps> = () => {
  return <Box sx={styles.test}>Test</Box>;
};

export default Test;
