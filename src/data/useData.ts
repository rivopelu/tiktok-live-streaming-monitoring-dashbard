import { IListSidebar } from '../models/data/IListSidebar.ts';
import { MdDashboard, MdMonitor } from 'react-icons/md';
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
  ];

  return {
    listSidebar,
  };
}
