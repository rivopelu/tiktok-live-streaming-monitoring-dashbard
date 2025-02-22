import { t } from 'i18next';
import { PageContainer } from '../../../components/atoms/PageContainer.tsx';
import { Heading } from '../../../components/atoms/Heading.tsx';
import { Card, CardBody } from '../../../components/atoms/Card.tsx';
import { MdFavorite, MdPerson } from 'react-icons/md';
import { useMonitoringPage } from './useMonitoringPage.ts';
import { Divider } from '../../../components/atoms/Divider.tsx';

export function MonitoringPage() {
  const page = useMonitoringPage();
  return (
    <div className="min-h-screen w-full p-6">
      <PageContainer>
        <div className={'grid gap-8 '}>
          <div className={'flex justify-between'}>
            <Heading text={t('live_monitoring')} />
            <div className={'flex items-center gap-2 w-fit px-4 py-2 border-2 bg-white rounded-full'}>
              <MdPerson />
              <div>{page.dataViewer}</div>
            </div>
          </div>
          <div className={'grid grid-cols-3 gap-8'}>
            <Card>
              <CardBody>
                <Heading text={t('join')} />
              </CardBody>
              <Divider />
              <CardBody className={'grid gap-3'}>
                {page.dataJoin.map((item, i) => (
                  <div key={i} className={'flex  gap-3'}>
                    <img
                      src={item.profile_picture_url}
                      alt={item.tiktok_username}
                      className={'h-10 w-10 rounded-full border-2 bg-white'}
                    />
                    <div>
                      <div>@{item.tiktok_username}</div>
                      <div>{item.tiktok_user_profile_name}</div>
                    </div>
                  </div>
                ))}
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Heading text={t('comment')} />
              </CardBody>
              <Divider />
              <CardBody className={'grid gap-3'}>
                {page.dataComment.map((item, i) => (
                  <div key={i} className={'flex  gap-3'}>
                    <img
                      src={item.profile_picture_url}
                      alt={item.tiktok_username}
                      className={'h-10 w-10 rounded-full border-2 bg-white'}
                    />
                    <div>
                      <div className={'text-slate-600'}>{item.tiktok_user_profile_name}</div>
                      <div>{item.comment}</div>
                    </div>
                  </div>
                ))}
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Heading text={t('Like')} />
              </CardBody>
              <Divider />
              <CardBody className={'grid gap-3'}>
                {page.dataLike.map((item, i) => (
                  <div key={i} className={'flex items-center w-full justify-between  gap-3'}>
                    <div className={'flex items-center gap-2'}>
                      <img
                        src={item.profile_picture_url}
                        alt={item.tiktok_username}
                        className={'h-10 w-10 rounded-full border-2 bg-white'}
                      />
                      <div>
                        <div className={'text-slate-600'}>@{item.tiktok_user_profile_name}</div>
                        <div>{item.tiktok_username}</div>
                      </div>
                    </div>
                    <div className={'flex  items-center gap-1'}>
                      <MdFavorite className={'text-red-800'} />
                      <div>{item.like_count}</div>
                    </div>
                  </div>
                ))}
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Heading text={t('followers')} />
              </CardBody>
              <Divider />
              <CardBody className={'grid gap-3'}>
                {page.dataFollow.map((item, i) => (
                  <div key={i} className={'flex items-center w-full justify-between   gap-3'}>
                    <div className={'flex items-center gap-2'}>
                      <img
                        src={item.profile_picture_url}
                        alt={item.tiktok_username}
                        className={'h-10 w-10 rounded-full border-2 bg-white'}
                      />
                      <div>
                        <div className={'text-slate-600'}>@{item.tiktok_user_profile_name}</div>
                        <div>{item.tiktok_username}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Heading text={t('gift')} />
              </CardBody>
              <Divider />
              <CardBody className={'grid gap-3'}>
                {page.dataGiftCombo.map((item, i) => (
                  <div key={i} className={'flex items-center w-full justify-between  gap-3'}>
                    <div className={'flex items-center gap-2'}>
                      <img
                        src={item.profile_picture_url}
                        alt={item.tiktok_username}
                        className={'h-10 w-10 rounded-full border-2 bg-white'}
                      />
                      <div>
                        <div className={'text-slate-600'}>@{item.tiktok_user_profile_name}</div>
                        <div>{item.tiktok_username}</div>
                      </div>
                    </div>
                    <div className={'flex  items-center gap-1'}>
                      {item.gift_data?.picture_url && <img src={item.gift_data?.picture_url} alt={'gift'} />}
                      <div>{item.gift_data?.combo}</div>
                    </div>
                  </div>
                ))}
              </CardBody>
            </Card>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
