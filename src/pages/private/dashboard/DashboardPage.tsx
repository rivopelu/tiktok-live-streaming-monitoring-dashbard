import { useDashboardPage } from './useDashboardPage';
import { PageContainer } from '../../../components/atoms/PageContainer.tsx';
import Chart from 'react-apexcharts';
import { Card, CardBody } from '../../../components/atoms/Card.tsx';
import { Divider } from '../../../components/atoms/Divider.tsx';

export function DashboardPage() {
  const page = useDashboardPage();

  return (
    <PageContainer>
      <div className={'grid gap-8 mt-8'}>
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
