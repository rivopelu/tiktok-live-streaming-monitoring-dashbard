import { ROUTES } from './routes.ts';
import { ChatOverlayPage } from '../pages/overlay/ChatOverlayPage.tsx';
import { PAGE_TYPE_ENUM } from '../enums/page-type-enum.ts';
import { JoinOverlayPage } from '../pages/overlay/JoinOverlayPage.tsx';
import { FollowOverlayPage } from '../pages/overlay/FollowOverlayPage.tsx';
import { ViewerInfoOverlay } from '../components/overlay/ViewerInfoOverlay.tsx';
import { GiftOverlayPage } from '../pages/overlay/GiftOverlayPage.tsx';

export const overlayRoutes = [
  {
    route: ROUTES.OVERLAY.CHAT(':accountId'),
    elements: ChatOverlayPage,
    type: PAGE_TYPE_ENUM.FULL_PAGE,
  },
  {
    route: ROUTES.OVERLAY.JOIN(':accountId'),
    elements: JoinOverlayPage,
    type: PAGE_TYPE_ENUM.FULL_PAGE,
  },
  {
    route: ROUTES.OVERLAY.FOLLOW(':accountId'),
    elements: FollowOverlayPage,
    type: PAGE_TYPE_ENUM.FULL_PAGE,
  },
  {
    route: ROUTES.OVERLAY.VIEWER_INFO(':accountId'),
    elements: ViewerInfoOverlay,
    type: PAGE_TYPE_ENUM.FULL_PAGE,
  },
  {
    route: ROUTES.OVERLAY.GIFT(':accountId'),
    elements: GiftOverlayPage,
    type: PAGE_TYPE_ENUM.FULL_PAGE,
  },
];
