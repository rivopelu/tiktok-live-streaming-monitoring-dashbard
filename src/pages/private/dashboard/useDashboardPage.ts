import { useAuth } from '../../../providers/UseAuth';

export function useDashboardPage() {
  const auth = useAuth();

  function onLogout() {
    auth.logOut();
  }

  return { onLogout };
}
