import { useState } from 'react';
import { useAuth } from '../../../providers/UseAuth';
import ErrorService from '../../../services/error.service';
import { HttpService } from '../../../services/http.service';
import { ENDPOINT } from '../../../constants/endpoint';

export function useDashboardPage() {
  const auth = useAuth();
  const httpService = new HttpService();
  const errorService = new ErrorService();

  const [loading, setLoading] = useState<boolean>(false);

  function onLogout() {
    auth.logOut();
  }

  function onStartStreaming() {
    httpService
      .POST(ENDPOINT.START_STREAMING(), { tiktok_username: 'prysngrchrd_' })
      .then(() => {
        setLoading(false);
        alert('OKE');
      })
      .catch((e) => {
        errorService.fetchApiError(e);
        setLoading(false);
      });
  }

  return { onLogout, onStartStreaming, loading };
}
