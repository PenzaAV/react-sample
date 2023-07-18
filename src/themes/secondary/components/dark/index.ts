import { MuiButton } from './MuiButtonBase';
import { MuiSvgIcon } from './MuiSVGIcon';
import { MuiTypography } from './MuiTypography';
import { MuiCheckbox } from './MuiCheckbox';
import { MuiOutlinedInput } from './MuiOutlinedInput';
import { MuiInputLabel } from './MuiInputLabel';
import { MuiRadio } from './MuiRadio';
import { MuiTab } from './MuiTab';
import { MuiTabs } from './MuiTabs';
import { MuiToolbar } from './MuiToolbar';
import { MuiBox } from './MuiBox';
import { MuiFormControlLabel } from './MuiFormControlLabel';
import { MuiPaper } from './MuiPaper';
import { MuiDialog } from './MuiDialog';

export const getDarkComponents = (): any => {
  return {
    ...MuiButton,
    ...MuiSvgIcon,
    ...MuiTypography,
    ...MuiCheckbox,
    ...MuiOutlinedInput,
    ...MuiInputLabel,
    ...MuiRadio,
    ...MuiTab,
    ...MuiTabs,
    ...MuiToolbar,
    ...MuiBox,
    ...MuiFormControlLabel,
    ...MuiPaper,
    ...MuiDialog,
  };
};
