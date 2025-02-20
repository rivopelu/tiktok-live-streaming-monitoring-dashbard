import { IStreamingSlice } from '../../redux/reducers/streaming-slice.ts';
import { useAppSelector } from '../../redux/store.ts';
import { useEffect, useState } from 'react';
import { IResDataMessageTiktokEvent } from '../../models/response/IResDataMessageTiktokEvent.ts';
import { TIKTOK_EVENT_ENUM } from '../../enums/tiktok_event_enum.ts';
import { twMerge } from 'tailwind-merge';

export function JoinOverlay(props: IProps) {
  const Streaming: IStreamingSlice = useAppSelector((state) => state.Streaming);
  const [dataComment, setDataComment] = useState<IResDataMessageTiktokEvent[]>([]);
  useEffect(() => {
    if (Streaming.messageEvent?.data) {
      const res = Streaming.messageEvent.data;
      if (res.type === TIKTOK_EVENT_ENUM.JOIN) {
        setDataComment([res, ...dataComment].splice(0, 5));
      }
    }
  }, [Streaming.messageEvent?.data]);

  function checkAllignment() {
    if (props.allignment === 'right') {
      return 'items-end';
    } else {
      return 'items-start';
    }
  }

  return (
    <div>
      <div className={twMerge('flex flex-col  gap-3  justify-center ', checkAllignment())}>
        {dataComment.map((item, i) => (
          <div key={i} className="px-3 py-2 rounded-full bg-white w-fit border-2 flex gap-4 ">
            <img className="h-13 border-2 w-13 rounded-full" alt={item.room_id} src={item.profile_picture_url} />
            <div>
              <h1 className={'font-bold'}>Welcome</h1>
              <div className="font-semibold">@{item.tiktok_username}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface IProps {
  allignment: 'left' | 'right';
}
