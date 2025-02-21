import { MdPerson } from 'react-icons/md';
import { IStreamingSlice } from '../../redux/reducers/streaming-slice.ts';
import { useAppSelector } from '../../redux/store.ts';
import { useEffect, useState } from 'react';

export function ViewerInfoOverlay() {
  const Streaming: IStreamingSlice = useAppSelector((state) => state.Streaming);

  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(Streaming?.viewerCount || 0);
  }, [Streaming.viewerCount]);

  return (
    <div
      className={
        'flex bg-white text-2xl font-semibold items-center gap-2 rounded-full px-4 py-4 border-2 justify-center'
      }
    >
      <MdPerson />
      <div>{count}</div>
    </div>
  );
}
