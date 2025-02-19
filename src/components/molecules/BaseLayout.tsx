import { ReactNode, useEffect } from 'react';
import { useSubscription } from 'react-stomp-hooks';
import { PAGE_TYPE_ENUM } from '../../enums/page-type-enum';
import { IResDataMessageTiktokEvent } from '../../models/response/IResDataMessageTiktokEvent';
import { useAuth } from '../../providers/UseAuth';
import { StreamingAction } from '../../redux/actions/streaming-action';
import { useAppDispatch } from '../../redux/store';
import { Sidebar } from './Sidebar';

export function BaseLayout(props: IProps) {
  const dispatch = useAppDispatch();
  const auth = useAuth();
  const user = auth.user;

  const streamingAction = new StreamingAction();

  useEffect(() => {
    console.log(user);
  }, [user]);

  useSubscription('/topic/event/' + user?.id + '/', (message) => getMessage(message.body));

  function getMessage(res: string) {
    const data: IResDataMessageTiktokEvent = JSON.parse(res);
    console.log(data);
    dispatch(streamingAction.messageEvent(data));
  }

  function checkPage() {
    switch (props.type) {
      case PAGE_TYPE_ENUM.FULL_PAGE:
        return <>{props.children}</>;
      case PAGE_TYPE_ENUM.PRIMARY:
        return (
          <div className="flex">
            <Sidebar />
            <div className="flex-1 ">{props.children}</div>
          </div>
        );
      default:
        return <></>;
    }
  }

  return checkPage();
}

interface IProps {
  type: PAGE_TYPE_ENUM;
  children: ReactNode;
}
