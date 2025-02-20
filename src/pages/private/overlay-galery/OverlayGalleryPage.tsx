import { t } from 'i18next';
import { Heading } from '../../../components/atoms/Heading';
import { PageContainer } from '../../../components/atoms/PageContainer';
import { Card, CardBody } from '../../../components/atoms/Card';
import { ChatOverlay } from '../../../components/overlay/ChatOverlay';
import { Divider } from '../../../components/atoms/Divider';
import { useAuth } from '../../../providers/UseAuth.tsx';
import { ROUTES } from '../../../routes/routes.ts';
import { baseUrlClient } from '../../../hooks/useData.ts';
import { Button } from '../../../components/atoms/Button.tsx';
import { useAudio } from '../../../hooks/useAudio.ts';
import { toast } from 'react-toastify';
import { JoinOverlay } from '../../../components/overlay/JoinOverlay.tsx';
import { TIKTOK_EVENT_ENUM } from '../../../enums/tiktok_event_enum.ts';

export function OverlayGalleryPage() {
  const user = useAuth().user;

  const audio = useAudio();

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

  return (
    <div className="mt-8">
      <PageContainer>
        <div className="grid gap-7">
          <Heading text={t('overlay_gallery')} />

          <Card>
            <CardBody className={'flex items-center justify-between'}>
              <h3>{t('comment')}</h3>
              <div>
                <Button onClick={() => onClickCopyComment(TIKTOK_EVENT_ENUM.COMMENT)}>{t('copy_url')}</Button>
              </div>
            </CardBody>
            <Divider />
            <CardBody>
              <ChatOverlay allignment={'right'} />
            </CardBody>
          </Card>

          <Card>
            <CardBody className={'flex items-center justify-between'}>
              <h3>{t('comment')}</h3>
              <div>
                <Button onClick={() => onClickCopyComment(TIKTOK_EVENT_ENUM.JOIN)}>{t('copy_url')}</Button>
              </div>
            </CardBody>
            <Divider />
            <CardBody>
              <JoinOverlay allignment={'left'} />
            </CardBody>
          </Card>
        </div>
      </PageContainer>
    </div>
  );
}
