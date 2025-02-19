import { createSlice } from '@reduxjs/toolkit';
import { IResDataMessageTiktokEvent } from '../../models/response/IResDataMessageTiktokEvent';
import { BasePayload, IPayloadData } from '../../models/response/IResModel';

export interface IStreamingSlice {
  messageEvent?: IPayloadData<IResDataMessageTiktokEvent>;
}

const initState: IStreamingSlice = {};

export const StreamingSlice = createSlice({
  name: 'streaming',
  initialState: initState,
  reducers: {
    setDataEvent: (state: IStreamingSlice, action: BasePayload<IResDataMessageTiktokEvent>) => {
      state.messageEvent = action.payload;
    },
  },
});
