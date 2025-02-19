import { useEffect, useState } from 'react';
import { Card, CardBody } from '../../../components/atoms/Card';
import { TIKTOK_EVENT_ENUM } from '../../../enums/tiktok_event_enum';
import { IResDataMessageTiktokEvent } from '../../../models/response/IResDataMessageTiktokEvent';
import { IStreamingSlice } from '../../../redux/reducers/streaming-slice';
import { useAppSelector } from '../../../redux/store';
import { t } from 'i18next';
import { Button } from '../../../components/atoms/Button.tsx';
import { PageContainer } from '../../../components/atoms/PageContainer.tsx';
import { ENDPOINT } from '../../../constants/endpoint.ts';
import { useAuth } from '../../../providers/UseAuth.tsx';
import { HttpService } from '../../../services/http.service.ts';
import ErrorService from '../../../services/error.service.ts';

export function MonitoringPage() {
  const [dataLike, setDataLike] = useState<IResDataMessageTiktokEvent[]>([]);
  const [dataComment, setDataComment] = useState<IResDataMessageTiktokEvent[]>([]);
  const [dataShare, setDataShare] = useState<IResDataMessageTiktokEvent[]>([]);
  const [dataJoin, setDataJoin] = useState<IResDataMessageTiktokEvent[]>([]);
  const [dataFollow, setDataFollow] = useState<IResDataMessageTiktokEvent[]>([]);
  const [dataGift, setDataGift] = useState<IResDataMessageTiktokEvent[]>([]);
  const [dataGiftCombo, setDataGiftCombo] = useState<IResDataMessageTiktokEvent[]>([]);
  const [dataLogger, setDataLogger] = useState<IResDataMessageTiktokEvent[]>([]);

  const Streaming: IStreamingSlice = useAppSelector((state) => state.Streaming);
  const auth = useAuth();
  const httpService = new HttpService();
  const errorService = new ErrorService();

  const [loading, setLoading] = useState<boolean>(false);

  function onLogout() {
    auth.logOut();
  }

  function onStartStreaming() {
    httpService
      .PATCH(ENDPOINT.START_STREAMING())
      .then(() => {
        setLoading(false);
      })
      .catch((e) => {
        errorService.fetchApiError(e);
        setLoading(false);
      });
  }

  function onEndStreaming() {
    httpService
      .PATCH(ENDPOINT.END_STREAMING())
      .then(() => {
        setLoading(false);
      })
      .catch((e) => {
        errorService.fetchApiError(e);
        setLoading(false);
      });
  }

  useEffect(() => {
    if (Streaming.messageEvent?.data) {
      setLastMessage(Streaming.messageEvent.data);
    }
  }, [Streaming.messageEvent?.data]);

  function setLastMessage(parseData: IResDataMessageTiktokEvent) {
    setDataLogger((e) => [parseData, ...e].splice(0, 5));

    switch (parseData.type) {
      case TIKTOK_EVENT_ENUM.COMMENT:
        setDataComment((e) => [parseData, ...e].splice(0, 5));
        return;
      case TIKTOK_EVENT_ENUM.LIKE:
        setDataLike((e) => [parseData, ...e].splice(0, 5));
        return;
      case TIKTOK_EVENT_ENUM.SHARE:
        setDataShare((e) => [parseData, ...e].splice(0, 5));
        return;
      case TIKTOK_EVENT_ENUM.JOIN:
        setDataJoin((e) => [parseData, ...e].splice(0, 5));
        return;
      case TIKTOK_EVENT_ENUM.FOLLOW:
        setDataFollow((e) => [parseData, ...e].splice(0, 5));
        return;
      case TIKTOK_EVENT_ENUM.GIFT:
        setDataGift((e) => [parseData, ...e].splice(0, 5));
        return;
      case TIKTOK_EVENT_ENUM.GIFT_COMBO:
        console.log(parseData);
        setDataGiftCombo((e) => [parseData, ...e].splice(0, 5));
        return;
      default:
        return;
    }
  }

  return (
    <div className="min-h-screen w-full p-6">
      <PageContainer>
        <div className="mt-8 grid gap-8">
          <div className="flex justify-between items-center">
            <div className="text-3xl capitalize">{t('dashboard')}</div>
            <div>
              <Button onClick={onLogout}>{t('logout').toUpperCase()}</Button>
            </div>
          </div>
          <div>
            <Button loading={loading} onClick={onStartStreaming}>
              {t('start_live_streaming')}
            </Button>
            <Button loading={loading} onClick={onEndStreaming}>
              {t('END STREAMING')}
            </Button>
          </div>
        </div>
      </PageContainer>
      <div className="grid gap-6 ">
        <div>
          <h1 className="text-3xl mb-3">LIKE</h1>
          <div className="grid grid-cols-5 gap-4">
            {dataLike.map((item, i) => (
              <div key={i} className="px-3 py-2 rounded-full border-2 flex gap-4 justify-between">
                <div className="flex items-center gap-3">
                  <img className="h-13 w-13 rounded-full" alt={item.room_id} src={item.profile_picture_url} />
                  <div>
                    <div>@{item.tiktok_username}</div>
                    <h1>{item.tiktok_user_profile_name}</h1>
                  </div>
                </div>
                <div className="flex items-center justify-center text-3xl">
                  <div>{item.like_count}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl mb-3">COMMENT</h1>
          <div className="grid grid-cols-5 gap-4">
            {dataComment.map((item, i) => (
              <div key={i} className="px-3 py-2 rounded-full border-2 flex gap-4 ">
                <img className="h-13 w-13 rounded-full" alt={item.room_id} src={item.profile_picture_url} />
                <div>
                  <div className="font-semibold">@{item.tiktok_username}</div>
                  <h1>{item.comment}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl mb-3">JOIN</h1>
          <div className="grid grid-cols-5 gap-4">
            {dataJoin.map((item, i) => (
              <div key={i} className="px-3 py-2 rounded-full border-2 flex gap-4 justify-between">
                <div className="flex items-center gap-3">
                  <img className="h-13 w-13 rounded-full" alt={item.room_id} src={item.profile_picture_url} />
                  <div>
                    <div>@{item.tiktok_username}</div>
                    <h1>{item.tiktok_user_profile_name}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl mb-3">SHARE</h1>
          <div className="grid grid-cols-5 gap-4">
            {dataShare.map((item, i) => (
              <div key={i} className="px-3 py-2 rounded-full border-2 flex gap-4 justify-between">
                <div className="flex items-center gap-3">
                  <img className="h-13 w-13 rounded-full" alt={item.room_id} src={item.profile_picture_url} />
                  <div>
                    <div>@{item.tiktok_username}</div>
                    <h1>{item.tiktok_user_profile_name}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl mb-3">FOLLOW</h1>
          <div className="grid grid-cols-5 gap-4">
            {dataFollow.map((item, i) => (
              <div key={i} className="px-3 py-2 rounded-full border-2 flex gap-4 justify-between">
                <div className="flex items-center gap-3">
                  <img className="h-13 w-13 rounded-full" alt={item.room_id} src={item.profile_picture_url} />
                  <div>
                    <div>@{item.tiktok_username}</div>
                    <h1>{item.tiktok_user_profile_name}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl mb-3">GIFT</h1>
          <div className="grid grid-cols-5 gap-4">
            {dataGift.map((item, i) => (
              <div key={i} className="px-3 py-2 rounded-full border-2 flex gap-4 justify-between">
                <div className="flex items-center gap-3">
                  <img className="h-13 w-13 rounded-full" alt={item.room_id} src={item.profile_picture_url} />
                  <div>
                    <div>@{item.tiktok_username}</div>
                    <h1>{item.tiktok_user_profile_name}</h1>
                  </div>
                </div>
                {item.gift_data && (
                  <div className="flex">
                    <div>{item.gift_data?.name}</div>
                    <img className="h-10 w-10" alt={item.gift_data.name} src={item.gift_data.picture_url} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl mb-3">GIFT COMBO</h1>
          <div className="grid grid-cols-5 gap-4">
            {dataGiftCombo.map((item, i) => (
              <div key={i} className="px-3 py-2 rounded-full border-2 flex gap-4 justify-between">
                <div className="flex items-center gap-3">
                  <img className="h-13 w-13 rounded-full" alt={item.room_id} src={item.profile_picture_url} />
                  <div>
                    <div>@{item.tiktok_username}</div>
                    <h1>{item.tiktok_user_profile_name}</h1>
                  </div>
                </div>
                {item.gift_data && (
                  <div className="flex">
                    <div>{item.gift_data?.name}</div>
                    <img className="h-10 w-10" alt={item.gift_data.name} src={item.gift_data.picture_url} />
                    <div className="text-2xl">{item.gift_data.combo}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-16">
        <h1 className="text-2xl">LOGGER</h1>
        <div className={' h-[400px] flex flex-col gap-3 overflow-hidden'}>
          {dataLogger.map((item, i) => (
            <Card key={i}>
              <CardBody>
                <div className={'w-full grid grid-cols-3'}>
                  <h1>{item.type}</h1>
                  <div className="flex items-center gap-3">
                    <img className="h-13 w-13 rounded-full" alt={item.room_id} src={item.profile_picture_url} />
                    <div>
                      <div>@{item.tiktok_username}</div>
                      <h1>{item.tiktok_user_profile_name}</h1>
                    </div>
                  </div>
                  <div>{new Date().toDateString()}</div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
