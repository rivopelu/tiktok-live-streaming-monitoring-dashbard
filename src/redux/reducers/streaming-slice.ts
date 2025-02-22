import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IResDataMessageTiktokEvent } from '../../models/response/IResDataMessageTiktokEvent';
import {
  BasePayload,
  BasePayloadPaginated,
  IPayloadData,
  IPayloadDataPaginated,
} from '../../models/response/IResModel';
import { IResListStreamingRoom } from '../../models/response/IResListStreamingRoom.ts';

export interface IStreamingSlice {
  messageEvent?: IPayloadData<IResDataMessageTiktokEvent>;
  listStreamingRoom?: IPayloadDataPaginated<IResListStreamingRoom[]>;
  viewerCount?: number;
}

const initState: IStreamingSlice = {};

export const StreamingSlice = createSlice({
  name: 'streaming',
  initialState: initState,
  reducers: {
    setDataEvent: (state: IStreamingSlice, action: BasePayload<IResDataMessageTiktokEvent>) => {
      state.messageEvent = action.payload;
    },
    setViewerCount: (state: IStreamingSlice, action: PayloadAction<number>) => {
      state.viewerCount = action.payload;
    },
    setListStreamingRoom: (state: IStreamingSlice, action: BasePayloadPaginated<IResListStreamingRoom[]>) => {
      state.listStreamingRoom = action.payload;
    },
  },
});
