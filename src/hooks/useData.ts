import { IListSidebar } from '../models/data/IListSidebar.ts';
import { MdDashboard, MdHistory, MdLogout, MdMonitor, MdOutlineVideoLibrary, MdPerson } from 'react-icons/md';
import { ROUTES } from '../routes/routes.ts';
import { t } from 'i18next';
import { useAuth } from '../providers/UseAuth.tsx';

export function useData() {
  const auth = useAuth();

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
    {
      label: t('history'),
      icon: MdHistory,
      route: ROUTES.PRIVATE.HISTORY(),
    },
  ];

  const profileMenuList = [
    {
      label: t('profile'),
      icon: MdPerson,
      onClick: () => {
        alert('OKE');
      },
    },
    {
      label: t('logout'),
      icon: MdLogout,
      onClick: () => {
        auth.logOut();
      },
    },
  ];

  return {
    listSidebar,
    profileMenuList,
  };
}

export const baseUrlClient = window.location.origin;
