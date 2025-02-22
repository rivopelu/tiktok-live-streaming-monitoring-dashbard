import { ReactNode } from 'react';
import { useSubscription } from 'react-stomp-hooks';
import { PAGE_TYPE_ENUM } from '../../enums/page-type-enum';
import { IResDataMessageTiktokEvent } from '../../models/response/IResDataMessageTiktokEvent';
import { useAuth } from '../../providers/UseAuth';
import { StreamingAction } from '../../redux/actions/streaming-action';
import { useAppDispatch } from '../../redux/store';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar.tsx';
import { useParams } from 'react-router-dom';

export function BaseLayout(props: IProps) {
  const dispatch = useAppDispatch();
  const auth = useAuth();
  const user = auth.user;
  const streamingAction = new StreamingAction();
  const param = useParams();

  function checkAccountId() {
    if (user?.id) {
      return user?.id;
    } else if (param.accountId) {
      return param.accountId;
    }
  }

  useSubscription('/topic/event/' + checkAccountId() + '/', (message) => getMessage(message.body));
  useSubscription('/topic/viewer-info/' + checkAccountId(), (message) => {
    dispatch(streamingAction.viewerInfo(parseInt(message.body))).then();
  });

  function getMessage(res: string) {
    const data: IResDataMessageTiktokEvent = JSON.parse(res);
    dispatch(streamingAction.messageEvent(data)).then();
  }

  function checkPage() {
    switch (props.type) {
      case PAGE_TYPE_ENUM.FULL_PAGE:
        return <>{props.children}</>;
      case PAGE_TYPE_ENUM.PRIMARY:
        return (
          <div className="flex">
            <TopBar />
            <Sidebar />
            <div className="flex-1 ">
              <div className={'h-top-bar-height'}></div>
              {props.children}
            </div>
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
