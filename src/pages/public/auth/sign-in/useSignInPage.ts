import { useState } from 'react';
import { IReqSignIn } from '../../../../models/request/IReqSignIn.ts';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ObjectSchema } from 'yup';
import { t } from 'i18next';

import { useAuth } from '../../../../providers/UseAuth.tsx';

export function useSignInPage() {
  const auth = useAuth();

  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const initForm: IReqSignIn = {
    email: '',
    password: '',
    username: '',
  };

  const validationSchema: ObjectSchema<IReqSignIn> = yup.object().shape({
    email: yup
      .string()
      .required(t('validation.required', { name: t('email') }))
      .email(t('validation.invalid_email')),
    password: yup.string().required(t('validation.required', { name: t('password') })),
    username: yup.string(),
  });

  const formik = useFormik({
    initialValues: initForm,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      auth.loginAction({ ...values, username: 'rivo1' }, setLoading);
    },
  });

  return {
    showPassword,
    setShowPassword,
    formik,
    loading,
  };
}
