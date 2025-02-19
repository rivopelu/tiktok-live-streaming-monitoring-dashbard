import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export function IconButton(props: IProps) {
  return (
    <button
      className={twMerge(
        'cursor-pointer duration-300 h-8 rounded-full border-2 flex items-center justify-center w-8 bg-white',
        'hover:bg-gray-100',
        'active:bg-primary-main/30 active:scale-110',
      )}
    >
      {props.children}
    </button>
  );
}

interface IProps {
  children: ReactNode;
  onClick?: () => void;
}
