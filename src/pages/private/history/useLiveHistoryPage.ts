import { useAppDispatch, useAppSelector } from '../../../redux/store.ts';
import { IStreamingSlice } from '../../../redux/reducers/streaming-slice.ts';
import { useEffect, useState } from 'react';
import { IResListStreamingRoom } from '../../../models/response/IResListStreamingRoom.ts';
import { StreamingAction } from '../../../redux/actions/streaming.action.ts';

export function useLiveHistoryPage() {
  const dispatch = useAppDispatch();
  const Streaming: IStreamingSlice = useAppSelector((state) => state.Streaming);

  const streamingAction = new StreamingAction();

  const [dataList, setDataList] = useState<IResListStreamingRoom[]>([]);

  useEffect(() => {
    setDataList(Streaming?.listStreamingRoom?.data || []);
  }, [Streaming?.listStreamingRoom?.data]);

  useEffect(() => {
    dispatch(streamingAction.getListStreamingRoom()).then();
  }, []);

  return { dataList };
}
