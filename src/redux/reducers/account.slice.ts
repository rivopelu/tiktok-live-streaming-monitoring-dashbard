import { IResGetMe } from '../../models/response/IResGetMe.ts';
import { BasePayload, IPayloadData } from '../../models/response/IResModel.ts';
import { createSlice } from '@reduxjs/toolkit';

export interface IAccountSlice {
  getMe?: IPayloadData<IResGetMe>;
  isActiveStreaming?: IPayloadData<boolean>;
}

const initialState: IAccountSlice = {};

export const accountSlice = createSlice({
  name: 'account',
  initialState: initialState,
  reducers: {
    getMe: (state: IAccountSlice, action: BasePayload<IResGetMe>) => {
      state.getMe = action.payload;
    },
    setActiveStreaming: (state: IAccountSlice, action: BasePayload<boolean>) => {
      state.isActiveStreaming = action.payload;
    },
  },
});
