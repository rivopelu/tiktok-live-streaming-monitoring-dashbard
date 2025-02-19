import { t } from 'i18next';
import { PageContainer } from '../../../components/atoms/PageContainer';
import { Button } from '../../../components/atoms/Button';
import { useDashboardPage } from './useDashboardPage';
import { MonitoringPage } from '../monitoring/MonitoringPage';

export function DashboardPage() {
  const page = useDashboardPage();

  return (
    <PageContainer>
      <div className="mt-8 grid gap-8">
        <div className="flex justify-between items-center">
          <div className="text-3xl capitalize">{t('dashboard')}</div>
          <div>
            <Button onClick={page.onLogout}>{t('logout').toUpperCase()}</Button>
          </div>
        </div>
        <div>
          <Button loading={page.loading} onClick={page.onStartStreaming}>
            {t('start_live_streaming')}
          </Button>
          <Button loading={page.loading} onClick={page.onEndStreaming}>
            {t('END STREAMING')}
          </Button>
        </div>
        <div>
          <MonitoringPage />
        </div>
      </div>
    </PageContainer>
  );
}
