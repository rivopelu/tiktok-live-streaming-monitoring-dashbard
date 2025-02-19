import { ReactNode } from 'react';
import { PAGE_TYPE_ENUM } from '../../enums/page-type-enum';
import { Sidebar } from './Sidebar';
import { useSubscription } from 'react-stomp-hooks';
import { useAppDispatch } from '../../redux/store';
import { StreamingAction } from '../../redux/actions/streaming-action';
import { IResDataMessageTiktokEvent } from '../../models/response/IResDataMessageTiktokEvent';

export function BaseLayout(props: IProps) {
  const dispatch = useAppDispatch();

  const streamingAction = new StreamingAction();

  useSubscription('/topic/event', (message) => getMessage(message.body));

  function getMessage(res: string) {
    const data: IResDataMessageTiktokEvent = JSON.parse(res);
    dispatch(streamingAction.messageEvent(data));
  }

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

interface IProps {
  type: PAGE_TYPE_ENUM;
  children: ReactNode;
}
