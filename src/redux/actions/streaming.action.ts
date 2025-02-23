import { Dispatch } from '@reduxjs/toolkit';
import { IResDataMessageTiktokEvent } from '../../models/response/IResDataMessageTiktokEvent';
import BaseActions from '../base-actions';
import { StreamingSlice } from '../reducers/streaming-slice';
import { ENDPOINT } from '../../constants/endpoint.ts';
import { BaseResponsePaginated } from '../../models/response/IResModel.ts';
import { IResListStreamingRoom } from '../../models/response/IResListStreamingRoom.ts';

export class StreamingAction extends BaseActions {
  private action = StreamingSlice.actions;

  messageEvent(data: IResDataMessageTiktokEvent) {
    return async (dispatch: Dispatch) => {
      dispatch(this.action.setDataEvent({ data: data }));
    };
  }

  viewerInfo(data: number) {
    return async (dispatch: Dispatch) => {
      dispatch(this.action.setViewerCount(data));
    };
  }

  getListStreamingRoom(param?: string) {
    return async (dispatch: Dispatch) => {
      dispatch(this.action.setListStreamingRoom({ loading: true, data: undefined }));
      await this.httpService
        .GET(ENDPOINT.GET_STREAMING_ROOM() + (param || ''))
        .then((res: BaseResponsePaginated<IResListStreamingRoom[]>) => {
          dispatch(
            this.action.setListStreamingRoom({
              loading: false,
              data: res.data.response_data,
              paginated_data: res.data.paginated_data,
            }),
          );
        })
        .catch((e) => {
          dispatch(this.action.setListStreamingRoom({ loading: false, data: undefined }));
          this.errorService.fetchApiError(e);
        });
    };
  }
}
