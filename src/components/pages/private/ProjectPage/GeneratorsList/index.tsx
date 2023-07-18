import React, { FC } from 'react';

import { Box } from '@mui/material';

import { styles } from './styles';
import { ProjectGenerator } from '@bus/projects/typedefs';
import GeneratorCard from '@components/common/GeneratorCard';

type GeneratorsListProps = {
  generators: ProjectGenerator[];
};

export const GeneratorsList: FC<GeneratorsListProps> = ({ generators }) => {
  return (
    <Box sx={styles.generatorsList}>
      {generators.map((generator) => (
        <GeneratorCard key={generator._id} generator={generator} />
      ))}
    </Box>
  );
};

export default GeneratorsList;
