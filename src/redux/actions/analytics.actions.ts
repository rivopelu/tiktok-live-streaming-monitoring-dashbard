import BaseActions from '../base-actions.ts';
import { AnalyticsSlice } from '../reducers/analytics.slice.ts';
import { Dispatch } from '@reduxjs/toolkit';
import { ENDPOINT } from '../../constants/endpoint.ts';
import { BaseResponse } from '../../models/response/IResModel.ts';
import { IResOverviewAnalytics } from '../../models/response/IResOverviewAnalytics.ts';

export class AnalyticsActions extends BaseActions {
  private action = AnalyticsSlice.actions;

  getOverview() {
    return async (dispatch: Dispatch) => {
      dispatch(this.action.overview({ loading: true, data: undefined }));
      await this.httpService
        .GET(ENDPOINT.OVERVIEW_ANALYTICS())
        .then((res: BaseResponse<IResOverviewAnalytics>) => {
          dispatch(this.action.overview({ loading: false, data: res.data.response_data }));
        })
        .catch((e) => {
          dispatch(this.action.overview({ loading: false, data: undefined }));
          this.errorService.fetchApiError(e);
        });
    };
  }
}
