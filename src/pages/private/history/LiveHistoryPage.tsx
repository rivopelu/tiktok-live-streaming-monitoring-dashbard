import { PageContainer } from '../../../components/atoms/PageContainer.tsx';
import { Heading } from '../../../components/atoms/Heading.tsx';
import { t } from 'i18next';
import { useLiveHistoryPage } from './useLiveHistoryPage.ts';
import { ITableColumns, Table } from '../../../components/molecules/Table.tsx';
import { IResListStreamingRoom } from '../../../models/response/IResListStreamingRoom.ts';
import { IconButton } from '../../../components/atoms/IconButton.tsx';
import { MdInfoOutline } from 'react-icons/md';
import DateHelper from '../../../helper/date-helper.ts';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../routes/routes.ts';

export function LiveHistoryPage() {
  const page = useLiveHistoryPage();
  const dateHelper = new DateHelper();

  const column: ITableColumns<IResListStreamingRoom>[] = [
    {
      title: t('title'),
      content: (e) => <div>{e.title || '-'}</div>,
    },
    {
      title: t('host_name'),
      content: (e) => <div>{e.host_name}</div>,
    },
    {
      title: t('total_like'),
      content: (e) => <div>{e.total_like}</div>,
    },
    {
      title: t('total_viewer'),
      content: (e) => <div>{e.total_viewers}</div>,
    },
    {
      title: t('start_time'),
      content: (e) => (
        <div>{e.start_date ? dateHelper.toFormatDate(new Date(e.start_date), 'dd LLLL, yyyy - HH:mm') : '-'}</div>
      ),
    },
    {
      title: '',
      content: (e) => (
        <Link to={ROUTES.PRIVATE.DETAIL_STREAMING_ROOM(e.id)}>
          <IconButton>
            <MdInfoOutline />
          </IconButton>
        </Link>
      ),
    },
  ];
  return (
    <PageContainer>
      <div className={'grid gap-5 mt-8'}>
        <Heading text={t('live_history')} />
        <div>
          <Table
            paginatedData={page.paginatedData}
            onChangePagination={page.onChangePagination}
            loading={page.loadingList}
            data={page.dataList}
            columns={column}
          />
        </div>
      </div>
    </PageContainer>
  );
}
