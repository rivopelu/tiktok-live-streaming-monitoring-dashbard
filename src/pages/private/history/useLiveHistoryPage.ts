import { useAppDispatch, useAppSelector } from '../../../redux/store.ts';
import { IStreamingSlice } from '../../../redux/reducers/streaming-slice.ts';
import { useEffect, useState } from 'react';
import { IResListStreamingRoom } from '../../../models/response/IResListStreamingRoom.ts';
import { StreamingAction } from '../../../redux/actions/streaming.action.ts';
import { IOnchangePaginationData } from '../../../models/data/IOnchangePaginationData.ts';
import { convertObjToQueryParam } from '../../../helper/pagination-helper.ts';
import { useLocation, useNavigate } from 'react-router-dom';

export function useLiveHistoryPage() {
  const dispatch = useAppDispatch();
  const Streaming: IStreamingSlice = useAppSelector((state) => state.Streaming);

  const streamingAction = new StreamingAction();
  const navigate = useNavigate();
  const location = useLocation();
  const loadingList = Streaming?.listStreamingRoom?.loading;
  const paginatedData = Streaming?.listStreamingRoom?.paginated_data;
  const [dataList, setDataList] = useState<IResListStreamingRoom[]>([]);

  useEffect(() => {
    setDataList(Streaming?.listStreamingRoom?.data || []);
  }, [Streaming?.listStreamingRoom?.data]);

  useEffect(() => {
    fetchData(location?.search);
  }, [location?.search]);

  function onChangePagination(e: IOnchangePaginationData) {
    const param = convertObjToQueryParam(e);
    navigate({ search: param });
  }

  function fetchData(param?: string) {
    dispatch(streamingAction.getListStreamingRoom(param)).then();
  }

  return { dataList, loadingList, paginatedData, onChangePagination };
}
