import { Dispatch } from '@reduxjs/toolkit';
import BaseActions from '../base-actions';
import { accountSlice } from '../reducers/account.slice';
import { ENDPOINT } from '../../constants/endpoint';
import { BaseResponse } from '../../models/response/IResModel';

export class AccountActions extends BaseActions {
  private action = accountSlice.actions;
  checkStatusStreaming() {
    return async (dispatch: Dispatch) => {
      dispatch(this.action.setActiveStreaming({ data: undefined, loading: true }));
      await this.httpService
        .GET(ENDPOINT.CHECK_STREAMING_STATUS())
        .then((res: BaseResponse<boolean>) => {
          dispatch(this.action.setActiveStreaming({ loading: false, data: res.data.response_data }));
        })
        .catch((e) => {
          this.errorService.fetchApiError(e);
          dispatch(this.action.setActiveStreaming({ loading: false, data: undefined }));
        });
    };
  }
}
