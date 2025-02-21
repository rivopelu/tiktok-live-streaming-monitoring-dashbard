import { Card, CardBody } from '../atoms/Card.tsx';
import { t } from 'i18next';
import { Button } from '../atoms/Button.tsx';
import { TIKTOK_EVENT_ENUM } from '../../enums/tiktok_event_enum.ts';
import { Divider } from '../atoms/Divider.tsx';
import { ChatOverlay } from '../overlay/ChatOverlay.tsx';
import { useAuth } from '../../providers/UseAuth.tsx';
import { HttpService } from '../../services/http.service.ts';
import ErrorService from '../../services/error.service.ts';
import { ENDPOINT } from '../../constants/endpoint.ts';
import { toast } from 'react-toastify';
import { baseUrlClient } from '../../hooks/useData.ts';
import { ROUTES } from '../../routes/routes.ts';
import { JoinOverlay } from '../overlay/JoinOverlay.tsx';
import { FollowOverlay } from '../overlay/FollowOverlay.tsx';
import { ViewerInfoOverlay } from '../overlay/ViewerInfoOverlay.tsx';

export function OverlayGalleryCard(props: IProps) {
  const user = useAuth().user;

  const httpService = new HttpService();
  const errorService = new ErrorService();

  function onClickTest() {
    httpService
      .PATCH(ENDPOINT.TEST_OVERLAY(props.type))
      .then(() => {
        toast.info('Success!');
      })
      .catch((e) => {
        errorService.fetchApiError(e);
      });
  }

  function checkUrl() {
    switch (props.type) {
      case TIKTOK_EVENT_ENUM.JOIN:
        return ROUTES.OVERLAY.JOIN(user?.id || '');
      case TIKTOK_EVENT_ENUM.COMMENT:
        return ROUTES.OVERLAY.CHAT(user?.id || '');
      case TIKTOK_EVENT_ENUM.FOLLOW:
        return ROUTES.OVERLAY.FOLLOW(user?.id || '');
      case TIKTOK_EVENT_ENUM.VIEWER_INFO:
        return ROUTES.OVERLAY.VIEWER_INFO(user?.id || '');
    }
  }

  function copy() {
    if (checkUrl()) {
      navigator.clipboard.writeText(baseUrlClient + checkUrl()).then(() => {
        toast.info('Success Copy To Clipboard');
      });
    } else toast.error('Event dont created');
  }

  function checkTitle() {
    switch (props.type) {
      case TIKTOK_EVENT_ENUM.COMMENT:
        return t('comment');
      case TIKTOK_EVENT_ENUM.JOIN:
        return t('join');
      case TIKTOK_EVENT_ENUM.FOLLOW:
        return t('follow');
      case TIKTOK_EVENT_ENUM.VIEWER_INFO:
        return t('viewer_info');
    }
  }

  function checkOverlay() {
    switch (props.type) {
      case TIKTOK_EVENT_ENUM.COMMENT:
        return <ChatOverlay allignment={'right'} />;
      case TIKTOK_EVENT_ENUM.JOIN:
        return <JoinOverlay allignment={'left'} />;
      case TIKTOK_EVENT_ENUM.FOLLOW:
        return <FollowOverlay />;
      case TIKTOK_EVENT_ENUM.VIEWER_INFO:
        return <ViewerInfoOverlay />;
    }
  }

  return (
    <Card>
      <CardBody className={'flex items-center justify-between'}>
        <h3>{checkTitle()}</h3>
        <div className={'flex gap-3'}>
          <Button onClick={() => onClickTest()}>{t('Test Overlay')}</Button>
          <Button onClick={() => copy()}>{t('copy_url')}</Button>
        </div>
      </CardBody>
      <Divider />
      <CardBody>{checkOverlay()}</CardBody>
    </Card>
  );
}

interface IProps {
  type: TIKTOK_EVENT_ENUM;
}
