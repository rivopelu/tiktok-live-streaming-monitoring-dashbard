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
import { IResGetMe } from '../models/response/IResGetMe.ts';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const rawUser = localStorage.getItem(LOCAL_STORAGE_KEY.USER);
  const getToken = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
  const getUser = rawUser ? JSON.parse(rawUser) : undefined;
  const [token, setToken] = useState<string | undefined>(getToken || undefined);
  const [user, setUser] = useState<IResGetMe | undefined>(getUser || undefined);
  const navigate = useNavigate();
  const httpService = new HttpService();
  const errorService = new ErrorService();

  function loginAction(data: IReqSignIn, setLoading: (loading: boolean) => void) {
    httpService
      .POST(ENDPOINT.SIGN_IN(), data)
      .then((res: BaseResponse<IResSignIn>) => {
        setLoading(false);
        const resToken = res.data.response_data.access_token;
        const userData = res.data.response_data.account_data;
        setToken(resToken);
        setUser(userData);

        localStorage.setItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN, resToken);
        localStorage.setItem(LOCAL_STORAGE_KEY.USER, JSON.stringify(userData));
        navigate(ROUTES.PRIVATE.DASHBOARD());
      })
      .catch((e) => {
        setLoading(false);
        errorService.fetchApiError(e);
      });
  }

  const logOut = () => {
    setToken(undefined);
    setUser(undefined);
    localStorage.clear();
    navigate(ROUTES.PUBLIC.SIGN_IN());
  };

  return <AuthContext value={{ token, loginAction, logOut, user }}>{children}</AuthContext>;
};

export default AuthProvider;

export interface IAuthProviderProps {
  user?: IResGetMe;
  token?: string;
  loginAction: (data: IReqSignIn, setLoading: (data: boolean) => void) => void;
  logOut: () => void;
}
