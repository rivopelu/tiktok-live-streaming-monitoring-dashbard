import { IListSidebar } from '../models/data/IListSidebar.ts';
import { MdDashboard, MdMonitor, MdOutlineVideoLibrary } from 'react-icons/md';
import { ROUTES } from '../routes/routes.ts';
import { t } from 'i18next';

export function useData() {
  const listSidebar: IListSidebar[] = [
    {
      label: t('dashboard'),
      icon: MdDashboard,
      route: ROUTES.PRIVATE.DASHBOARD(),
    },
    {
      label: t('Live Monitor'),
      icon: MdMonitor,
      route: ROUTES.PRIVATE.MONITORING(),
    },
    {
      label: t('overlay_gallery'),
      icon: MdOutlineVideoLibrary,
      route: ROUTES.PRIVATE.OVERLAY_GALLERY(),
    },
  ];

  return {
    listSidebar,
  };
}

export const baseUrlClient = window.location.origin;
