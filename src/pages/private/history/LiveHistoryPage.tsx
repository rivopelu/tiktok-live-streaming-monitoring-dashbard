import { PageContainer } from '../../../components/atoms/PageContainer.tsx';
import { Heading } from '../../../components/atoms/Heading.tsx';
import { t } from 'i18next';
import { useLiveHistoryPage } from './useLiveHistoryPage.ts';

export function LiveHistoryPage() {
  const page = useLiveHistoryPage();
  return (
    <PageContainer>
      <div className={'grid gap-5 mt-8'}>
        <Heading text={t('live_history')} />
        <div>
          {page.dataList.map((item, i) => (
            <div key={i}>
              {item.host_name} | {item.title}
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
