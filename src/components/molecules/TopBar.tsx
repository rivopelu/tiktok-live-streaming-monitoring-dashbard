import { MdPerson } from 'react-icons/md';
import { IconButton } from '../atoms/IconButton.tsx';
import { StreamingStatusText } from '../atoms/StreamingStatusText.tsx';
import { HttpService } from '../../services/http.service.ts';
import { useEffect, useState } from 'react';
import { ENDPOINT } from '../../constants/endpoint.ts';
import { BaseResponse } from '../../models/response/IResModel.ts';

type typeActiveStreaming = 'ACTIVE' | 'INACTIVE' | undefined;

export function TopBar() {
  const httpService = new HttpService();

  const [activeStreaming, setActiveStreaming] = useState<typeActiveStreaming>();

  useEffect(() => {
    httpService.GET(ENDPOINT.CHECK_STREAMING_STATUS()).then((res: BaseResponse<boolean>) => {
      setActiveStreaming(res.data ? 'ACTIVE' : 'INACTIVE');
    });
  }, []);

  return (
    <div className={'fixed z-[99] border-b-2 w-screen h-top-bar-height bg-white'}>
      <div className={'w-full  pl-4 px-10 h-full flex items-center justify-between'}>
        <h1>TOP BAR</h1>
        <div className={'flex gap-7'}>
          {activeStreaming && (
            <>
              <StreamingStatusText />
              <div>
                <div className={'h-full bg-slate-200 w-1 rounded-full '}></div>
              </div>
            </>
          )}
          <IconButton>
            <MdPerson />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
