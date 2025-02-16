import { PAGE_TYPE_ENUM } from '../enums/page-type-enum.ts';
import { JSX } from 'react';
import { publicRoute } from './public-route.ts';
import { privateRoutes } from './private-routes.ts';

export interface IRouteList {
  elements: () => JSX.Element;
  route: string;
  type: PAGE_TYPE_ENUM;
}

interface IMainRoute extends IRouteList {
  isPrivate: boolean;
}

export const routeList: IMainRoute[] = [
  ...publicRoute.map((item) => {
    return { ...item, isPrivate: false };
  }),
  ...privateRoutes.map((item) => {
    return { ...item, isPrivate: true };
  }),
];
