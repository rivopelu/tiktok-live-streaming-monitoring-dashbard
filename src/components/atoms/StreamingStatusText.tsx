import { twMerge } from 'tailwind-merge';
import { STREAMING_STATUS_ENUM } from '../../enums/streaming-status-enum';
import { useState } from 'react';
import { useSubscription } from 'react-stomp-hooks';
import { useAuth } from '../../providers/UseAuth.tsx';

export function StreamingStatusText() {
  const [statusMessage, setStatusMessage] = useState<STREAMING_STATUS_ENUM | undefined>(undefined);
  const auth = useAuth();
  const username = auth.user?.id;
  useSubscription('/topic/streaming-status/' + username, (message) =>
    setStatusMessage(message.body as STREAMING_STATUS_ENUM),
  );

  function checkColor() {
    switch (statusMessage) {
      case STREAMING_STATUS_ENUM.CONNECTED:
        return 'bg-green-600';
      case STREAMING_STATUS_ENUM.ERROR:
        return 'bg-red-600';
      case STREAMING_STATUS_ENUM.STARTING:
        return 'bg-blue-600';
      default:
        return 'bg-red-600';
    }
  }

  return (
    <div className="flex gap-2 items-center">
      <div>{statusMessage}</div>
      <div className={twMerge(checkColor(), 'h-5 w-5 rounded-full')}></div>
    </div>
  );
}
