import { useFormik } from 'formik';
import * as yup from 'yup';
import { IReqSignUp } from '../../../../models/request/IReqSignUp';
import { useState } from 'react';
import { HttpService } from '../../../../services/http.service.ts';
import ErrorService from '../../../../services/error.service.ts';
import { ENDPOINT } from '../../../../constants/endpoint.ts';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../routes/routes.ts';
export function useSignUpPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const httpService = new HttpService();
  const errorService = new ErrorService();
  const initValue: IReqSignUp = {
    confirmation_password: '',
    email: '',
    name: '',
    password: '',
    tiktok_username: '',
  };

  const validationScheme: yup.ObjectSchema<IReqSignUp> = yup.object().shape({
    name: yup.string().required('Nama wajib diisi').min(3, 'Nama minimal 3 karakter'),
    email: yup.string().email('Format email tidak valid').required('Email wajib diisi'),
    password: yup.string().min(6, 'Password minimal 6 karakter').required('Password wajib diisi'),
    confirmation_password: yup
      .string()
      .oneOf([yup.ref('password')], 'Konfirmasi password harus sama')
      .required('Konfirmasi password wajib diisi'),
    tiktok_username: yup.string().required('Username TikTok wajib diisi'),
  });

  const formik = useFormik({
    initialValues: initValue,
    validationSchema: validationScheme,
    onSubmit: (value) => {
      setLoading(true);
      httpService
        .POST(ENDPOINT.SIGN_UP(), value)
        .then(() => {
          toast.success('Signed up successfully');
          navigate(ROUTES.PUBLIC.SIGN_IN());
          setLoading(false);
        })
        .catch((e) => {
          errorService.fetchApiError(e);
          setLoading(false);
        });
    },
  });

  return { formik, setShowPassword, showPassword, loading };
}
