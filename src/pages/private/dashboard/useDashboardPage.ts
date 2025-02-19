import { useState } from 'react';
import { ENDPOINT } from '../../../constants/endpoint';
import { useAuth } from '../../../providers/UseAuth';
import ErrorService from '../../../services/error.service';
import { HttpService } from '../../../services/http.service';

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
      .PATCH(ENDPOINT.START_STREAMING())
      .then(() => {
        setLoading(false);
      })
      .catch((e) => {
        errorService.fetchApiError(e);
        setLoading(false);
      });
  }

  function onEndStreaming() {
    httpService
      .PATCH(ENDPOINT.END_STREAMING())
      .then(() => {
        setLoading(false);
      })
      .catch((e) => {
        errorService.fetchApiError(e);
        setLoading(false);
      });
  }

  return { onLogout, onStartStreaming, loading, onEndStreaming };
}
