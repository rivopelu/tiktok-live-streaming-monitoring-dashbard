import { accountSlice } from './reducers/account.slice.ts';

export const combineReducers: any = {
  Account: accountSlice.reducer,
};
