import React from 'react';
import { Field, FormRenderProps } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';
import { Button, Box, Typography } from '@mui/material';
import {
  typeTemplateByIndex,
  indexTemplateByType,
} from '@components/forms/ChangeGenerator/helpers';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { AddModifyContent } from './AddModifyContent';
import GeneratorDragContainer from '@components/pages/private/AddGeneratorPage/GeneratorDragContainer';
import { ShellContent } from './ShellContent';
import { SettingsContent } from './SettingsContent';
import { useDispatch, useSelector } from 'react-redux';
import { projectsActions } from '@bus/projects/actions';
import { getActiveTemplateId } from '@bus/projects/selectors';
import { ProjectGeneratorTemplate } from '@bus/projects/typedefs';
// RENDER_FIELDS

type RenderFieldArrayTemplatesProps = {
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

export const RenderFieldArrayTemplates: React.FC<
  RenderFieldArrayTemplatesProps
> = ({ formProps }) => {
  const { push } = formProps.form.mutators;
  const dispatch = useDispatch();
  const activeTemplateId = useSelector(getActiveTemplateId);

  return (
    <Box>
      <FieldArray name="templates">
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
                                    projectsActions.activeTemplateGenerator(
                                      fields.value?.[index]?.id,
                                    ),
                                  );
                                }}
                                openedContent={
                                  fields.value?.[index]?.id === activeTemplateId
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
                                    <Typography>
                                      Template: {index + 1}
                                    </Typography>
                                  </>
                                }
                                tabsElements={[
                                  {
                                    key: typeTemplateByIndex[0],
                                    title: 'add',
                                    content: (
                                      <AddModifyContent
                                        mode="add"
                                        name={name}
                                        formProps={formProps}
                                        index={index}
                                      />
                                    ),
                                  },
                                  {
                                    key: typeTemplateByIndex[1],
                                    title: 'modify',
                                    content: (
                                      <AddModifyContent
                                        mode="modify"
                                        name={name}
                                        formProps={formProps}
                                        index={index}
                                      />
                                    ),
                                  },
                                  {
                                    key: typeTemplateByIndex[2],
                                    title: 'sh',
                                    content: (
                                      <ShellContent
                                        name={name}
                                        formProps={formProps}
                                        index={index}
                                      />
                                    ),
                                  },
                                ]}
                                tabIndex={
                                  indexTemplateByType?.[props.input.value] ?? 0
                                }
                                setTabIndex={(index) => {
                                  props.input.onChange(
                                    typeTemplateByIndex?.[index] ?? 0,
                                  );
                                }}
                              />
                            )}
                          </Field>
                          {/*FIELDS*/}
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
        data-testid={
          'change-generator-field-array-template_field_array-add-button'
        }
        onClick={() =>
          push('templates', {
            path: 'bus',
            template: '// comment',
            type: typeTemplateByIndex[0],
            id: Date.now().toString(),
          } as ProjectGeneratorTemplate)
        }>
        Add
      </Button>
    </Box>
  );
};
