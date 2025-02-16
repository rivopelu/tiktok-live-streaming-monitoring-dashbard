import { IRouteList } from './route-list.ts';
import { ROUTES } from './routes.ts';
import { PAGE_TYPE_ENUM } from '../enums/page-type-enum.ts';
import { DashboardPage } from '../pages/private/DashboardPage.tsx';

export const privateRoutes: IRouteList[] = [
  {
    route: ROUTES.PRIVATE.DASHBOARD(),
    elements: DashboardPage,
    type: PAGE_TYPE_ENUM.PRIMARY,
  },
];
