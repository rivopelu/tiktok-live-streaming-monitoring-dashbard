import { IRouteList } from './route-list.ts';
import { ROUTES } from './routes.ts';
import { SignInPage } from '../pages/public/auth/sign-in/SignInPage.tsx';
import { PAGE_TYPE_ENUM } from '../enums/page-type-enum.ts';
import { HomePage } from '../pages/public/home/HomePage.tsx';
import { SignUpPage } from '../pages/public/auth/sing-up/sign-up-page.tsx';

export const publicRoute: IRouteList[] = [
  {
    route: ROUTES.PUBLIC.SIGN_IN(),
    elements: SignInPage,
    type: PAGE_TYPE_ENUM.FULL_PAGE,
  },
  {
    route: ROUTES.PUBLIC.HOME(),
    elements: HomePage,
    type: PAGE_TYPE_ENUM.FULL_PAGE,
  },
  {
    route: ROUTES.PUBLIC.SIGN_UP(),
    elements: SignUpPage,
    type: PAGE_TYPE_ENUM.FULL_PAGE,
  },
];
