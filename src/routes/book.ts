import { commonBook } from '@pages/common/book';
import { privateBook } from '@pages/private/book';
import { publicBook } from '@pages/public/book';

export const book = {
  ...commonBook,
  ...privateBook,
  ...publicBook,
};
