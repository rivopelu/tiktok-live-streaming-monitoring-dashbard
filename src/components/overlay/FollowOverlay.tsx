import { IStreamingSlice } from '../../redux/reducers/streaming-slice.ts';
import { useAppSelector } from '../../redux/store.ts';
import { useEffect, useState } from 'react';
import { IResDataMessageTiktokEvent } from '../../models/response/IResDataMessageTiktokEvent.ts';
import { TIKTOK_EVENT_ENUM } from '../../enums/tiktok_event_enum.ts';
import { useAudio } from '../../hooks/useAudio.ts';

export function FollowOverlay() {
  const audio = useAudio();

  const Streaming: IStreamingSlice = useAppSelector((state) => state.Streaming);
  const [data, setData] = useState<IResDataMessageTiktokEvent | undefined>(undefined);
  useEffect(() => {
    if (Streaming.messageEvent?.data) {
      const res = Streaming.messageEvent.data;
      if (res.type === TIKTOK_EVENT_ENUM.FOLLOW) {
        setData(res);
        audio.follow();
      }
    }
  }, [Streaming.messageEvent?.data]);

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setData(undefined);
      }, 4000);
    }
  }, [data]);
  return (
    <div className={'w-full h-full flex  items-center justify-center'}>
      {data && (
        <div className={'flex flex-col h-fit w-fit text-center gap-4 items-center justify-center'}>
          <div className={'text-3xl bg-white px-4 py-2 rounded-full  font-semibold'}>Thankyou for follow</div>
          <img
            className={'border-2 border-black bg-white rounded-full h-16 w-16'}
            alt={'image'}
            src={data?.profile_picture_url}
          />
          <div className={'text-center  px-8 py-2 bg-white rounded-full border-2 border-black'}>
            <div className={'text-slate-600 '}>@{data?.tiktok_username}</div>
            <div className={'text-2xl font-semibold'}>{data.tiktok_user_profile_name}</div>
          </div>
        </div>
      )}
    </div>
  );
}
