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

export function OverlayGalleryPage() {
  const user = useAuth().user;
  const chatUrlOverlayUrl = baseUrlClient + ROUTES.OVERLAY.CHAT(user?.id || '');
  const audio = useAudio();

  function onClickCopyComment() {
    audio.notif1();
  }

  return (
    <div className="mt-8">
      <PageContainer>
        <div className="grid gap-7">
          <Heading text={t('overlay_gallery')} />

          <Card>
            <CardBody className={'flex items-center justify-between'}>
              <h3>{t('comment')}</h3>
              {chatUrlOverlayUrl && (
                <div>
                  <Button onClick={onClickCopyComment}>{t('copy_url')}</Button>
                </div>
              )}
            </CardBody>
            <Divider />
            <CardBody>
              <ChatOverlay allignment={'right'} />
            </CardBody>
          </Card>
        </div>
      </PageContainer>
    </div>
  );
}
