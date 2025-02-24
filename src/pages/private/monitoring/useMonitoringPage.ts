import { useEffect, useState } from 'react';
import { IResDataMessageTiktokEvent } from '../../../models/response/IResDataMessageTiktokEvent.ts';
import { IStreamingSlice } from '../../../redux/reducers/streaming-slice.ts';
import { useAppSelector } from '../../../redux/store.ts';
import { TIKTOK_EVENT_ENUM } from '../../../enums/tiktok_event_enum.ts';

export function useMonitoringPage() {
  const [dataLike, setDataLike] = useState<IResDataMessageTiktokEvent[]>([]);
  const [dataComment, setDataComment] = useState<IResDataMessageTiktokEvent[]>([]);
  const [dataShare, setDataShare] = useState<IResDataMessageTiktokEvent[]>([]);
  const [dataJoin, setDataJoin] = useState<IResDataMessageTiktokEvent[]>([]);
  const [dataFollow, setDataFollow] = useState<IResDataMessageTiktokEvent[]>([]);
  const [dataGift, setDataGift] = useState<IResDataMessageTiktokEvent[]>([]);
  const [dataGiftCombo, setDataGiftCombo] = useState<IResDataMessageTiktokEvent[]>([]);
  const [dataLogger, setDataLogger] = useState<IResDataMessageTiktokEvent[]>([]);
  const [dataViewer, setDataViewer] = useState<number>(0);

  const Streaming: IStreamingSlice = useAppSelector((state) => state.Streaming);

  useEffect(() => {
    if (Streaming.messageEvent?.data) {
      setLastMessage(Streaming.messageEvent.data);
    }
  }, [Streaming.messageEvent?.data]);

  useEffect(() => {
    if (Streaming?.viewerCount) {
      setDataViewer(Streaming.viewerCount);
    }
  }, [Streaming.viewerCount]);

  function setLastMessage(parseData: IResDataMessageTiktokEvent) {
    setDataLogger((e) => [parseData, ...e].splice(0, 5));
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
        setDataFollow((e) => [parseData, ...e].splice(0, 5));
        return;
      case TIKTOK_EVENT_ENUM.GIFT:
        setDataGift((e) => [parseData, ...e].splice(0, 5));
        return;
      case TIKTOK_EVENT_ENUM.GIFT_COMBO:
        setDataGiftCombo((e) => [parseData, ...e].splice(0, 5));
        return;
      default:
        return;
    }
  }

  return { dataLike, dataShare, dataComment, dataJoin, dataFollow, dataGift, dataGiftCombo, dataLogger, dataViewer };
}
