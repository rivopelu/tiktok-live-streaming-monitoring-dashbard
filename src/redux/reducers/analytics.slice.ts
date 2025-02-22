import { BasePayload, IPayloadData } from '../../models/response/IResModel.ts';
import { IResOverviewAnalytics } from '../../models/response/IResOverviewAnalytics.ts';
import { createSlice } from '@reduxjs/toolkit';

export interface IAnalyticsSlice {
  overview?: IPayloadData<IResOverviewAnalytics>;
}

const initialState: IAnalyticsSlice = {};

export const AnalyticsSlice = createSlice({
  initialState: initialState,
  name: 'analytics',
  reducers: {
    overview: (state: IAnalyticsSlice, action: BasePayload<IResOverviewAnalytics>) => {
      state.overview = action.payload;
    },
  },
});
