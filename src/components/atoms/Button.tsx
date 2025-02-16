import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export function Button(props: IProps) {
  function checkRounded() {
    switch (props.rounded) {
      case 'full':
        return 'rounded-full';
      case 'small':
        return 'rounded-sm';
      case 'large':
        return 'rounded-lg';
      case 'medium':
        return 'rounded-md';
      default:
        return 'rounded-lg';
    }
  }

  return (
    <button
      className={twMerge(
        'bg-white border-2 w-full duration-200 py-2 px-4 cursor-pointer cursor-pointer ',
        'hover:bg-primary-main/30  ',
        'active:bg-primary-main/20 active:translate-y-[-2px] ',
        checkRounded(),
      )}
    >
      {props.children}
    </button>
  );
}

interface IProps {
  children: ReactNode;
  rounded?: 'full' | 'small' | 'medium' | 'large';
}
