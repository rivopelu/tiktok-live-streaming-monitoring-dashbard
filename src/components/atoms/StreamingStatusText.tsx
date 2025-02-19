import { twMerge } from 'tailwind-merge';
import { STREAMING_STATUS_ENUM } from '../../enums/streaming-status-enum';

export function StreamingStatusText(props: IProps) {
  function checkColor() {
    switch (props.status) {
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
    <div className="flex gap-4 items-center">
      <div className={twMerge(checkColor(), 'h-5 w-5 rounded-full')}></div>
      <div>{props.status}</div>
    </div>
  );
}

interface IProps {
  status?: STREAMING_STATUS_ENUM;
}
