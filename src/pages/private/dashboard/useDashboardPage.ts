import { useEffect, useState } from 'react';
import { ENDPOINT } from '../../../constants/endpoint';
import { typeActiveStreaming } from '../../../models/response/IResModel';
import { useAuth } from '../../../providers/UseAuth';
import { IAccountSlice } from '../../../redux/reducers/account.slice';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import ErrorService from '../../../services/error.service';
import { HttpService } from '../../../services/http.service';
import { AccountActions } from '../../../redux/actions/account.actions';

export function useDashboardPage() {
  const auth = useAuth();
  const user = auth.user;
  const httpService = new HttpService();
  const errorService = new ErrorService();
  const dispatch = useAppDispatch();
  const accountActions = new AccountActions();

  const Account: IAccountSlice = useAppSelector((state) => state.Account);

  const [streamingStatus, setStreamingstatus] = useState<typeActiveStreaming>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (Account?.isActiveStreaming?.data != undefined) {
      setStreamingstatus(Account?.isActiveStreaming?.data ? 'ACTIVE' : 'INACTIVE');
    }
  }, [Account?.isActiveStreaming]);

  useEffect(() => {
    dispatch(accountActions.checkStatusStreaming());
  }, []);

  const [chartSeries, setChartSeries] = useState([
    {
      name: 'series-1',
      data: Array.from({ length: 13 }, () => Math.floor(Math.random() * 100)),
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setChartSeries([
        {
          name: 'series-1',
          data: Array.from({ length: 13 }, () => Math.floor(Math.random() * 100)),
        },
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const chartOption = {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003],
    },
  };

  function onStartStreaming() {
    httpService
      .PATCH(ENDPOINT.START_STREAMING())
      .then(() => {
        setLoading(false);
        setStreamingstatus('ACTIVE');
      })
      .catch((e) => {
        errorService.fetchApiError(e);
        setLoading(false);
      });
  }

  function onEndStreaming() {
    httpService
      .PATCH(ENDPOINT.END_STREAMING())
      .then(() => {
        setStreamingstatus('INACTIVE');
        setLoading(false);
      })
      .catch((e) => {
        errorService.fetchApiError(e);

        setLoading(false);
      });
  }

  return { chartOption, chartSeries, user, streamingStatus, onEndStreaming, onStartStreaming, loading };
}
