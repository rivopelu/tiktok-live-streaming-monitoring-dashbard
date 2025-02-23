import { ROUTES } from './routes.ts';
import { PAGE_TYPE_ENUM } from '../enums/page-type-enum.ts';
import { DashboardPage } from '../pages/private/dashboard/DashboardPage.tsx';
import { MonitoringPage } from '../pages/private/monitoring/MonitoringPage.tsx';
import { OverlayGalleryPage } from '../pages/private/overlay-galery/OverlayGalleryPage.tsx';
import { IRouteList } from '../models/data/IRouteList.ts';
import { overlayRoutes } from './overlayRoutes.ts';
import { HomePage } from '../pages/public/home/HomePage.tsx';
import { LiveHistoryPage } from '../pages/private/history/LiveHistoryPage.tsx';
import { DetailStreamingRoomPage } from '../pages/private/history/DetailStreamingRoomPage.tsx';

export const privateRoutes: IRouteList[] = [
  ...overlayRoutes,

  {
    route: ROUTES.PRIVATE.DASHBOARD(),
    elements: DashboardPage,
    type: PAGE_TYPE_ENUM.PRIMARY,
  },
  {
    route: ROUTES.PRIVATE.MONITORING(),
    elements: MonitoringPage,
    type: PAGE_TYPE_ENUM.PRIMARY,
  },
  {
    route: ROUTES.PRIVATE.OVERLAY_GALLERY(),
    elements: OverlayGalleryPage,
    type: PAGE_TYPE_ENUM.PRIMARY,
  },
  {
    route: ROUTES.PUBLIC.HOME(),
    elements: HomePage,
    type: PAGE_TYPE_ENUM.FULL_PAGE,
  },
  {
    route: ROUTES.PRIVATE.HISTORY(),
    elements: LiveHistoryPage,
    type: PAGE_TYPE_ENUM.PRIMARY,
  },
  {
    route: ROUTES.PRIVATE.DETAIL_STREAMING_ROOM(':id'),
    elements: DetailStreamingRoomPage,
    type: PAGE_TYPE_ENUM.PRIMARY,
  },
];
