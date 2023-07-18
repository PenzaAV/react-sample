import React, { useEffect } from 'react';

import { Box, Typography } from '@mui/material';

import { styles } from './styles';
import { EvneFinalForm } from '@packages/evne-form';
import { schema, GitSettings } from '@components/forms/GitSettings';
import { profileActions } from '@bus/profile/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getGitSettings } from '@bus/profile/selectors';

const SettingsPage: React.FC = () => {
  const dispatch = useDispatch();
  const gitSettings = useSelector(getGitSettings);

  useEffect(() => {
    dispatch(profileActions.getGitSettings());
  }, []);

  const onSubmitSuccess = () => {
    dispatch(profileActions.getGitSettings());
  };

  return (
    <Box sx={styles.root}>
      <Typography variant={'h5'}>Settings</Typography>

      <Box m={2}>
        {gitSettings && (
          <EvneFinalForm
            component={GitSettings}
            sagaAction={profileActions.setGitSettings}
            schema={schema}
            initialValues={gitSettings ?? undefined}
            onSuccessMessage={'Saved'}
            onSubmitSuccess={onSubmitSuccess}
          />
        )}
      </Box>
    </Box>
  );
};

export default SettingsPage;
