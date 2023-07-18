import React from 'react';

import { Interpolation, TypographyProps } from '@mui/material';
import { Theme } from '@mui/material/styles';

export const typographyVariants:
  | {
      props: Partial<TypographyProps<'span', {}>>;
      style: Interpolation<{ theme: Theme }>;
    }[]
  | undefined = [
  {
    props: {
      variant: 'h1',
    },
    style: {
      fontFamily: 'SF Pro Text',
      fontWeight: 700,
      fontSize: '22px',
      lineHeight: '27px',
      letterSpacing: '0px',
    },
  },
  {
    props: {
      variant: 'h2',
    },
    style: {
      fontFamily: 'SF Pro Text',
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: '22px',
      letterSpacing: '0px',
    },
  },
  {
    props: {
      variant: 'h3',
    },
    style: {
      fontFamily: 'SF Pro Text',
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '20px',
      letterSpacing: '0px',
    },
  },
  {
    props: {
      variant: 'h4',
    },
    style: {
      fontFamily: 'SF Pro Text',
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '20px',
      letterSpacing: '0px',
    },
  },
  {
    props: {
      variant: 'h5',
    },
    style: {
      fontFamily: 'SF Pro Text',
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '20px',
      letterSpacing: '0px',
    },
  },
  {
    props: {
      variant: 'h6',
    },
    style: {
      fontFamily: 'SF Pro Text',
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '20px',
      letterSpacing: '0px',
    },
  },
  {
    props: {
      variant: 'body1',
    },
    style: {
      fontFamily: 'SF Pro Text',
      fontWeight: 500,
      fontSize: '13px',
      lineHeight: '16px',
      letterSpacing: '0px',
    },
  },
  {
    props: {
      variant: 'body2',
    },
    style: {
      fontFamily: 'SF Pro Text',
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '15px',
      letterSpacing: '0px',
    },
  },
  {
    props: {
      variant: 'overline',
    },
    style: {
      fontFamily: 'SF Pro Text',
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '15px',
      letterSpacing: '0px',
    },
  },
  {
    props: {
      variant: 'caption',
    },
    style: {
      fontFamily: 'SF Pro Text',
      fontWeight: 500,
      fontSize: '13px',
      lineHeight: '16px',
      letterSpacing: '0px',
    },
  },
  {
    props: {
      variant: 'button',
    },
    style: {
      fontFamily: 'SF Pro Text',
      fontWeight: 500,
      fontSize: '13px',
      lineHeight: '16px',
      letterSpacing: '0px',
    },
  },
  {
    props: {
      variant: 'subtitle1',
    },
    style: {
      fontFamily: 'SF Pro Text',
      fontWeight: 700,
      fontSize: '13px',
      lineHeight: '16px',
      letterSpacing: '0px',
    },
  },
  {
    props: {
      variant: 'subtitle2',
    },
    style: {
      fontFamily: 'SF Pro Text',
      fontWeight: 700,
      fontSize: '12px',
      lineHeight: '15px',
      letterSpacing: '0px',
    },
  },
  {
    props: {
      variant: 'caption',
    },
    style: {
      fontFamily: 'SF Pro Text',
      fontWeight: 500,
      fontSize: '11px',
      lineHeight: '14px',
      letterSpacing: '0px',
    },
  },
  {
    props: {
      variant: 'title',
    },
    style: {
      fontFamily: 'JetBrains Mono',
      fontWeight: 500,
      fontSize: '13px',
      lineHeight: '20px',
      letterSpacing: '0px',
    },
  },
];

// types
declare module '@mui/material/Typography' {
  export interface TypographyPropsVariantOverrides {
    title: true;
  }
}

declare module '@mui/material/styles' {
  export interface TypographyVariantsOptions {
    title?: React.CSSProperties;
  }
}
