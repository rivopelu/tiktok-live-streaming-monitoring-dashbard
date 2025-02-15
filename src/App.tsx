import { useState } from 'react';
import { useSubscription } from 'react-stomp-hooks';
import { TIKTOK_EVENT_ENUM } from './enums/tiktok_event_enum';
import { MdFavorite } from 'react-icons/md';

function App() {
  const [dataLike, setDataLike] = useState<IResData[]>([]);
  const [dataComment, setDataComment] = useState<IResData[]>([]);
  const [dataShare, setDataShare] = useState<IResData[]>([]);
  const [dataJoin, setDataJoin] = useState<IResData[]>([]);
  const [dataFollow, setDataFollow] = useState<IResData[]>([]);

  useSubscription('/topic/event', (message) => setLastMessage(message.body));

  function setLastMessage(res: string) {
    const parseData: IResData = JSON.parse(res);
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
        setDataJoin((e) => [parseData, ...e].splice(0, 5));
        return;
      default:
        return;
    }
  }

  return (
    <div className="min-h-screen w-full p-6">
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
                  <MdFavorite className="text-red-600" />
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
      </div>
    </div>
  );
}

export default App;

interface IResData {
  room_id: string;
  tiktok_username: string;
  tiktok_user_profile_name: string;
  profile_picture_url: string;
  type: TIKTOK_EVENT_ENUM;
  tiktok_profile_name: string;
  comment: string;
  like_count: number;
}
