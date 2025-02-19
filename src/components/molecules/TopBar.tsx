import { MdPerson } from 'react-icons/md';
import { IconButton } from '../atoms/IconButton.tsx';
import { StreamingStatusText } from '../atoms/StreamingStatusText.tsx';

export function TopBar() {
  return (
    <div className={'fixed z-[99] border-b-2 w-screen h-top-bar-height bg-white'}>
      <div className={'w-full  pl-4 px-10 h-full flex items-center justify-between'}>
        <h1>TOP BAR</h1>
        <div className={'flex gap-3'}>
          <StreamingStatusText />
          <IconButton>
            <MdPerson />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
