import { useAuth } from '../../../providers/UseAuth.tsx';
import { useAudio } from '../../../hooks/useAudio.ts';
import { TIKTOK_EVENT_ENUM } from '../../../enums/tiktok_event_enum.ts';
import { baseUrlClient } from '../../../hooks/useData.ts';
import { ROUTES } from '../../../routes/routes.ts';
import { toast } from 'react-toastify';
import { HttpService } from '../../../services/http.service.ts';
import ErrorService from '../../../services/error.service.ts';
import { ENDPOINT } from '../../../constants/endpoint.ts';

export function useOverlayGalleryPage() {
  const user = useAuth().user;

  const audio = useAudio();
  const httpService = new HttpService();
  const errorService = new ErrorService();
  function onClickTest(type: TIKTOK_EVENT_ENUM) {
    httpService
      .PATCH(ENDPOINT.TEST_OVERLAY(type))
      .then(() => {
        toast.info('Success!');
      })
      .catch((e) => {
        errorService.fetchApiError(e);
      });
  }

  function onClickCopyComment(type: TIKTOK_EVENT_ENUM) {
    switch (type) {
      case TIKTOK_EVENT_ENUM.COMMENT:
        audio.notif1();
        navigator.clipboard.writeText(baseUrlClient + ROUTES.OVERLAY.CHAT(user?.id || '')).then(() => {
          toast.info('Success Copy To Clipboard');
        });
        return;
      case TIKTOK_EVENT_ENUM.JOIN:
        audio.notif1();
        navigator.clipboard.writeText(baseUrlClient + ROUTES.OVERLAY.JOIN(user?.id || '')).then(() => {
          toast.info('Success Copy To Clipboard');
        });
        return;
    }
  }

  return { onClickCopyComment, onClickTest };
}
