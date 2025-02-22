import { IStreamingSlice } from '../../redux/reducers/streaming-slice.ts';
import { useAppSelector } from '../../redux/store.ts';
import { useEffect, useState } from 'react';
import { TIKTOK_EVENT_ENUM } from '../../enums/tiktok_event_enum.ts';
import { IResDataMessageTiktokEvent } from '../../models/response/IResDataMessageTiktokEvent.ts';
import { useAudio } from '../../hooks/useAudio.ts';

export function GiftOverlay() {
  const [data, setData] = useState<IResDataMessageTiktokEvent | undefined>();
  const Streaming: IStreamingSlice = useAppSelector((state) => state.Streaming);
  const audio = useAudio();

  useEffect(() => {
    if (Streaming?.messageEvent?.data?.type === TIKTOK_EVENT_ENUM.GIFT_COMBO) {
      audio.yeppi();
      setData(Streaming.messageEvent.data);
    }
  }, [Streaming?.messageEvent?.data?.type]);

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setData(undefined);
      }, 4000);
    }
  }, [data]);

  return (
    <div className={'flex items-center justify-center'}>
      {data && (
        <div className={'flex items-center justify-center flex-col gap-5'}>
          <img
            className={'h-16 w-16 rounded-full bg-white border-2 border-black'}
            src={data.profile_picture_url}
            alt={'picture'}
          />
          <div className={'bg-white border-black border-2 px-5 py-1 rounded-full text-2xl'}>
            {data?.tiktok_username}
          </div>
          <div className={'bg-white border-black border-2 px-5 py-1 rounded-full text-2xl flex gap-3'}>
            <div>{`makasih buat ${data?.gift_data?.combo} ${data.gift_data?.name} nya `} </div>
            <span>
              <img className={'w-8 h-8'} src={data.gift_data?.picture_url} alt={data.gift_data?.name} />
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
