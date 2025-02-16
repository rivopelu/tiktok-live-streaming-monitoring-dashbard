import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HttpService } from '../services/http.service.ts';
import { IReqSignIn } from '../models/request/IReqSignIn.ts';
import { ENDPOINT } from '../constants/endpoint.ts';
import { BaseResponse } from '../models/response/IResModel.ts';
import { IResSignIn } from '../models/response/IResSignIn.ts';
import { ROUTES } from '../routes/routes.ts';
import { LOCAL_STORAGE_KEY } from '../constants/local_storage_key.ts';
import { AuthContext } from './AuthContext.tsx';
import ErrorService from '../services/error.service.ts';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const getToken = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
  const [token, setToken] = useState<string | undefined>(getToken || undefined);
  const navigate = useNavigate();
  const httpService = new HttpService();
  const errorService = new ErrorService();

  function loginAction(data: IReqSignIn, setLoading: (loading: boolean) => void) {
    httpService
      .POST(ENDPOINT.SIGN_IN(), data)
      .then((res: BaseResponse<IResSignIn>) => {
        setLoading(false);
        const resToken = res.data.response_data.access_token;
        setToken(resToken);
        localStorage.setItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN, resToken);
        navigate(ROUTES.PRIVATE.DASHBOARD());
      })
      .catch((e) => {
        setLoading(false);
        errorService.fetchApiError(e);
      });
  }

  const logOut = () => {
    setToken(undefined);
    localStorage.removeItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
    navigate(ROUTES.PUBLIC.SIGN_IN());
  };

  return <AuthContext value={{ token, loginAction, logOut }}>{children}</AuthContext>;
};

export default AuthProvider;

export interface IAuthProviderProps {
  token?: string;
  loginAction: (data: IReqSignIn, setLoading: (data: boolean) => void) => void;
  logOut: () => void;
}
