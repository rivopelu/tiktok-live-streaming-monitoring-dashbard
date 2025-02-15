import { useState } from "react";
import { useSubscription } from "react-stomp-hooks";

function App() {
  useSubscription("/topic/comment", (message) => setLastMessage(message.body));

  const [data, setData] = useState<IResMessaging[]>([]);

  function setLastMessage(res: string) {
    const parseData: IResMessaging = JSON.parse(res);
    if (parseData.type === "COMMENT") {
      setData([parseData, ...data]);
    }
    console.log(res);
  }

  return (
    <div className="min-h-screen">
      <div className="grid  max-w-2xl">
        {data.map((item, i) => (
          <div key={i}>
            <div className="flex gap-2 bg-white px-4 py-2 rounded-full border-2">
              <img
                className="h-16 w-16 rounded-full border-2"
                alt={item.tiktok_user_profile_name}
                src={item.profile_picture_url}
              />
              <div>
                <div>{item.tiktok_user_profile_name}</div>
                {item.comment && <div>{item.comment}</div>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

interface IResMessaging {
  roomId: string;
  tiktok_user_name: string;
  tiktok_user_profile_name: string;
  type: string;
  profile_picture_url: string;
  comment: string;
}
