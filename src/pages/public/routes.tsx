/* eslint-disable prettier/prettier */
import layouts from '@layouts/index';
import { commonRoutes } from '@pages/common/routes';
import { book } from '@routes/book';
import { AppRoute } from '@setup/typedefs';
import React, { lazy } from 'react';

const ConfirmEmailPage = lazy(()=> import('@pages/public/ConfirmEmailPage'));
const ForgotPasswordPage = lazy(()=> import('@pages/public/ForgotPasswordPage'));
const ResetPasswordPage = lazy(()=> import('@pages/public/ResetPasswordPage'));
const SignInPage = lazy(()=> import('@pages/public/SignInPage'));
const SignUpPage = lazy(()=> import('@pages/public/SignUpPage'));
const ThankYouPage = lazy(()=> import('@pages/public/ThankYouPage'));

// IMPORTS
export const publicRoutes: AppRoute<any>[] = [
  ...[
    {
      path: `${book.signIn}`,
      Component: <SignInPage />,
      Layout: layouts.AuthLayout,
      layoutProps: {},
    },
    {
      path: `${book.signUp}`,
      Component: <SignUpPage />,
      Layout: layouts.AuthLayout,
      layoutProps: {},
    },
    {
      path: book.forgotPassword,
      Component: <ForgotPasswordPage />,
      Layout: layouts.AuthLayout,
      layoutProps: {},
    },
    {
      path: `${book.resetPassword}/:user_id/:reset_token`,
      Component: <ResetPasswordPage />,
      Layout: layouts.AuthLayout,
      layoutProps: {},
    },
    {
      path: `${book.confirmEmail}/:user_id/:activation_token`,
      Component: <ConfirmEmailPage />,
      Layout: layouts.AuthLayout,
      layoutProps: {},
    },
    {
      path: book.thankYou,
      Component: <ThankYouPage />,
      Layout: layouts.AuthLayout,
      layoutProps: {},
    },
    // INJECT
  ],
  ...commonRoutes,
];
