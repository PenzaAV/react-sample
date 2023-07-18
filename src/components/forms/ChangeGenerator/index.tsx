import * as React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Field, FormRenderProps } from 'react-final-form';

import { Box, Button, Tab, Tabs, Typography } from '@mui/material';
import { RenderFieldArrayTemplates } from '@components/forms/ChangeGenerator/fields/RenderFieldArrayTemplates';
import { RenderFieldArrayGenerator } from '@components/forms/ChangeGenerator/fields/RenderFieldArrayGenerator';
import { RenderNameField } from '@components/forms/ChangeGenerator/fields/RenderNameField';
import { RenderDescriptionField } from '@components/forms/ChangeGenerator/fields/RenderDescriptionField';

// RENDER_FIELDS
import { schema } from './schema';
import { styles } from './styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{
        marginBottom: '8px',
      }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && children}
    </div>
  );
};

const ChangeGenerator = (props: FormRenderProps) => {
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <Box width={500} display={'flex'} flexDirection={'column'}>
      <Field name={`name`} component={RenderNameField} />
      <Field name={`description`} component={RenderDescriptionField} />
      <Tabs
        sx={styles.tags}
        value={tabIndex}
        onChange={(e, newValue) => setTabIndex(newValue)}>
        <Tab label="Form" value={0} />
        <Tab label="Templates" value={1} />
      </Tabs>
      <TabPanel value={tabIndex} index={0}>
        <RenderFieldArrayGenerator formProps={props} />
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <RenderFieldArrayTemplates formProps={props} />
      </TabPanel>
      {/*FIELDS*/}
    </Box>
  );
};

export default ChangeGenerator;

export { schema, ChangeGenerator };

/*
Paste to the component where you want to use the form

import { EvneFinalForm } from '@packages/evne-form';
import { schema, ChangeGenerator } from '@components/forms/ChangeGenerator';

<EvneFinalForm
  component={ChangeGenerator}
  schema={schema}
/>
* */
