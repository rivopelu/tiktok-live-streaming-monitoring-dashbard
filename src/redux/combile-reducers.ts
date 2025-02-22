import { accountSlice } from './reducers/account.slice.ts';
import { StreamingSlice } from './reducers/streaming-slice.ts';
import { AnalyticsSlice } from './reducers/analytics.slice.ts';

export const combineReducers: any = {
  Account: accountSlice.reducer,
  Streaming: StreamingSlice.reducer,
  Analytics: AnalyticsSlice.reducer,
};
