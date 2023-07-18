import { FinalFormTypes } from '@packages/evne-form';

const prepareActions = {
  movePromiseToMeta: ({
    values,
    resolve,
    reject,
  }: FinalFormTypes.OnFormSubmitPayload) => {
    return {
      payload: values,
      meta: {
        resolve,
        reject,
      },
    };
  },
};

export default prepareActions;
