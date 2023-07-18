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

export const getLightComponents = (): any => {
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
  };
};
