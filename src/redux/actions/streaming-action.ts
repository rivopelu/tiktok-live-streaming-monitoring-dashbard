import { Dispatch } from '@reduxjs/toolkit';
import { IResDataMessageTiktokEvent } from '../../models/response/IResDataMessageTiktokEvent';
import BaseActions from '../base-actions';
import { StreamingSlice } from '../reducers/streaming-slice';

export class StreamingAction extends BaseActions {
  private action = StreamingSlice.actions;

  messageEvent(data: IResDataMessageTiktokEvent) {
    return async (dispatch: Dispatch) => {
      dispatch(this.action.setDataEvent({ data: data }));
    };
  }
}
