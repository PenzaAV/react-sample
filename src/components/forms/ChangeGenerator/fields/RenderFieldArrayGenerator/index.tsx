import React from 'react';
import { Field, FormRenderProps } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';
import { Button, Box, Typography } from '@mui/material';
import {
  indexFormByType,
  typeFormByIndex,
} from '@components/forms/ChangeGenerator/helpers';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { styles } from '@components/forms/ChangeGenerator/styles';
import GeneratorDragContainer from '@components/pages/private/AddGeneratorPage/GeneratorDragContainer';
import { CheckBoxInputContent } from './CheckBoxInputContent';
import { SettingsContent } from './SettingsContent';
import { DropdownContent } from './DropdownContent';
import { CustomDropdownContent } from './CustomDropdownContent';
import { ProjectGeneratorFormField } from '@bus/projects/typedefs';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveFormFieldId } from '@bus/projects/selectors';
import { projectsActions } from '@bus/projects/actions';

// RENDER_FIELDS

type RenderFieldArrayGeneratorProps = {
  formProps: FormRenderProps;
};

const grid = 8;

const getItemStyle = (isDragging: any, draggableStyle: any) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  margin: `0 0 ${grid}px 0`,

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = (isDraggingOver: any) => ({
  width: 'auto',
});

const makeOnDragEndFunction = (fields: any) => (result: any) => {
  // dropped outside the list
  if (!result.destination) {
    return;
  }
  fields.swap(result.source.index, result.destination.index);
};

export const RenderFieldArrayGenerator: React.FC<
  RenderFieldArrayGeneratorProps
> = ({ formProps }) => {
  const { push } = formProps.form.mutators;
  const dispatch = useDispatch();
  const activeFormFieldId = useSelector(getActiveFormFieldId);

  return (
    <Box>
      <FieldArray name="generators">
        {({ fields }) => (
          <DragDropContext onDragEnd={makeOnDragEndFunction(fields)}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}>
                  {fields.map((name, index) => (
                    <Draggable
                      key={fields.value?.[index]?.id}
                      draggableId={fields.value?.[index]?.id}
                      index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style,
                          )}>
                          <Field name={`${name}.type`}>
                            {(props) => (
                              <GeneratorDragContainer
                                onMouseEnter={() => {
                                  dispatch(
                                    projectsActions.activeFormFieldGenerator(
                                      fields.value?.[index]?.id,
                                    ),
                                  );
                                }}
                                openedContent={
                                  fields.value?.[index]?.id ===
                                  activeFormFieldId
                                }
                                provided={provided}
                                settingsContent={({ close }) => (
                                  <SettingsContent
                                    formProps={formProps}
                                    close={close}
                                    name={name}
                                    index={index}
                                  />
                                )}
                                onClose={
                                  (fields?.length ?? 0) > 1
                                    ? () => fields.remove(index)
                                    : undefined
                                }
                                header={
                                  <>
                                    <Typography>
                                      Module: {formProps.values?.name}
                                    </Typography>
                                    <Typography>Field: {index + 1}</Typography>
                                  </>
                                }
                                tabsElements={[
                                  {
                                    key: typeFormByIndex[0],
                                    title: 'сheckbox',
                                    content: (
                                      <CheckBoxInputContent
                                        name={name}
                                        mode={'checkbox'}
                                      />
                                    ),
                                  },
                                  {
                                    key: typeFormByIndex[1],
                                    title: 'dropdown',
                                    content: (
                                      <DropdownContent
                                        name={name}
                                        formProps={formProps}
                                        index={index}
                                      />
                                    ),
                                  },
                                  {
                                    key: typeFormByIndex[2],
                                    title: 'input',
                                    content: (
                                      <CheckBoxInputContent
                                        name={name}
                                        mode={'input'}
                                      />
                                    ),
                                  },
                                  {
                                    key: typeFormByIndex[3],
                                    title: 'custom',
                                    content: (
                                      <CustomDropdownContent name={name} />
                                    ),
                                  },
                                ]}
                                tabIndex={
                                  indexFormByType?.[props.input.value] ?? 0
                                }
                                setTabIndex={(index) => {
                                  props.input.onChange(
                                    typeFormByIndex?.[index],
                                  );
                                }}
                              />
                            )}
                          </Field>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </FieldArray>
      <Button
        data-testid={'change-generator-field-array-form_field_array-add-button'}
        sx={styles.addFormFieldButton}
        onClick={() =>
          push('generators', {
            id: Date.now().toString(),
            label: '',
            name: '',
            type: typeFormByIndex[0],
          } as ProjectGeneratorFormField)
        }>
        Add
      </Button>
    </Box>
  );
};
