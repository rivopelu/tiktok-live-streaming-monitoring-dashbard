import { useParams } from 'react-router-dom';
import { HttpService } from '../../../services/http.service.ts';
import ErrorService from '../../../services/error.service.ts';
import { useEffect, useState } from 'react';
import { ENDPOINT } from '../../../constants/endpoint.ts';
import { BaseResponse } from '../../../models/response/IResModel.ts';
import { IResDetailStreamingRoom } from '../../../models/response/IResDetailStreamingRoom.ts';

export function useDetailStreamingRoomPage() {
  const { id } = useParams();

  const httpSerivice = new HttpService();
  const errorService = new ErrorService();

  const [data, setData] = useState<IResDetailStreamingRoom | undefined>();

  useEffect(() => {
    if (id) {
      return () => {
        httpSerivice
          .GET(ENDPOINT.DETAIL_STREAMING_ROOM(id))
          .then((res: BaseResponse<IResDetailStreamingRoom>) => {
            setData(res.data.response_data);
          })
          .catch((e) => {
            errorService.fetchApiError(e);
          });
      };
    }
  }, [id]);

  return { id, data };
}
