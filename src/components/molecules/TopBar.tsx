import { useEffect, useState } from 'react';
import { MdPerson } from 'react-icons/md';
import { typeActiveStreaming } from '../../models/response/IResModel.ts';
import { AccountActions } from '../../redux/actions/account.actions.ts';
import { IAccountSlice } from '../../redux/reducers/account.slice.ts';
import { useAppDispatch, useAppSelector } from '../../redux/store.ts';
import { IconButton } from '../atoms/IconButton.tsx';
import { StreamingStatusText } from '../atoms/StreamingStatusText.tsx';
import { Dropdown } from '../atoms/Dropdown.tsx';
import { Card } from '../atoms/Card.tsx';
import { twMerge } from 'tailwind-merge';
import { useData } from '../../hooks/useData.ts';

export function TopBar() {
  const dispatch = useAppDispatch();
  const accountAction = new AccountActions();

  const Account: IAccountSlice = useAppSelector((state) => state.Account);

  const [activeStreaming, setActiveStreaming] = useState<typeActiveStreaming>();

  useEffect(() => {
    dispatch(accountAction.checkStatusStreaming()).then();
  }, []);

  useEffect(() => {
    setActiveStreaming(Account?.isActiveStreaming?.data ? 'ACTIVE' : 'INACTIVE');
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
          <Dropdown
            toggle={
              <IconButton>
                <MdPerson />
              </IconButton>
            }
          >
            <Card>
              {useData().profileMenuList.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    onClick={item.onClick}
                    key={i}
                    className={twMerge(
                      'flex items-center gap-2 px-4 py-2  cursor-pointer',
                      'hover:bg-primary-main/30 duration-200 active:bg-primary-main/20',
                    )}
                  >
                    <Icon />
                    <div>{item.label}</div>
                  </div>
                );
              })}
            </Card>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
