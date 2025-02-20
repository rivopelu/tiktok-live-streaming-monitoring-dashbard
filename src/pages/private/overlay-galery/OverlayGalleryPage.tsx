import { t } from 'i18next';
import { Heading } from '../../../components/atoms/Heading';
import { PageContainer } from '../../../components/atoms/PageContainer';
import { Card, CardBody } from '../../../components/atoms/Card';
import { ChatOverlay } from '../../../components/overlay/ChatOverlay';
import { Divider } from '../../../components/atoms/Divider';
import { Button } from '../../../components/atoms/Button.tsx';
import { JoinOverlay } from '../../../components/overlay/JoinOverlay.tsx';
import { TIKTOK_EVENT_ENUM } from '../../../enums/tiktok_event_enum.ts';
import { useOverlayGalleryPage } from './useOverlayGalleryPage.ts';

export function OverlayGalleryPage() {
  const page = useOverlayGalleryPage();
  return (
    <div className="mt-8">
      <PageContainer>
        <div className="grid gap-7">
          <Heading text={t('overlay_gallery')} />

          <Card>
            <CardBody className={'flex items-center justify-between'}>
              <h3>{t('comment')}</h3>
              <div className={'flex gap-3'}>
                <Button onClick={() => page.onClickTest(TIKTOK_EVENT_ENUM.COMMENT)}>{t('Test Overlay')}</Button>
                <Button onClick={() => page.onClickCopyComment(TIKTOK_EVENT_ENUM.COMMENT)}>{t('copy_url')}</Button>
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
              <div className={'flex gap-3'}>
                <Button onClick={() => page.onClickTest(TIKTOK_EVENT_ENUM.JOIN)}>{t('Test Overlay')}</Button>
                <Button onClick={() => page.onClickCopyComment(TIKTOK_EVENT_ENUM.JOIN)}>{t('copy_url')}</Button>
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
