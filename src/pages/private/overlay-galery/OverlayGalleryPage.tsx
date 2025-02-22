import { t } from 'i18next';
import { Heading } from '../../../components/atoms/Heading';
import { PageContainer } from '../../../components/atoms/PageContainer';
import { TIKTOK_EVENT_ENUM } from '../../../enums/tiktok_event_enum.ts';
import { useOverlayGalleryPage } from './useOverlayGalleryPage.ts';
import { OverlayGalleryCard } from '../../../components/molecules/OverlayGalleryCard.tsx';

export function OverlayGalleryPage() {
  useOverlayGalleryPage();
  return (
    <div className="mt-8">
      <PageContainer>
        <div className="grid gap-7">
          <Heading text={t('overlay_gallery')} />
          <OverlayGalleryCard type={TIKTOK_EVENT_ENUM.COMMENT} />
          <OverlayGalleryCard type={TIKTOK_EVENT_ENUM.JOIN} />
          <OverlayGalleryCard type={TIKTOK_EVENT_ENUM.FOLLOW} />
          <OverlayGalleryCard type={TIKTOK_EVENT_ENUM.VIEWER_INFO} />
          <OverlayGalleryCard type={TIKTOK_EVENT_ENUM.GIFT_COMBO} />
        </div>
      </PageContainer>
    </div>
  );
}
