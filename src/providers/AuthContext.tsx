import { createContext } from 'react';
import { IAuthProviderProps } from './AuthProviders.tsx';

export const AuthContext = createContext<IAuthProviderProps>({
  loginAction: () => {},
  token: undefined,
  logOut: () => {},
});
