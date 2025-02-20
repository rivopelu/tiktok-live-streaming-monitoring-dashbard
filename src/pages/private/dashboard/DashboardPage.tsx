import { t } from 'i18next';
import Chart from 'react-apexcharts';
import { Button } from '../../../components/atoms/Button.tsx';
import { Card, CardBody } from '../../../components/atoms/Card.tsx';
import { Divider } from '../../../components/atoms/Divider.tsx';
import { PageContainer } from '../../../components/atoms/PageContainer.tsx';
import { useDashboardPage } from './useDashboardPage';

export function DashboardPage() {
  const page = useDashboardPage();

  return (
    <PageContainer>
      <div className={'grid gap-8 mt-8'}>
        <Card>
          <CardBody className="flex items-center justify-between">
            <div>
              <div>{page.user?.tiktok_username}</div>
            </div>
            {!page.loading && page.streamingStatus && (
              <>
                <div>
                  {page.streamingStatus === 'ACTIVE' ? (
                    <Button onClick={page.onEndStreaming}>{t('end_streaming')}</Button>
                  ) : (
                    <Button onClick={page.onStartStreaming}>{t('start_streaming')}</Button>
                  )}
                </div>
              </>
            )}
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <h1>Title</h1>
          </CardBody>
          <Divider />
          <CardBody>
            <Chart options={page.chartOption} series={page.chartSeries} type="area" width="100%" height={400} />
          </CardBody>
        </Card>
      </div>
    </PageContainer>
  );
}
