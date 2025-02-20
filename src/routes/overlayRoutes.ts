import { ROUTES } from './routes.ts';
import { ChatOverlayPage } from '../pages/overlay/ChatOverlayPage.tsx';
import { PAGE_TYPE_ENUM } from '../enums/page-type-enum.ts';

export const overlayRoutes = [
  {
    route: ROUTES.OVERLAY.CHAT(':accountId'),
    elements: ChatOverlayPage,
    type: PAGE_TYPE_ENUM.FULL_PAGE,
  },
];
