import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { authActions } from '@bus/auth/actions';
import { book } from '@routes/book';

const ConfirmEmailPage = () => {
  const dispatch = useDispatch();
  const { user_id, activation_token } = useParams();
  const navigate = useNavigate();

  const activate = (user_id: number, activation_token: string) => {
    return new Promise((resolve, reject) => {
      dispatch(
        authActions.confirmEmail({
          values: { user_id, activation_token },
          resolve,
          reject,
        }),
      );
    })
      .then(() => {
        localStorage.setItem('snackbar_message', 'Your email is verified');
        navigate(book.signIn);
      })
      .catch((error) => {
        return error;
      });
  };

  useEffect(() => {
    activation_token && user_id && activate(+user_id, activation_token);
  }, [user_id, activation_token]);

  return <></>;
};

export default ConfirmEmailPage;
