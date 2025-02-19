import { useState } from 'react';
import { useSubscription } from 'react-stomp-hooks';
import { ENDPOINT } from '../../../constants/endpoint';
import { useAuth } from '../../../providers/UseAuth';
import ErrorService from '../../../services/error.service';
import { HttpService } from '../../../services/http.service';

export function useDashboardPage() {
  const auth = useAuth();
  const httpService = new HttpService();
  const errorService = new ErrorService();

  const [username] = useState<string>('siwareal2');
  const [loading, setLoading] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>('...');

  useSubscription('/topic/streaming-status/' + username, (message) => setStatusMessage(message.body));

  function onLogout() {
    auth.logOut();
  }

  function onStartStreaming() {
    httpService
      .POST(ENDPOINT.START_STREAMING(), { tiktok_username: username })
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
      .PUT(ENDPOINT.END_STREAMING(), { tiktok_username: username })
      .then(() => {
        setLoading(false);
      })
      .catch((e) => {
        errorService.fetchApiError(e);
        setLoading(false);
      });
  }

  return { onLogout, onStartStreaming, loading, onEndStreaming, statusMessage };
}
