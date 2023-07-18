import {
  ProjectGeneratorFormField,
  ProjectGeneratorTemplate,
} from '@bus/projects/typedefs';
import { SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { IOption } from '@setup/typedefs';

export const optionsOfFormat: IOption[] = [
  {
    id: 1,
    label: 'Only files',
  },
  {
    id: 2,
    label: 'Only folders',
  },
  {
    id: 3,
    label: 'Folders and files',
  },
  {
    id: 4,
    label: 'File content',
  },
];

export const optionsOfConditions: IOption[] = [
  {
    id: 1,
    label: 'eq',
  },
  {
    id: 2,
    label: 'not eq',
  },
];
export interface IStyles {
  [key: string]: SxProps<Theme>;
}

export const getHeigthOfEditor = (item: ProjectGeneratorTemplate) => {
  return item?.type === 'sh' ? '100px' : '400px';
};

export const getLanguageEditor = (item: ProjectGeneratorTemplate) => {
  return item?.type === 'sh' ? 'Powershell' : 'typescript';
};

export const showDropdownFields = (item: ProjectGeneratorFormField) => {
  return item?.type && (JSON.parse(item.type) as IOption)?.label === 'Dropdown';
};

export const showFileContent = (item: ProjectGeneratorFormField) => {
  return (item?.format as unknown as IOption)?.label === 'File content';
};

export const showDropdownFunction = (item: ProjectGeneratorFormField) => {
  return (item?.format as unknown as IOption)?.label === 'File content';
};

export const showOnModifyFunction = (item: ProjectGeneratorTemplate) => {
  return item?.type === 'Modify';
};

export const showCustomDropdownFields = (item: ProjectGeneratorFormField) => {
  return (
    item?.type &&
    (JSON.parse(item.type) as IOption)?.label === 'Custom dropdown'
  );
};

export const showFieldsDependsOn = (item: ProjectGeneratorTemplate) => {
  return item?.depends_on_form_field;
};

export const getItemsForDepentsOn = (
  items: ProjectGeneratorFormField[],
  index?: number,
): IOption[] => {
  return (
    items
      ?.filter((el1, i) => (index !== undefined ? i !== index : true))
      ?.map((el2, j) => ({
        id: j,
        label: el2?.name,
      })) ?? []
  );
};

export const indexTemplateByType: Record<string, number> = {
  add: 0,
  modify: 1,
  sh: 2,
};

export const typeTemplateByIndex: string[] = ['add', 'modify', 'sh'];

export const indexFormByType: Record<string, number> = {
  checkbox: 0,
  dropdown: 1,
  input: 2,
  custom: 3,
};

export const typeFormByIndex: string[] = [
  'checkbox',
  'dropdown',
  'input',
  'custom',
];
